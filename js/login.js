function loginUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Kaydedilen kullanıcıları al
    var savedUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Email ve şifre kontrolü
    var user = savedUsers.find(u => u.email === email && u.password === password);
  
    if (user) {
      alert('Login Successful!');
    } else {
      alert('Invalid E-Mail or Password!');
    }
  }