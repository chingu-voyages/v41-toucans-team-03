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

  formValidation(newUser);
})

function formValidation(newUser) {
let errorMessages = {firstName:[], lastName: [], email: [], password: []}
const nameRegex = new RegExp(/^[A-Za-z\s-]*$/)
const emailRegex= new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)

if (newUser.firstName === '' || newUser.firstName === null) {
  errorMessages.firstName.push('Please input First Name.')
} else if (newUser.firstName.length < 3 || newUser.firstName.length > 15 || !nameRegex.test(newUser.firstName)) {
  errorMessages.firstName.push('First Name can contain letters (either case), dash and space; 3-15 characters.')
}

if (newUser.lastName === '' || newUser.lastName === null) {
  errorMessages.lastName.push('Please input Last Name.')
} else if (newUser.lastName.length < 3 || newUser.lastName.length > 15 || !nameRegex.test(newUser.lastName)) {
  errorMessages.lastName.push('Last Name can contain letters (either case), dash and space; 3-15 characters.')
}

if (newUser.email === '' || newUser.email === null) {
  errorMessages.email.push('Please input Email.')
} else if (!emailRegex.test(newUser.email)) {
  errorMessages.email.push('please enter the correct email format.')
}

if (newUser.password === '' || newUser.password === null) {
  errorMessages.password.push('Please input Password.')
} else if (newUser.password.length < 8 || newUser.password.length > 15 || !passwordRegex.test(newUser.password)) {
  errorMessages.password.push('Password must contain at least 1 lowercase, 1 uppercase, 1 numeric character and one special character; 8-15 characters.')
}

  console.log(nameRegex.test(newUser.firstName))
  console.log(nameRegex.test(newUser.lastName))
  console.log(emailRegex.test(newUser.email))
  console.log(passwordRegex.test(newUser.password))
  console.log(errorMessages)
}

