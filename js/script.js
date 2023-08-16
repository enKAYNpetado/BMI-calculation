import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//const modalWrapper = document.querySelector(".modal-wrapper")
//const modalMessage = document.querySelector(".modal .title span")
//const modalBtnClose = document.querySelector(".modal-wrapper button")

// maneiras de criar e atribuir função a um evento
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height) 

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }
  //if(weight(value) || height(value) != "") {
    //AlertError.close()
  //}

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  //modalWrapper.classList.add("open")
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
 

inputHeight.oninput = () => AlertError.close()