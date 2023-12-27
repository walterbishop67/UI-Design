document.addEventListener('DOMContentLoaded', function () {
  // Sayfa yüklendiğinde local storage'dan verileri al
  var checkInDate = localStorage.getItem('checkInDate');
  var checkOutDate = localStorage.getItem('checkOutDate');
  var peopleCount = localStorage.getItem('peopleCount');

  // Eğer veriler varsa ilgili alanları doldur
  if (checkInDate) {
      document.getElementById('checkInDateInput').value ='     ' +checkInDate;
  }
  if (checkOutDate) {
      document.getElementById('checkOutDateInput').value = checkOutDate;
  }
  if (peopleCount) {
      document.getElementById('peopleInput').value = peopleCount;
  }
});