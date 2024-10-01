const json = [
  {
    "id": 123,
    "token": "awsr3-sd15-3325-b2oz",
    "gleba": "Lote 1"
  },
  {
    "id": 48,
    "token": "38x9-s9d5-i9sj-nvxz",
    "gleba": "Lote 2"
  }
];

json.forEach((item) => {
  console.log(item);
});

const message = document.getElementById("message");

const scanner = new Html5QrcodeScanner("camera", {
  qrbox: 250,
  fps: 20
});

const Success = (decodedText, decodedResult) => {
  if (decodedText) {
    message.textContent = `${decodedText} ${decodedResult}`;

    scanner.clear();
  }
};

const Err = (error) => {
  message.textContent = error;
}

scanner.render(Success, Err);
