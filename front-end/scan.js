import QrScanner from "qr-scanner";
import("path/to/qr-scanner.min.js").then((module) => {
  const QrScanner = module.default;
  // do something with QrScanner
});
QrScanner.hasCamera(); // async
const qrScanner = new QrScanner(videoElem, (result) => console.log("decoded qr code:", result));
qrScanner.start();
QrScanner.scanImage(image)
  .then((result) => console.log(result))
  .catch((error) => console.log(error || "No QR code found."));
qrScanner.stop();
