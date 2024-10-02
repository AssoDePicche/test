const Success = (decoded, type) => {
  if (!decoded) {
    return;
  }

  try {
    decoded = decoded.replace(/'/g, '"');

    decoded = JSON.parse(decoded);
  } catch {
    const error = document.getElementById("error");

    error.style.display = "block";

    error.textContent = "Erro ao processar QR Code";

    return;
  }

  const camera = document.getElementById("camera");

  if (!decoded.gleba) {
    camera.style.display = "block";

    return;
  }

  camera.style.display = "none";

  error.style.display = "none";

  const form = document.getElementById("form");

  const id = document.getElementById("id");

  id.setAttribute("value", decoded.id);

  const token = document.getElementById("token");

  token.setAttribute("value", decoded.token);

  const gleba = document.getElementById("gleba");

  gleba.setAttribute("value", decoded.gleba);

  form.style.display = "block";
};

const Err = (error) => {}

const scanner = new Html5Qrcode("camera");

scanner.start({facingMode: "environment"}, {fps: 10, qrbox: 250}, Success, Err);

const button = document.getElementById("scan");

button.addEventListener("click", () => {
  const form = document.getElementById("form");

  form.style.display = "none";

  const camera = document.getElementById("camera");

  camera.style.display = "block";
});