// Login

// Second box
const secondBox = document.getElementById('second-box')
// Form
const myForm = document.getElementById('my-form')
//E-mail
const email = document.getElementById('e-mail')
const errorEmailBox = document.getElementById('error-email')
// Password
const password = document.getElementById('user-password')
const errorPasswordBox = document.getElementById('error-password')
// Login button
const loginBtn = document.getElementById('save-btn')
// Terms and Services span
const termsAndServices = document.querySelector('#terms-box span')

// Login button function
loginBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let emailVal = email.value
  let passwordVal = password.value

  console.log(emailVal, passwordVal)
})