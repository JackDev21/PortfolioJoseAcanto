// Función para copiar al portapapeles
function copyToClipboard(text) {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

// Obtén el elemento del enlace
var emailLink = document.querySelector(".contact-email");
// Obtén el contenido del enlace (dirección de correo electrónico)
var emailAddress = emailLink.href;

// Obtén el ícono de copiar
var copyIcon = document.getElementById("copyEmail");

// Agrega un controlador de eventos clic al ícono de copiar
copyIcon.addEventListener("click", function () {
  // Llama a la función para copiar al portapapeles y pasa la dirección de correo electrónico
  copyToClipboard(emailAddress);
  // Cambia el nombre del ícono para indicar que se ha copiado
  copyIcon.setAttribute("name", "checkmark-outline");
  // Restaura el nombre del ícono después de 2 segundos
  setTimeout(function () {
    copyIcon.setAttribute("name", "copy-outline");
  }, 2000);
});
