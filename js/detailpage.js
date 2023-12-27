document.addEventListener('DOMContentLoaded', function () {
  var searchButton = document.querySelector('.frame-5-nPs button');
  if (searchButton) {
    searchButton.addEventListener('click', function () {
      // Şehir, check-in, check-out ve kişi bilgilerini al
      var city = document.querySelector('.search-city-input').value;
      var checkInDate = document.querySelector('.check-in-date-input').value;
      var checkOutDate = document.querySelector('.check-out-date-input').value;
      var peopleCount = document.querySelector('.people-input').value;

      // Verileri localStorage'a kaydet
      localStorage.setItem('city', city);
      localStorage.setItem('checkInDate', checkInDate);
      localStorage.setItem('checkOutDate', checkOutDate);
      localStorage.setItem('peopleCount', peopleCount);
    });
  }
});
