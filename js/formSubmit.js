document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário de enviar o submit
  
  // Capturar os valores dos campos do formulário
  var fullName = document.getElementById('fullName').value;
  var emailAddress = document.getElementById('emailAddress').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var emailSubject = document.getElementById('emailSubject').value;
  var message = document.getElementById('message').value;
  
  // Montar o link mailto com os valores capturados
  var mailtoLink = 'mailto:alefe_sk8@hotmail.com' +
  '?subject=' + encodeURIComponent(emailSubject) +
  '&body=' + encodeURIComponent('Name: ' + fullName + '\nEmail: ' + emailAddress + '\nMobile Number: ' + mobileNumber + '\nMessage: ' + message);
  
  // Redirecionar para o link mailto
  window.location.href = mailtoLink;
});

// Manipulador de evento submit do formulário
document.getElementById('form').addEventListener('submit', function(e) {
  // Limpar os valores dos campos após o envio
  this.reset();
});


// document.getElementById('form').addEventListener('submit', function(e) {
//    // Redirecionar para a página de confirmação após o envio do formulário
//    window.location.href = 'confirmation.html';
// });
