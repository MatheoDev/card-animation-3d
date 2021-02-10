//CONTENT ANIMATE
const card = document.querySelector('.card')
const container = document.querySelector('.container')
//ELEMENT POSITION
const title = document.querySelector('.title')
const piece = document.querySelector('.piece')
const circle = document.querySelector('.circle')
const description = document.querySelector('.description')
const approve = document.querySelector('.approve')

container.addEventListener('mousemove', (e) => {
    let xAxe = (window.innerWidth / 2 - e.pageX) / 20
    let yAxe = (window.innerHeight / 2 - e.pageY) / 20
    card.style.transform = `rotateY(${xAxe}deg) rotateX(${yAxe}deg)`
})

container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`
    title.style.transform = `translateZ(80px)`
    piece.style.transform = `translateZ(80px) rotate(-30deg)`
    circle.style.transform = `translateZ(30px)`
    description.style.transform = `translateZ(70px)`
    approve.style.transform = `translateZ(60px)`
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = `translateZ(0px)`
    piece.style.transform = `translateZ(0px) rotate(0deg)`
    circle.style.transform = `translateZ(0px)`
    description.style.transform = `translateZ(0px)`
    approve.style.transform = `translateZ(0px)`
})