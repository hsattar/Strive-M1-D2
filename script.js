// TOGGLE BETWEEN LIGHT AND DARK MODE

let darkTheme = true;

const root = document.documentElement
const darkToggle = document.querySelector('.initials')

const toggleTheme = () => {

    if (darkTheme) {
        root.style.setProperty('--bgc', '#5e5e5e')
        root.style.setProperty('--alternate-bgc', '#3e3e3e')
        root.style.setProperty('--light-text', '#f0e9e9')
        root.style.setProperty('--dark-text', '#f0e9e9')
        root.style.setProperty('--initials-bg', '#f0e9e9')
        root.style.setProperty('--initials-text', '#3e3e3e')
        darkToggle.setAttribute('title', 'Light Mode')
        darkTheme = false
    } else {
        root.style.setProperty('--bgc', '#f0e9e9')
        root.style.setProperty('--alternate-bgc', '#d2d3da')
        root.style.setProperty('--light-text', '#fff')
        root.style.setProperty('--dark-text', '#000')
        root.style.setProperty('--initials-bg', '#3e3e3e')
        root.style.setProperty('--initials-text', '#f0e9e9')
        darkTheme = true
    }
}

darkToggle.onclick = () => {
    toggleTheme()
}

// ABOUT ME TYPEWRITER EFFECT

let typingPosition = 0
const aboutMeText = 'I Am A Full Stack Engineer Student'
const typingSpeed = 50
const typewriterPlaceholder = document.getElementById('typewriter')

const typeWriterEffect = () => {
    if (typingPosition < aboutMeText.length) {
        typewriterPlaceholder.innerHTML += aboutMeText.charAt(typingPosition)
        typingPosition++
        setTimeout(typeWriterEffect, typingSpeed)
    }
}

window.onload = () => {
    typeWriterEffect()
}

console.log('test')