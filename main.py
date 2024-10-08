import json
import qrcode
import string
import random

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
    data = {}

    for _ in range(0, 20):
        rand_id = random.randint(0, 1000000)

        rand_token = ''.join(random.choices(string.ascii_letters, k=8))

        rand_gleba = 'Lote ' + str(random.randint(1, 10))
        
        data['id'] = rand_id
        data['token'] = rand_token
        data['gleba'] = rand_gleba


    with open('index.json', 'w') as file:
        json.dump(data, file, indent = 6)

        filename: str = str(data['id']) + '.png'
        create_qr_code(data, filename)
