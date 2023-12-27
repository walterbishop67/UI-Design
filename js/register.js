function registerUser() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var passwordAgain = document.getElementById('passwordAgain').value;

  // Ad ve Soyad kontrolü
  if (!firstName || !lastName || !phoneNumber || !email || !password || !passwordAgain) {
      alert('Please enter all needed informations.');
      return;
  }

  // Parola kontrolü
  if (password !== passwordAgain) {
      alert('Passwords do not match!');
      return;
  }

  var length=phoneNumber.length

  if(length !== 10){
    alert('You must write 10 digits. (Except the leading 0)')
    return;
  }

  // Kullanıcı objesini oluştur
  var user = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password
  };

  // Kaydedilen kullanıcıları al
  var savedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Yeni kullanıcıyı ekleyip localStorage'a kaydet
  savedUsers.push(user);
  localStorage.setItem('users', JSON.stringify(savedUsers));


  alert('Registration successful!');
}

function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  const passwordToggle = document.getElementById(`${inputId}Toggle`);

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordToggle.src = "./assets/adsz-tasarm-1-4Kj.png"; // Göster simgesi
  } else {
      passwordInput.type = "password";
      passwordToggle.src = "./assets/adsz-tasarm-1.png"; // Gizle simgesi
  }
}