const listNamedButtons = [
  'Exercício 1 - Formatação de Números para Moeda Real',
  'Exercício 2 - Converter Letras para Maiúsculas',
  'Exercício 3 - Converter Letras para Minúsculas',
  'Exercício 4 - Contar o Número de Letras no Primeiro Nome',
  'Exercício 5 - Formatar a Divisão de 10 / 3 com Duas Casas Decimais',
  'Exercício 6 - Exibir o Primeiro Nome em Maiúsculas e Contar as Letras',
  'Exercício 7 - Calcular a Média de Valores com Moeda Brasileira'
]

function createButtons(){
  const getDivForButtons = document.querySelector("#exercises2")

  listNamedButtons.forEach((exercise, index) => {
    const button = document.createElement("button");
    const textButton = document.createTextNode(`${exercise}`);

    button.setAttribute("onclick", `exercise${index + 1}()`);

    button.appendChild(textButton);
    getDivForButtons.appendChild(button);
  })
}

function exercise1(){
  alert(listNamedButtons[0])
  let value = prompt("Digite um valor para formatarmos para R$:")
  if (value.includes(',')) value = value.replace(',', '.')
  
  value = parseFloat(value)
  const numberFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    value,)


  return alert(`Valor formatado: ${numberFormat}`)
}

function exercise2(){
  alert(listNamedButtons[1])
  const userString = prompt("Digite sua frase:")
  const upperString = userString.toUpperCase()

  return alert(`Sua frase convertida toda para maiúsculo: ${upperString}`)
}

function exercise3(){
  alert(listNamedButtons[2])
  const userString = prompt("Digite sua frase:")
  const lowerString = userString.toLowerCase()

  return alert(`Sua frase convertida toda para maiúsculo: ${lowerString}`)
}

function exercise4(){
  alert(listNamedButtons[3])
  let userName = prompt("Digite seu nome completo:")

  if(userName == "") return alert("Você digitou um valor em vazio!")
  userName = userName.replace(/\s/g, '');

  return alert(`Número de letras em seu nome: ${userName.length}`)
}

function exercise5(){
  alert(listNamedButtons[4])
  alert("Para formatar essa divisão, iremos usar um método chamado 'toFixed'")
  const division = 10 / 3

  return alert(`Sem formatação: ${division}\nFormatado: ${division.toFixed(2)}`)
}

function exercise6(){
  alert(listNamedButtons[5])
  let userFirstName = prompt("Digite seu primeiro nome:")

  if(userFirstName == "") return alert("Você digitou um valor em vazio!")
  userFirstName = userFirstName.replace(/\s/g, '');

  return alert(`Seu nome em maiúsculo: ${userFirstName.toUpperCase()}\nNúmero de letras em seu nome: ${userFirstName.length}`)
}

function exercise7(){
  alert(listNamedButtons[6])
  
  let values = []

  for(let i = 1; i <= 3; i++){
    let value = prompt(`Digite o ${i} valor:`)
    if(value.includes(',')) value = value.replace(',', '.')

    value = parseFloat(value)
    values.push(value)
  }

  const valueAverage = (values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / values.length
  const numberFormat = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(valueAverage,)

  return alert(`Valor formatado: ${numberFormat}`)
}
