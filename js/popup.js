// menangkap elemen pop up
const welcomePopup = document.querySelector('#welcome-popup');

// menampilkan pop up selamat datang beserta nama
function showWelcomePopup(name) {
  const message = `Selamat datang, ${name}!`;
  welcomePopup.querySelector('p').textContent = message;
  welcomePopup.classList.add('active');
}

// ambil data dari session storage
const dataArray = JSON.parse(sessionStorage.getItem('registerData'));

// cari data sesuai dengan username yang login
const currentUser = dataArray.find(data => data.username === username);

// tampilkan pop up selamat datang jika data ditemukan
if (currentUser) {
  showWelcomePopup(currentUser.name);
}
