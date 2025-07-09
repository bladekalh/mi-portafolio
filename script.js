document.addEventListener("DOMContentLoaded", function () {
  // Mostrar mensaje al hacer clic en el correo
  const contactoLink = document.querySelector('a[href^="mailto:"]');
  if (contactoLink) {
    contactoLink.addEventListener("click", function () {
      alert("Gracias por tu interés. Estoy atento a tu mensaje.");
    });
  }

  // Mostrar/ocultar botón "ir arriba"
  const irArribaBtn = document.getElementById("ir-arriba");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      irArribaBtn.style.display = "block";
    } else {
      irArribaBtn.style.display = "none";
    }
  });

  // Volver arriba suavemente
  irArribaBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

