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

function submit() {
    let submitPrompt = document.getElementById('submit-prompt');
    submitPrompt.style.display = 'flex';
    // darken the body
    document.querySelector('.darken-body').style.display = 'flex';
  
    // Create the <a> element
    let linkToLogin = document.createElement('a');
    linkToLogin.href = '../pages/user-login.html';
  
    // Append the submit prompt to the link
    linkToLogin.appendChild(submitPrompt);
  
    // Append the link to the document body or any desired element
    document.body.appendChild(linkToLogin);
  }
  
  // Remove the prompt and direct the user to sign in
  function submitResponse() {
    // inputs
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let userName = document.getElementsByName('username').value;
    let password = document.getElementById('password').value;
    let submitPrompt = document.getElementById('submit-prompt').value;
    let submitTrue = document.getElementById('submitYes').value;
    
    // removes the value of inputs
   document.getElementById('first-name').value = "";
   document.getElementById('last-name').value = "";
   document.getElementById('username').value = "";
   document.getElementById('password').value = "";

    submitPrompt.style.display = 'none';
    document.querySelector('.darken-body').style.display = 'none';
  
    // Remove the appended link from the document
    submitTrue.parentNode.removeChild(submitTrue);
  }
