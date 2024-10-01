const button = document.getElementById("button");

const video = document.getElementById("video");

const message = document.getElementById("message");

const scanner = new Html5Qrcode("camera");

const Callback = (decodedText, decodedResult) => {
  if (decodedText) {
    message.textContent = decodedText;

    scanner.stop();
  }
};

const config = {fps: 10, qrbox: {width:250, height:250}};

scanner.start({facingMode: "environment"}, config, Callback);
