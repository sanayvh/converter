let convertButton = document.querySelector(".convertButton")
let result = document.querySelector(".result")
let changeButton = document.querySelector(".changeButton")
let titleConvert = document.querySelector(".title-convert")
let inputText = document.getElementById("converter")
let resetButton = document.getElementById("reset")


convertButton.addEventListener("click", convert)

function convert() {
    if (inputText.value === "") {
        result.innerHTML = "insert correct value"
        result.style.color = "red"
    } else {
        if (inputText.placeholder === "°C") {
            let resultValue = (inputText.value * 1.8) + 32
            result.innerHTML = inputText.value + "°C to " + resultValue + "°F"
            result.style.color = "rgb(255,255,102)"

        }else {
            let resultValue = (inputText.value - 32) * 5 / 9
            result.style.color = "rgb(255,255,102)"
            result.innerHTML = inputText.value + "°F to " + resultValue.toFixed(2) + "°C"

        }
    }
}


resetButton.addEventListener("click", reset)

function reset() {
    inputText.value = ""
    result.innerHTML = ""
}


changeButton.addEventListener("click", swap)

function swap() {
    if (titleConvert.innerHTML === "Converter °C to °F") {
        titleConvert.innerHTML = "Converter °F to °C";
        inputText.placeholder = "°F"
        document.title = "Js | °F to °C"
    } else {

        titleConvert.innerHTML = "Converter °C to °F";
        inputText.placeholder = "°C"
        document.title = " Js | °C to °F"
    }
}

