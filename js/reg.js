// menangkap elemen form
const form = document.querySelector('#register-form');

// menangkap elemen input
const nameInput = document.querySelector('#name');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const countrySelect = document.querySelector('#country');
const agreeCheckbox = document.querySelector('#agree');

// menyimpan data pada session storage
function saveData() {
  // buat objek untuk menyimpan data
  const data = {
    name: nameInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
    gender: '',
    country: countrySelect.value,
    agree: agreeCheckbox.checked
  };

  // cari input radio gender yang terpilih
  for (const input of genderInputs) {
    if (input.checked) {
      data.gender = input.value;
      break;
    }
  }

  // simpan data pada session storage
  let dataArray = [];
  if (sessionStorage.getItem('registerData')) {
    dataArray = JSON.parse(sessionStorage.getItem('registerData'));
  }
  dataArray.push(data);
  sessionStorage.setItem('registerData', JSON.stringify(dataArray));

  // tampilkan pop up berhasil mendaftar
  alert('Anda berhasil mendaftar');
  window.location.href = "login.html"

  // reset form
  form.reset();
}

// menangani submit form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveData();
});
