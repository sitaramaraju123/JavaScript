const startTime = new Date();

logWithTime("Start HTML parse");

window.addEventListener("load", () => {
  logWithTime("Document Rendered");
});

function logWithTime(message) {
  console.log(new Date() - startTime + "ms - " + message);
}
