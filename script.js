const register = document.querySelector('.register')
const login = document.querySelector('.login')
const log = document.querySelector('.log')
const reg = document.querySelector('.reg')
const btn1 = document.querySelector('.btn1 button')
const btn2 = document.querySelector('.btn2 button')
const container = document.querySelector('.conatiner')

const name1 = document.querySelector('.name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const confirm_password = document.querySelector('.confirm-password')
const email1 = document.querySelector('.email1')
const password1 = document.querySelector('.password1')



login.addEventListener('click', () => {
    log.classList.add('active')
    reg.classList.add('active')
    register.style.borderBottom = 'none'
    login.style.borderBottom = '2px solid rgb(59, 22, 119)'
})
register.addEventListener('click', () => {
    log.classList.remove('active')
    reg.classList.remove('active')
    register.style.borderBottom = '2px solid rgb(59, 22, 119)'
    login.style.borderBottom = 'none'

})
let a;
let b;
btn1.addEventListener('click', () => {
    if(name1.value == '' || email.value == '' || password.value == '' || confirm_password.value == ''){
        alert('Password error')
    }else if(password.value == confirm_password.value){
        log.classList.add('active')
        reg.classList.add('active')
        login.style.borderBottom = '2px solid rgb(59, 22, 119)'
        reg.style.display = 'none'
    }
})
btn2.addEventListener('click', () => {
    if((password.value == password1.value && email.value == email1.value) || (password1.value == '' && email1.value =='')){
        container.style.display = 'none'
        alert('You are successful')
    }else{
        alert('email or password error')
    }
})



