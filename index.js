/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let mf = document.getElementById("meter-feet")
let lg = document.getElementById("liter-gallon")
let kp = document.getElementById("kilo-pound")
let input = document.getElementById("box")
let btn = document.getElementById("btn")


btn.addEventListener("click", function conversion() {
    const feet = Math. round((input.value * 3.281) * 100) / 100
    const meter = Math. round((input.value / 3.281) * 100) / 100
    const liter = Math. round((input.value / 0.264) * 100) / 100
    const gallon = Math. round((input.value / 0.264) * 100) / 100
    const kilogram = Math. round((input.value * 2.204) * 100) / 100
    const pound = Math. round((input.value / 2.204) * 100) / 100
    mf.innerHTML = `${input.value} meters = ${feet} feet | ${input.value} feet = ${meter} meters`
    lg.innerHTML = `${input.value} liters = ${gallon} gallons | ${input.value} gallons = ${liter} liters`
    kp.innerHTML = `${input.value} kilograms = ${pound} pounds | ${input.value} pounds = ${kilogram} kilograms`
})

