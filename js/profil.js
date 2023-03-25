function loadData() {
    // cek apakah ada data di sessionStorage
    if (sessionStorage.getItem('registerData')) {
      const dataArray = JSON.parse(sessionStorage.getItem('registerData'));
      const tableBody = document.querySelector('#data-table tbody');
  
      // tampilkan data pada tabel
      for (const data of dataArray) {
        const row = tableBody.insertRow();
        row.insertCell().textContent = data.name;
        row.insertCell().textContent = data.username;
        row.insertCell().textContent = data.email;
        row.insertCell().textContent = data.gender;
        row.insertCell().textContent = data.country;
      }
    } else {
      // jika tidak ada data, tampilkan pesan
      const tableBody = document.querySelector('#data-table tbody');
      const row = tableBody.insertRow();
      const cell = row.insertCell();
      cell.colSpan = 5;
      cell.textContent = 'No data found.';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    loadData();
  });
    