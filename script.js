'use strict'

// wqo4UBI9pXJvbSzNYYMAxK3FQZoSciS1RGhVqLKXass
// gJbyiIBRT3nQhfxxAvzZTYIFTWhsF1YCT_ZA3F7VIyk

const register = document.querySelector('.register'),
    login = document.querySelector('.login'),
    hello = document.querySelector('.hello'),
    email = document.querySelector('.email'),
    password = document.querySelector('.password'),
    confirmPassword = document.querySelector('.confirm-password'),
    submit = document.querySelector('.btn-submit'),
    remember = document.querySelector('.container-info')

register.addEventListener('click', () => {
    register.classList.add('active')
    login.classList.remove('active')
    hello.textContent = 'Hello'
    email.style.display = 'block'
    confirmPassword.style.display = 'block'
    submit.textContent = 'Register'
    remember.innerHTML = `
    <p class="container-info">I accept the <a href="#" class="forget">Contact Me ?</a></p>
    `

})
login.addEventListener('click', () => {
    login.classList.add('active')
    register.classList.remove('active')
    hello.textContent = 'Username'
    email.style.display = 'none'
    confirmPassword.style.display = 'none'
    submit.textContent = 'Login'
    remember.innerHTML = `
    <p class="container-info">Remember Me <a href="#" class="forget">Forget password ?</a></p>
    `
})

