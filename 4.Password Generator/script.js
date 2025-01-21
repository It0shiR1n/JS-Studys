let passGenerated = document.querySelector(".passwd")
let sizeOfPass = document.querySelector(".passwd-length")


let btnGenerate = document.querySelector(".btn-generate")

let lowerCase = document.querySelector(".lowerLetters")
let upperCase = document.querySelector(".upperLetters") 
let numbers = document.querySelector(".numbers")
let specialChars = document.querySelector(".specialChars")


function generatePassword(len, lCase, uCase, num, special){
    let seed = ""
    let password = ""

    if (lCase.checked){
        seed += "abcdefghjkmnpqrstuvwxyz"


    }

    if (uCase.checked){
        seed += "ABCDEFGHJKMNPQRSTUVWXYZ"

    }

    if (num.checked){
        seed += "1234567890"

    }

    if (special.checked){
        seed += "!@#$%¨&*()[]~^"

    }

    if(seed === ""){
        seed = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789!@#$%¨&*()[]~^"

    }


    for (let i = 0; i <= len; i++){
        let n = Math.floor(Math.random() * seed.length)
        password += seed[n]

    }

    passGenerated.value = password

}


function clipboardCopy(){
    navigator.clipboard.writeText(passGenerated.value)

}


btnGenerate.addEventListener("click", function() {
    generatePassword(sizeOfPass.value, lowerCase, upperCase, numbers, specialChars)

})