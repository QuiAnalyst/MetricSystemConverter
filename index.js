
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthTxt = document.getElementById("lengthTxt")
let volumeTxt = document.getElementById("volumeTxt")
let massTxt =  document.getElementById ("massTxt")
let meter = 3.281 
let liter = 0.264 
let kilogram = 2.204 

convertBtn.addEventListener("click", function(){
    let meterToFeet = inputEl.value * meter
    let literToGallons = inputEl.value * liter
     let kilosToPounds = inputEl.value * kilogram
    
    lengthTxt.innerHTML = 
   `${inputEl.value} meters ${meterToFeet.toFixed(3)} = feet | 
    ${inputEl.value} feet = ${meterToFeet.toFixed(3)} meters `
    s
    volumeTxt.innerHTML = 
    `${inputEl.value} liters = ${literToGallons.toFixed(3)} gallons |
     ${inputEl.value} gallons = ${literToGallons.toFixed(3)} liters 
    ` 
    massTxt.innerHTML   = `${inputEl.value} kilos = ${literToGallons.toFixed(3)} pounds |
     ${inputEl.value} pounds = ${literToGallons.toFixed(3)} kilos 
    ` 
})



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/