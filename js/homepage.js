document.addEventListener('DOMContentLoaded', function () {
    // Ana sayfa yüklendiğinde çalışacak kodlar buraya gelecek
    var checkInDateInput = document.getElementById('checkInDate');
    var cityInput = document.querySelector('input[placeholder="City"]');
    var checkOutDateInput = document.querySelector('input[placeholder="Check-out date"]');
    var peopleInput = document.querySelector('input[placeholder="People"]');
  
    // Local storage'dan verileri al
    var storedCheckInDate = localStorage.getItem('checkInDate');
    var storedCity = localStorage.getItem('city');
    var storedCheckOutDate = localStorage.getItem('checkOutDate');
    var storedPeopleCount = localStorage.getItem('peopleCount');
  
    // Eğer veriler varsa ilgili alanları doldur
    if (storedCheckInDate) {
        checkInDateInput.value = storedCheckInDate;
    }
    if (storedCity) {
        cityInput.value = storedCity;
    }
    if (storedCheckOutDate) {
        checkOutDateInput.value = storedCheckOutDate;
    }
    if (storedPeopleCount) {
        peopleInput.value = storedPeopleCount;
    }
  
    // Local storage'a veri kaydetme fonksiyonu
    function saveDataToLocalStorage() {
      localStorage.setItem('checkInDate', checkInDateInput.value);
      localStorage.setItem('city', cityInput.value);
      localStorage.setItem('checkOutDate', checkOutDateInput.value);
      localStorage.setItem('peopleCount', peopleInput.value);
    }
  
    // Event listener ekleyerek verilerin her değiştiğinde kaydedilmesini sağla
    checkInDateInput.addEventListener('change', saveDataToLocalStorage);
    cityInput.addEventListener('input', saveDataToLocalStorage);
    checkOutDateInput.addEventListener('change', saveDataToLocalStorage);
    peopleInput.addEventListener('input', saveDataToLocalStorage);
  });