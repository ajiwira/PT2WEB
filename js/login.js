// menangkap elemen form login
const form = document.querySelector('#login-form');

// menangkap elemen input username dan password
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// memeriksa apakah username dan password yang dimasukkan cocok dengan yang tersimpan di sessionStorage
function checkLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // mengambil data dari sessionStorage
  const data = JSON.parse(sessionStorage.getItem('registerData'));

  // mencari akun dengan username yang cocok
  const user = data.find(item => item.username === username);

  // memeriksa apakah password cocok
  if (user && user.password === password) {
    // jika cocok, simpan informasi user pada sessionStorage
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    // arahkan ke halaman dashboard atau halaman yang diinginkan
    alert("Berhasil Login")
    window.location.href = "index.html";
  } else {
    // jika tidak cocok, tampilkan pesan kesalahan
    alert('Username atau password salah!');
  }

  // reset form
  form.reset();
}

// menangani submit form login
form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkLogin();
});
