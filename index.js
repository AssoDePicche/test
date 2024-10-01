const json = ["{\"id\": 885265, \"token\": \"Dkjrcrmv\", \"gleba\": \"Lote 7\"}", "{\"id\": 174641, \"token\": \"wrXOIdrI\", \"gleba\": \"Lote 6\"}", "{\"id\": 429563, \"token\": \"ZXOIdXke\", \"gleba\": \"Lote 7\"}", "{\"id\": 425832, \"token\": \"kFrkmuzk\", \"gleba\": \"Lote 3\"}", "{\"id\": 499048, \"token\": \"GPzJdjtC\", \"gleba\": \"Lote 8\"}", "{\"id\": 470146, \"token\": \"IOKTAcKB\", \"gleba\": \"Lote 7\"}", "{\"id\": 389382, \"token\": \"xOjzTVZD\", \"gleba\": \"Lote 9\"}", "{\"id\": 312281, \"token\": \"WGngEJOf\", \"gleba\": \"Lote 2\"}", "{\"id\": 714988, \"token\": \"KZKtqjCg\", \"gleba\": \"Lote 2\"}", "{\"id\": 6020, \"token\": \"EcTRhiEn\", \"gleba\": \"Lote 8\"}", "{\"id\": 12242, \"token\": \"ArFWYQTd\", \"gleba\": \"Lote 9\"}", "{\"id\": 171931, \"token\": \"jIlDhGqw\", \"gleba\": \"Lote 3\"}", "{\"id\": 808950, \"token\": \"WKfIGvKT\", \"gleba\": \"Lote 9\"}", "{\"id\": 249349, \"token\": \"vLJwLZNn\", \"gleba\": \"Lote 9\"}", "{\"id\": 455711, \"token\": \"ewDSOcrU\", \"gleba\": \"Lote 2\"}", "{\"id\": 451953, \"token\": \"TlygNeOj\", \"gleba\": \"Lote 10\"}", "{\"id\": 35551, \"token\": \"wcsBhTOQ\", \"gleba\": \"Lote 2\"}", "{\"id\": 597500, \"token\": \"JBQHWhYF\", \"gleba\": \"Lote 3\"}", "{\"id\": 16543, \"token\": \"ZGgGDOGV\", \"gleba\": \"Lote 9\"}", "{\"id\": 730009, \"token\": \"qbaLQeYP\", \"gleba\": \"Lote 2\"}"];

const Success = (decoded, type) => {
  if (!decoded) {
    return;
  }

  let found = false;

  json.every((item, index) => {
    if (item.token === decoded.token) {
      found = true;

      return false;
    }
  })

  const camera = document.getElementById("camera");

  if (!found) {
    camera.style.display = "block";

    return;
  }

  camera.style.display = "none";

  const form = document.getElementById("form");

  const id = document.getElementById("id");

  id.value = decoded.id;

  const token = document.getElementById("token");

  token.value = decoded.token;

  const gleba = document.getElementById("gleba");

  gleba.value = decoded.gleba;

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
