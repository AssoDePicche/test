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
