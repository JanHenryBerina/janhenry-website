// password toggle (hidden - visible)
function viewPassword() {
    let passwordFields = document.querySelectorAll('#password');
    passwordFields.forEach(function(password) {
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    });
  }