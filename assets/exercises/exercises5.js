function updateTitle() {
  const title = document.querySelector(".title_to_update")
  return title.innerHTML = "Título atualizado!"
}

function createItem() {
  const placeItem = document.querySelector("#createItem")
  const createItem = document.createElement("li")
  const textToItem = document.createTextNode("Novo Item")

  createItem.appendChild(textToItem)
  return placeItem.appendChild(createItem)
}

function hideOrShowParagraph() {
  const paragraph = document.querySelector("#showParagraph")
  return paragraph.classList.toggle("hide")
}

function showAlert() {
  return alert("Você clicou no botão!")
}

function powerANumber() {
  const getInputData = document.querySelector("#inputNumber").value
  return alert(`Seu número ao Quadrado é: ${getInputData ** 2}`)
}

function converterDolarParaReal() {
  const getMoneyValue = parseFloat(prompt("Digite o valor em Dólar para converter em Real: "))
  const paragraphToShowResult = document.querySelector('.dollarValue')

  const textToParagraph = document.createTextNode(`US$${getMoneyValue.toFixed(2)} = R$${(getMoneyValue * 5.65).toFixed(2)}. Cotação: R$5,65`)
  return paragraphToShowResult.appendChild(textToParagraph)
}

function digaOla() {
  const userName = prompt("Digite seu Nome: ")
  const getParagraphToShowText = document.querySelector(".digaOla")
  const textParagraph = document.createTextNode(`Olá, ${userName}`)

  return getParagraphToShowText.appendChild(textParagraph)
}

function sum(a, b) {
  return a + b
}

function getValuesFromUser() {
  const getFirstValue = parseInt(prompt("Digite o primeiro valor: "))
  const getSecondValue = parseInt(prompt("Digite o segundo valor: "))

  return alert(`A soma dos valores é: ${sum(getFirstValue, getSecondValue)}`)
}

function formatarTexto() {
  const textToFormat = prompt("Digite um texto: ")

  return alert(`Entrada: ${textToFormat}\nSaída: ${textToFormat.toUpperCase()} (${textToFormat.length} caracteres)`)
}

function textDynamic() {
  const getInputValue = document.querySelector("#inputText").value
  const getParagraph = document.querySelector(".getTextFromInput")

  const paragraphText = document.createTextNode(getInputValue)

  return getParagraph.appendChild(paragraphText)
}

function styleText() {
  document.querySelector('.textToStyle').style.fontWeight = "700";
  document.querySelector('.textToStyle').style.fontStyle = "italic";
}

function addTask() {
  const getTaskValue = document.querySelector('#inputTask').value
  const getTaskList = document.querySelector('.tasksList')
  
  const listItem = document.createElement("li")
  const textItem = document.createTextNode(getTaskValue)

  listItem.appendChild(textItem)
  getTaskList.appendChild(listItem)
}

const phase = "Programar é divertido!"
console.log(phase)

var number = 1
console.log(number)
number++
console.log(number)

function createActiveClass() {
  const getParagraphActive = document.querySelector('#ativo') 
  getParagraphActive.classList.toggle('ativo')
}