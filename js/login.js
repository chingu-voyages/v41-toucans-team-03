// Login

// Login box
const loginBox = document.getElementById('login-box')
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
// User Accounts
let userAccounts = []
// Loading from local storage
if (localStorage.userAccounts) {
  userAccounts = JSON.parse(localStorage.userAccounts)
}

// Login button function
loginBtn.addEventListener('click', (e) => {
  e.preventDefault()

  // Inputs values
  let emailVal = email.value
  let passwordVal = password.value

  // Login user id
  let userEmailId
  let userPasswordId
  let userIndex

  // Set login user id
  userAccounts.map((user, index) => {
    if (emailVal === user.email) {
      userEmailId = user.id
      userIndex = index
    }
    if (passwordVal === user.password) {
      userPasswordId = user.id
    }
  })

  // Compare users
  if (userEmailId === userPasswordId && userEmailId !== '' && userPasswordId !== '' && userEmailId !==   undefined && userPasswordId !== undefined) {
    registeredUser = userAccounts[userIndex]
    // User exists
    let showUser = `
    <h3>User panel</h3>
    <p>User id: ${registeredUser.id}</p>
    <p>First name: ${registeredUser.firstName}</p>
    <p>Last name: ${registeredUser.lastName}</p>
    <p>E-mail: ${registeredUser.email}</p>
    <button id="deleteBtn">Delete user</button>
    `
    myForm.style.display = 'none'
    loginBox.innerHTML = showUser
    loginBox.style.padding = '10px'
  } else {
    // User does not exist
    errorPasswordBox.style.display = 'block'
    email.setAttribute('class', 'error')
    password.setAttribute('class', 'error')
    errorPasswordBox.innerHTML = 'invalid email or password'
  }

  let deleteBtn = document.getElementById('deleteBtn')
    deleteBtn.addEventListener('click', deleteUser)

  function deleteUser() {
    // Delete selected user
    userAccounts.splice(userIndex, 1)
    // Save changes to local storage
    localStorage.userAccounts = JSON.stringify(userAccounts)
    // Back to index.html page
    window.location.assign("index.html")
  }
})