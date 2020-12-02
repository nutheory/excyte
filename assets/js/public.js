// var showPassword = document.getElementById('show_password_txt')
// var userPasswordInput = document.getElementById('create_account_password')
// var createAccountForm = document.getElementById('create_account')
// var validateMlsButton = document.getElementById('validate_mls_btn')
// var mlsSelector = document.getElementById('mls_selector')
// var submitButton = document.getElementById('submit_btn')
// var authActionArea = document.getElementById('auth_action')
var passwordInstruct = document.getElementById('password_instruct')
var pwLength = document.getElementById('pw_length')
var pwCase = document.getElementById('pw_case')
var pwSpecial = document.getElementById('pw_special')
var passwordValid = false

const checkStrLength = (str, length) =>
str.length >= 8

const checkStrUpperLowerCase = (str) =>
  str.toUpperCase() != str && str.toLowerCase() != str

const checkStrAlphanumeric = (str) =>
  /[a-z]/i.test(str) && /[0-9]/i.test(str)

const checkStrSpecialChar = (str) => /[!@#$%]/i.test(str)


export const toggleShowPassword = (e, userPasswordInput, showPassword) => {
  e.stopPropagation()
  if (userPasswordInput){
    if (userPasswordInput.type === "password") {
      showPassword.innerHTML = "hide password"
      userPasswordInput.type = "text"
    } else {
      showPassword.innerHTML = "show password"
      userPasswordInput.type = "password"
    }
  }
}


// const selectMls = async () => {
//   if (mlsSelector.value === ""){
//     mlsSelector.style.cssText = "color: red;"
//   } else {
//     mlsSelector.style.cssText = "color: black;"
//   }
// }

export const validatePassword = (ev) => {
  const str = ev.currentTarget.value
  if (checkStrLength(str)) {
    pwLength.style.cssText = "color: green;"
  } else {
    pwLength.style.cssText = "color: #4a5568;"
  }

  if (checkStrUpperLowerCase(str)) {
    pwCase.style.cssText = "color: green;"
  } else {
    pwCase.style.cssText = "color: #4a5568;"
  }

  if (checkStrSpecialChar(str) || checkStrAlphanumeric(str)) {
    pwSpecial.style.cssText = "color: green;"
  } else {
    pwSpecial.style.cssText = "color: #4a5568;"
  }

  if (checkStrLength(str) && checkStrUpperLowerCase(str) && (checkStrAlphanumeric(str) || checkStrSpecialChar(str))) {
    passwordValid = true
  } else {
    passwordValid = false
  }
}