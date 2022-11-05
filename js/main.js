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
// User Accounts
let userAccounts = []

// Loading from local storage
if (localStorage.userAccounts) {
  userAccounts = JSON.parse(localStorage.userAccounts)
}

// Save button function
saveBtn.addEventListener('click', formValidation)

function formValidation(e) {
  e.preventDefault()

  let userData = {
    fnv: firstName.value,
    lnv: lastName.value,
    emv: email.value,
    psv: password.value
  }

  let errorsName = []
  let errorsLastName = []
  let errorsEmail = []
  let errorsPassword = []

  const nameRegex = new RegExp(/^[A-Za-z\s-]*$/)
  const emailRegex= new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
  const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/)

  // first name validation
  if (userData.fnv === '') {
    firstName.setAttribute('class', 'error')
    errorFirstNameBox.style.display = 'block'
    errorsName.push('First Name cannot be empty')
  } else if (userData.fnv.length < 3 || userData.fnv.length > 15) {
    firstName.setAttribute('class', 'error')
    errorFirstNameBox.style.display = 'block'
    errorsName.push('Min 3 max 15 characters')
  } else if (!nameRegex.test(userData.fnv)) {
    firstName.setAttribute('class', 'error')
    errorFirstNameBox.style.display = 'block'
    errorsName.push('only letters (either case), dash and space')
  }
  // last name validation
  if (userData.lnv === '') {
    lastName.setAttribute('class', 'error')
    errorLastNameBox.style.display = 'block'
    errorsLastName.push('Last Name cannot be empty')
  } else if (userData.lnv.length < 3 || userData.lnv.length > 15) {
    lastName.setAttribute('class', 'error')
    errorLastNameBox.style.display = 'block'
    errorsLastName.push('Min 3 max 15 characters')
  } else if (!nameRegex.test(userData.lnv)) {
    lastName.setAttribute('class', 'error')
    errorLastNameBox.style.display = 'block'
    errorsLastName.push('only letters (either case), dash or space')
  }
  // email validation
  if (userData.emv === '') {
    email.setAttribute('class', 'error')
    errorEmailBox.style.display = 'block'
    errorsEmail.push('Email cannot be empty')
  } else if (!emailRegex.test(userData.emv)) {
    email.setAttribute('class', 'error')
    errorEmailBox.style.display = 'block'
    errorsEmail.push('Please enter the correct email format.')
  }
  // password validation
  if (userData.psv === '') {
    password.setAttribute('class', 'error')
    errorPasswordBox.style.display = 'block'
    errorsPassword.push('Password cannot be empty')
  } else if (userData.psv.length < 4 || userData.psv.length > 15) {
    password.setAttribute('class', 'error')
    errorPasswordBox.style.display = 'block'
    errorsPassword.push('Min 4 max 15 characters')
  } else if (!passwordRegex.test(userData.psv)) {
    password.setAttribute('class', 'error')
    errorPasswordBox.style.display = 'block'
    errorsPassword.push('at least 1 lowercase, uppercase, number and symbol')
  }

  if (errorsName.length !== 0 || errorsLastName.length !== 0 || errorsEmail.length !== 0 || errorsPassword.length !== 0) {
    // there are errors
    errorFirstNameBox.innerHTML = errorsName
    errorLastNameBox.innerHTML = errorsLastName
    errorEmailBox.innerHTML = errorsEmail
    errorPasswordBox.innerHTML = errorsPassword

  } else {
    // everything's OK - submitting the form

    // New user data
    function newUserData() {
      let newUser = {}
      newUser.id = Math.floor(Math.random() * (1000000 - 1) + 1)
      newUser.firstName = userData.fnv
      newUser.lastName = userData.lnv
      newUser.email = userData.emv
      newUser.password = userData.psv
      userAccounts.push(newUser)
    }
    newUserData()
    saveNewUser()
   
    setTimeout(function () {
      myForm.submit()

      firstName.removeAttribute('class', 'error')
      errorFirstNameBox.style.display = 'none'

      lastName.removeAttribute('class', 'error')
      errorLastNameBox.style.display = 'none'

      email.removeAttribute('class', 'error')
      errorEmailBox.style.display = 'none'

      password.removeAttribute('class', 'error')
      errorPasswordBox.style.display = 'none'
    }, 1000)
    
  }
  
}

// Save new user to local storage
function saveNewUser() {
  localStorage.userAccounts = JSON.stringify(userAccounts)
}