// v41-toucans-team-03

// Second box
const secondBox = document.getElementById('second-box')
// Form
const myForm = document.getElementById('my-form')
// First Name
const firstName = document.getElementById('first-name')
const errorFirstNameBox = document.getElementById('error-first-name')
// Last Name
const lastName = document.getElementById('last-name')
const errorLastNameBox = document.getElementById('error-last-name')
//E-mail
const email = document.getElementById('e-mail')
const errorEmailBox = document.getElementById('error-email')
// Password
const password = document.getElementById('user-password')
const errorPasswordBox = document.getElementById('error-password')
// Save button
const saveBtn = document.getElementById('save-btn')
// Terms and Services span
const termsAndServices = document.querySelector('#terms-box span')

// Save button function
saveBtn.addEventListener('click', (e) => {
  e.preventDefault()

  // New user
  let newUser = { firstName: '', lastName: '', email: '', password: '' }

  newUser.firstName = firstName.value
  newUser.lastName = lastName.value
  newUser.email = email.value
  newUser.password = password.value
})

console.log('Happy coding')

