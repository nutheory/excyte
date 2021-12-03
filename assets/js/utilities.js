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

export const getEnv = () => {
  const loc = window.location.host
  if (loc.includes('staging.')) {
    return 'staging'
  } else if (loc.includes('ngrok') || loc.includes('localhost')) {
    return 'dev'
  } else {
    return 'prod'
  }
}

export const verifyLink = (link) => {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression)
  return link.match(regex)
}

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export const isTouch = () => {
  var hasTouchScreen = false
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0
  } else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches
    } else if ('orientation' in window) {
      hasTouchScreen = true
    } else {
      var UA = navigator.userAgent
      hasTouchScreen = (
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      )
    }
  }

  return hasTouchScreen
}
  
export const setupSizing = () => {
  window.isSm = window.innerWidth >= 640
  window.isMd = window.innerWidth >= 768
  window.isLg = window.innerWidth >= 1024
  window.isXl = window.innerWidth >= 1280
  window.isTouch = isTouch()
  window.isMobile = isTouch() && window.innerWidth <= 768
}

