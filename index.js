const button = document.getElementById("button");

const video = document.getElementById("video");

const message = document.getElementById("message");

let scanning = false;

let barcodeDetector = null;

async function startScanning() {
  if (!('BarcodeDetector' in window)) {
    alert("BarcodeDetector isn't supported on this device");

    return;
  }

  const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}});

  video.srcObject = stream;

  barcodeDetector = new BarcodeDetector({formats: ['qr_code']});

  scanning = true;

  scanFrame();
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
  }

  if (scanning) {
    requestAnimationFrame(scanFrame);
  }
}

function sendQRCode(token) {
  message.textContent = token;
}

button.addEventListener('click', () => {
  if (!scanning) {
    message.textContent = '';

    startScanning();
  }
})
