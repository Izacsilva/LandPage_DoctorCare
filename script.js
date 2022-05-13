
let btnNAV = document.querySelector('.wrapper>svg')

btnNAV.addEventListener('click', scrollActiv)

function scrollActiv() {
    let navigation = document.querySelector('nav')
    navigation.classList.toggle('scroll')
}