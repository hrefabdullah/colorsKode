const red = document.querySelector("#redRange")
const green = document.querySelector("#greenRange")
const blue = document.querySelector("#blueRange")
const hex = document.querySelector("#hex")
const screen = document.querySelector("#screen")
const randColor = document.querySelector("#random")
const modeBtn = document.querySelector('.mode')
const colorDropDown = document.querySelector('.colorDropDown')
const redHead = document.querySelector("#redHead")
const greenHead = document.querySelector("#greenHead")
const blueHead = document.querySelector("#blueHead")
const opacity = document.querySelector("#opacity")
const opacityHead = document.querySelector("#opacityHead")

let mode = 'HEX'
modeBtn.innerHTML = mode

const toHex = (value) => {
    return parseInt(value).toString(16).padStart(2, "0")
}

const updateColor = () => {
    if (mode === 'HEX') {
        let r = toHex(red.value)
        let g = toHex(green.value)
        let b = toHex(blue.value)
        var color = `#${r}${g}${b}`
    } else if (mode === 'RGB') {
        var color = `rgb(${red.value},${green.value},${blue.value})`
    } else if (mode === 'HSL') {
        red.max = 360
        green.max = 100
        blue.max = 100
        var color = `hsl(${red.value},${green.value}%,${blue.value}%)`
    } else if (mode === 'RGBA'){
        var color = `rgba(${red.value},${green.value},${blue.value},${opacity.value})`
    } else if (mode === 'HSLA'){
        red.max = 360
        green.max = 100
        blue.max = 100
        var color = `hsla(${red.value},${green.value}%,${blue.value}%,${opacity.value})`
    }


    hex.innerHTML = color
    screen.style.backgroundColor = color
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
opacity.addEventListener("input", updateColor)

const randomColor = () => {
    if (mode === 'HEX') {
        var randomRed = toHex(Math.floor(1 + Math.random() * 255))
        var randomGreen = toHex(Math.floor(1 + Math.random() * 255))
        var randomBlue = toHex(Math.floor(1 + Math.random() * 255))
        var rColor = `#${randomRed}${randomGreen}${randomBlue}`

        red.value = randomRed
        green.value = randomGreen
        blue.value = randomBlue
    } else if (mode === 'RGB') {
        var randomRed = Math.floor(1 + Math.random() * 255)
        var randomGreen = Math.floor(1 + Math.random() * 255)
        var randomBlue = Math.floor(1 + Math.random() * 255)
        var rColor = `rgb(${randomRed},${randomGreen},${randomBlue})`

        red.value = randomRed
        green.value = randomGreen
        blue.value = randomBlue

    } else if(mode === 'HSL') {
        var randomHue = Math.floor(1 + Math.random() * 360)
        var randomSaturation = Math.floor(1 + Math.random() * 100)
        var randomLight = Math.floor(1 + Math.random() * 100)
        var rColor = `hsl(${randomHue},${randomSaturation}%,${randomLight}%)`

        red.value = randomHue
        green.value = randomSaturation
        blue.value = randomLight
    } else if (mode === 'RGBA'){
        var randomRed = Math.floor(1 + Math.random() * 255)
        var randomGreen = Math.floor(1 + Math.random() * 255)
        var randomBlue = Math.floor(1 + Math.random() * 255)
        var rColor = `rgba(${randomRed},${randomGreen},${randomBlue}, ${opacity.value})`

        red.value = randomRed
        green.value = randomGreen
        blue.value = randomBlue
    } else if(mode === 'HSLA'){
        var randomHue = Math.floor(1 + Math.random() * 360)
        var randomSaturation = Math.floor(1 + Math.random() * 100)
        var randomLight = Math.floor(1 + Math.random() * 100)
        var randomOpacity =  Math.trunc(1 + Math.random())
        var rColor = `hsla(${randomHue},${randomSaturation}%,${randomLight}%,${randomOpacity})`

        red.value = randomHue
        green.value = randomSaturation
        blue.value = randomLight
    }

    // console.log(rColor);
    hex.innerHTML = rColor
    screen.style.backgroundColor = rColor

}

const dropDown = () => {
    colorDropDown.classList.toggle('colorDropOn');
}

const changeMode = (value) => {
    mode = value
    console.log(mode);
    colorDropDown.classList.toggle('colorDropOn');
    modeBtn.innerHTML = mode
    // screen.style.backgroundColor = 'black'
    if (mode === 'RGB') {
        hex.innerHTML = `rgb(${red.value},${green.value},${blue.value})`
    } else if (mode === 'HEX') {
        hex.innerHTML = `#${toHex(red.value)}${toHex(green.value)}${toHex(blue.value)}`
    } else if(mode === 'HSL') {
        hex.innerHTML = `hsl(${red.value},${green.value}%,${blue.value}%)`
        redHead.innerHTML = 'Hue'
        greenHead.innerHTML = 'Saturation'
        blueHead.innerHTML = 'Light'
    } else if (mode === 'RGBA'){
        opacity.style.display = 'flex'
        opacityHead.style.display = 'flex'
        hex.innerHTML = `rgba(${red.value},${green.value}%,${blue.value}%, ${opacity.value})`
    } else if (mode === 'HSLA'){
        opacity.style.display = 'flex'
        opacityHead.style.display = 'flex'
        redHead.innerHTML = 'Hue'
        greenHead.innerHTML = 'Saturation'
        blueHead.innerHTML = 'Light'
        hex.innerHTML = `hsla(${red.value},${green.value}%,${blue.value}%,${opacity.value})`
    }
}

