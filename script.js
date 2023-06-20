document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
  
    // Perform login validation here
    // For simplicity, we'll just display an alert with the username and password
    alert("Login\nUsername: " + username + "\nPassword: " + password);
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;
  
    // Perform registration validation here
    // For simplicity, we'll just display an alert with the username and password
    alert("Registration\nUsername: " + username + "\nPassword: " + password);
  });
  