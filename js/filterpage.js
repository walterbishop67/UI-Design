document.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.querySelector('.frame-5-WF3 button');
    if (searchButton) {
      searchButton.addEventListener('click', function () {
        // Şehir, check-in, check-out ve kişi bilgilerini al
        var city = document.querySelector('.cityyy').value;
        var checkInDate = document.querySelector('.indatee').value;
        var checkOutDate = document.querySelector('.outdatee').value;
        var peopleCount = document.querySelector('.peoplee').value;
  
        // Verileri localStorage'a kaydet
        localStorage.setItem('city', city);
        localStorage.setItem('checkInDate', checkInDate);
        localStorage.setItem('checkOutDate', checkOutDate);
        localStorage.setItem('peopleCount', peopleCount);
      });
    }
  });
  