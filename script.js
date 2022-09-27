const message =
  "Your message has been sent to the Argo ship. Your contact will respond within a day.";

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
