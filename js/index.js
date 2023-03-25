// Ambil data pengguna dari Session Storage
const users = JSON.parse(sessionStorage.getItem('registerData'));

// Ambil nama pengguna dari data pengguna terakhir yang terdaftar
const userName = users[users.length - 1].name;

// Tampilkan pesan selamat datang
const welcomePopup = document.querySelector('.popup');
const welcomeMsg = document.querySelector('#user-name');
welcomeMsg.textContent = userName;
welcomePopup.style.display = "block";
