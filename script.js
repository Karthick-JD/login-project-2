const wrapper = document.querySelector(".wrapper")
const registerLink = document.querySelector(".register-link")
const loginLink = document.querySelector(".login-link")

const loginForm = document.querySelector(".login-form")
const RegisterForm = document.querySelector(".register-form")

const login = document.querySelector(".login")
const register = document.querySelector(".register")

const loginBtn = document.querySelector(".log-in")
const close = document.querySelector(".icon-close")

registerLink.addEventListener("click", function() {
    wrapper.classList.add("active")
    loginForm.reset()
})

loginLink.addEventListener("click", function() {
    wrapper.classList.remove("active")
    RegisterForm.reset()
})

loginBtn.addEventListener("click", function(){
    wrapper.classList.add("close")
    loginForm.reset()
    RegisterForm.reset()
})

close.addEventListener("click", function(){
    wrapper.classList.remove("close")
    wrapper.classList.remove("active")
})
