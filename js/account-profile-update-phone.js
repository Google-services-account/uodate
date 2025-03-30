
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phoneInput');
  const errorMessage = document.getElementById('errorMessage');
  const updateButton = document.getElementById('updateButton');

  // --- INICIO: Listener para la tecla Enter en el input del teléfono ---
  if (phoneInput && updateButton) {
      phoneInput.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') { // 'keyCode' está obsoleto
              event.preventDefault();
              updateButton.click();
          }
      });
  }
  // --- FIN: Listener para la tecla Enter ---

  // --- Validación del número de teléfono al hacer clic ---
  if (updateButton && phoneInput && errorMessage) {
    updateButton.addEventListener('click', function() {
      const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Solo números
      if (phoneNumber.length < 10) {
        phoneInput.classList.add('error');
        errorMessage.style.display = 'block';
      } else {
        console.log('Número de teléfono válido:', phoneNumber);
        // Aquí puedes redirigir o actualizar la configuración
        (function() {
            setTimeout(() => {
                window.location.href = "process-phone-update-confirmation.html";
            }, 1000);
          })();
          
      }
    });
  }
});

