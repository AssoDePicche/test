const json = ["{\"id\": 885265, \"token\": \"Dkjrcrmv\", \"gleba\": \"Lote 7\"}", "{\"id\": 174641, \"token\": \"wrXOIdrI\", \"gleba\": \"Lote 6\"}", "{\"id\": 429563, \"token\": \"ZXOIdXke\", \"gleba\": \"Lote 7\"}", "{\"id\": 425832, \"token\": \"kFrkmuzk\", \"gleba\": \"Lote 3\"}", "{\"id\": 499048, \"token\": \"GPzJdjtC\", \"gleba\": \"Lote 8\"}", "{\"id\": 470146, \"token\": \"IOKTAcKB\", \"gleba\": \"Lote 7\"}", "{\"id\": 389382, \"token\": \"xOjzTVZD\", \"gleba\": \"Lote 9\"}", "{\"id\": 312281, \"token\": \"WGngEJOf\", \"gleba\": \"Lote 2\"}", "{\"id\": 714988, \"token\": \"KZKtqjCg\", \"gleba\": \"Lote 2\"}", "{\"id\": 6020, \"token\": \"EcTRhiEn\", \"gleba\": \"Lote 8\"}", "{\"id\": 12242, \"token\": \"ArFWYQTd\", \"gleba\": \"Lote 9\"}", "{\"id\": 171931, \"token\": \"jIlDhGqw\", \"gleba\": \"Lote 3\"}", "{\"id\": 808950, \"token\": \"WKfIGvKT\", \"gleba\": \"Lote 9\"}", "{\"id\": 249349, \"token\": \"vLJwLZNn\", \"gleba\": \"Lote 9\"}", "{\"id\": 455711, \"token\": \"ewDSOcrU\", \"gleba\": \"Lote 2\"}", "{\"id\": 451953, \"token\": \"TlygNeOj\", \"gleba\": \"Lote 10\"}", "{\"id\": 35551, \"token\": \"wcsBhTOQ\", \"gleba\": \"Lote 2\"}", "{\"id\": 597500, \"token\": \"JBQHWhYF\", \"gleba\": \"Lote 3\"}", "{\"id\": 16543, \"token\": \"ZGgGDOGV\", \"gleba\": \"Lote 9\"}", "{\"id\": 730009, \"token\": \"qbaLQeYP\", \"gleba\": \"Lote 2\"}"];

const message = document.getElementById("message");

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

  message.textContent = (found) ? decoded : 'Jabuticabeira não encontrada.';
};

const Err = (error) => {}

const scanner = new Html5Qrcode("camera");

scanner.start({facingMode: "environment"}, {fps: 10, qrbox: 250}, Success, Err);
