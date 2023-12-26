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

  // Kullanıcı bilgilerini txt dosyasına yaz
  writeUserInfoToTxt(user);

  alert('Registration successful!');
}

function writeUserInfoToTxt(user) {
  var userInfo = `Name: ${user.firstName}\nLast Name: ${user.lastName}\nPhone Number: ${user.phoneNumber}\nEmail: ${user.email}\nPassword: ${user.password}\n\n`;

    // Mevcut veriyi al
    var existingData = localStorage.getItem('user_info') || '';

    // Yeni kullanıcı bilgisini ekleyip localStorage'a kaydet
    localStorage.setItem('user_info', existingData + userInfo);

    // Dosyayı güncelle
    updateTxtFile();
}

function updateTxtFile() {
  // Mevcut veriyi al
  var updatedData = localStorage.getItem('user_info') || '';

  // Metin dosyasına yaz
  var blob = new Blob([updatedData], { type: 'text/plain' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'user_info.txt';
  a.click();
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