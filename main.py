import json
import zlib
import qrcode
import string
import random

def read_json_from_file(file_path):
    with open(file_path, 'r') as file:
        json_data = json.load(file)

    return json_data


def write_json_to_file(data, file_path):
    with open(file_path, 'w') as file:
        json.dump(data, file)


def compress_and_encode(data):
    json_str = json.dumps(data)

    compressed_data = zlib.compress(json_str.encode('utf-8'))

    encoded_data = compressed_data.hex()

    return encoded_data


def decode_and_decompress(encoded_data):
    compressed_data = bytes.fromhex(encoded_data)

    json_str = zlib.decompress(compressed_data).decode('utf-8')

    decoded_data = json.loads(json_str)

    return decoded_data


def create_qr_code(data, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )

    qr.add_data(data)

    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    img.save(filename)


if __name__ == "__main__":
    tokens = []

    for _ in range(0, 10):
        rand_id = random.randint(0, 1000000)

        rand_token = ''.join(random.choices(string.ascii_letters, k=8))

        rand_gleba = 'Lote ' + str(random.randint(1, 10))

        row = json.dumps({'id': rand_id, 'token': rand_token, 'gleba': rand_gleba})

        write_json_to_file(row, rand_token + '.json')

        tokens.append(rand_token)

    for token in tokens:
        json_string = read_json_from_file(token + '.json')

        encoded_string = compress_and_encode(json_string)

        create_qr_code(encoded_string, token + '.png')

        decoded_string = decode_and_decompress(encoded_string)

        print("Decoded:", decoded_string)
