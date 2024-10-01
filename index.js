const button = document.getElementById("button");

const video = document.getElementById("video");

const message = document.getElementById("message");

let scanning = false;

let barcodeDetector = null;

async function startScanning() {
  if (!('BarcodeDetector' in window)) {
    message.textContent = "BarcodeDetector isn't supported on this device";

    return;
  }

  const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}});

  video.srcObject = stream;

  barcodeDetector = new BarcodeDetector({formats: ['qr_code']});

  scanning = true;

  scanFrame();

  timeoutHandle = setTimeout(() => {
    stopScanning();

    message.textContent = "Failed to Scan QR Code. Try again";

    button.textContent = "Retry";
  }, 30000)
}

async function scanFrame() {
  if (!scanning) {
    return;
  }

  try {
    const barcodes = await barcodeDetector.detect(video);

    if (barcodes.length <= 0) {
      return;
    }

    const qrCodeValue = barcodes[0].rawValue;

    message.textContent = `QR Code Scanned: ${qrCodeValue}`;

    scanning = false;

    video.srcObject.getTracks().forEach(track => track.stop());

    sendQRCode(qrCodeValue);
  } catch (error) {
    console.error("QR Code Detection Error: ", error);

    message.textContent = error;
  }

  if (scanning) {
    requestAnimationFrame(scanFrame);
  }
}

function stopScanning() {
  scanning = false;

  clearTimeout(timeoutHandle);

  if (video.srcObject) {
    video.srcObject.getTracks().forEach(track => track.stop());
  }
}

function sendQRCode(token) {
  const url = "./index.json";

  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  }).then(data => {
    message.textContent = data;
  }).catch (error => {
    console.error(error);

    message.textContent = error;
  })
}

button.addEventListener('click', () => {
  if (!scanning) {
    message.textContent = '';

    startScanning();
  }
})
