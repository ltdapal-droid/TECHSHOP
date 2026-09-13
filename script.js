const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const val = document.getElementById('value')
const price = document.querySelector('.price')
let cost = 1500 
function increment() {
    val.textContent=Number(val.textContent)+1
    price.textContent = Number(val.textContent) * cost
}
function decrement() {
    if (Number(val.textContent)>1) {
        val.textContent=Number(val.textContent)-1 
        price.textContent = Number(val.textContent) * cost
    }
}
plus.onclick=increment
minus.onclick=decrement


const medium = document.querySelector('.medium')
const large = document.querySelector('.large')


function mmedium() {
    cost = 1500
    price.textContent = Number(val.textContent) * 1500
    medium.classList.add('active')
    medium.classList.remove('inactive')
    large.classList.remove('active')
    large.classList.add('inactive')
}
function llarge() {
    cost = 1700
    price.textContent = Number(val.textContent) * 1700
    large.classList.add('active')
    large.classList.remove('inactive')
    medium.classList.remove('active')
    medium.classList.add('inactive')
}
medium.onclick=mmedium
large.onclick=llarge