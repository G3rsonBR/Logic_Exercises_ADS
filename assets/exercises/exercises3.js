const listNamedButtons = [
  "Exercício 1 - Validação de Entrada para Show",
  "Exercício 2 - Maioridade",
  "Exercício 3 - Comparação de Dois Números",
  "Exercício 4 - Comparação de Idades",
  "Exercício 5 - Verificação de Habilitação",
  "Exercício 6 - Cálculo de IMC",
  "Exercício 7 - Número Positivo, Negativo ou Zero",
  "Exercício 8 - Nota Final",
  "Exercício 9 - Verificação de Tempo",
  "Exercício 10 - Verificação de Número Par ou Ímpar",
  "Exercício 11 - Verificação de Desconto em Compra",
  "Exercício 12 - Verificação de Emprego de Palavras",
  "Exercício 13 - Verificação de Comprimento de Nome",
  "Exercícios 14 - Condições Climáticas",
  "Exercícios 15 - Classificação de Nota Escolar",
  "Exercícios 16 - Verificação de Maioridade Internacional",
  "Exercícios 17 - Conversão de Temperatura (Celsius/Fahrenheit)",
  "Exercícios 18 - Verificação de Letras Minúsculas ou Maiúsculas",
  "Exercícios 19 - Cálculo de Média de Notas",
  "Exercícios 20 - Classificação de Produto por Preço",
];

function createButtons() {
  const getDivForButtons = document.querySelector("#exercises3");

  listNamedButtons.forEach((exercise, index) => {
    const button = document.createElement("button");
    const textButton = document.createTextNode(`${exercise}`);

    button.setAttribute("onclick", `exercise${index + 1}()`);

    button.appendChild(textButton);
    getDivForButtons.appendChild(button);
  });
}

function exercise1() {
  alert(listNamedButtons[0]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  return userAge < 16
    ? alert("Você não tem idade para esse show!")
    : alert("Você pode entrar!");
}

function exercise2() {
  alert(listNamedButtons[1]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  return userAge < 18 ? alert("Menor de Idade!") : alert("Maior de Idade!");
}

function exercise3() {
  alert(listNamedButtons[2]);
  const number1 = parseInt(prompt("Digite o primeiro número:"));
  const number2 = parseInt(prompt("Digite o segundo número:"));

  return number1 == number2 ? alert("São iguais!") : alert("Não são iguais!");
}

function exercise4() {
  alert(listNamedButtons[3]);
  const age1 = parseInt(prompt("Digite a primeira idade:"));
  const age2 = parseInt(prompt("Digite a segunda idade:"));

  if (age1 < 0 || age2 < 0) return alert("Idade negativa identificada!");
  if (isNaN(age1) || isNaN(age2))
    return alert("Idade não preenchida identificada!");

  return age1 == age2
    ? alert("Idades Iguais!")
    : age1 > age2
    ? alert(`A pessoa com ${age1} anos é a mais velha`)
    : alert(`A pessoa com ${age2} anos é a mais velha`);
}

function exercise5() {
  alert(listNamedButtons[4]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  if (userAge < 0) return alert("Idade negativa identificada!");
  if (isNaN(userAge)) return alert("Idade não preenchida identificada!");

  return userAge < 18
    ? alert("Você não pode tirar habilitação!")
    : alert("Você pode tirar habilitação!");
}

function exercise6() {
  alert(listNamedButtons[5]);
  let userHeight = prompt("Digite sua altura (em metros):");
  let userWeight = prompt("Digite seu peso (em kg):");

  if (userWeight.includes(",")) userWeight = userWeight.replace(",", ".");
  if (userHeight.includes(",")) userHeight = userHeight.replace(",", ".");
  if (userWeight == "" || userHeight == "")
    return alert("Por favor, preencha todos os requisitos para calcularmos!");

  userHeight = parseFloat(userHeight);
  userWeight = parseFloat(userWeight);

  const imcCalc = userWeight / userHeight ** 2;

  alert(`IMC: ${imcCalc.toFixed(2)}`);
  return imcCalc < 18.5
    ? alert("Abaixo do peso!")
    : imcCalc >= 18.5 && imcCalc <= 24.9
    ? alert("Peso Normal!")
    : imcCalc >= 25 && imcCalc <= 29.9
    ? alert("Sobrepeso!")
    : alert("Obesidade!");
}

function exercise7() {
  alert(listNamedButtons[6]);
  const number = parseInt(prompt("Digite um número:"));

  return number < 0
    ? alert("Número negativo")
    : number == 0
    ? alert("Número Zero")
    : alert("Número Positivo");
}

function exercise8() {
  alert(listNamedButtons[7]);
  const number = parseInt(prompt("Digite sua nota final:"));

  return number >= 60
    ? alert("Você foi aprovado!")
    : alert("Você foi reprovado!");
}

function exercise9() {
  alert(listNamedButtons[8]);
  const hour = parseInt(prompt("Digite que horas são (formato 24h):"));
  if (hour < 0 || hour > 24) return alert("Hora inválida!");

  return hour >= 5 && hour <= 11
    ? alert("Manhã!")
    : hour >= 12 && hour <= 17
    ? alert("Tarde!")
    : hour >= 18 && hour <= 23
    ? alert("Noite!")
    : alert("Madrugada!");
}

function exercise10() {
  alert(listNamedButtons[9]);
  const number = parseInt(prompt("Digite seu número:"));

  return number % 2 == 0 ? alert("Par!") : alert("Impar!");
}

function exercise11() {
  alert(listNamedButtons[10]);
  const value = parseInt(prompt("Digite o preço da compra:"));
  const discount = prompt("Digite o código de desconto (tudo maiúsculo):");

  return discount === "DESC10"
    ? alert(
        `Preço da compra: ${value * (1 - 0.1)}\nDesconto: 10% (código DESC10)`
      )
    : alert(
        `Preço da compra: ${value}\nDesconto: Inválido (código ${discount})`
      );
}

function exercise12() {
  alert(listNamedButtons[11]);
  const word = prompt("Digite a linguagem de programação:");

  return word.toLowerCase() === "javascript"
    ? alert(`Você escolheu a linguagem correta`)
    : alert(`Você escolheu outra linguagem`);
}

function exercise13() {
  alert(listNamedButtons[12]);
  const userName = prompt("Digite seu Nome:");

  return userName.length > 5 ? alert(`Nome Longo!`) : alert(`Nome Curto!`);
}

function exercise14() {
  alert(listNamedButtons[13]);
  let temperature = parseFloat(prompt("Digite a temperatura:"));

  if (temperature.includes(",")) temperature = temperature.replace(",", ".");

  return temperature < 15
    ? alert(`Está Frio!`)
    : temperature >= 15 && temperature <= 25
    ? alert(`Está Agradável!`)
    : alert(`Está Quente!`);
}

function exercise15() {
  alert(listNamedButtons[14]);
  const note = parseInt(prompt("Digite a nota de 0 a 10:"));
  if (note < 0 || note > 10) return alert("Valores fora dos parâmetros!");

  return note < 5
    ? alert(`Insuficiente!`)
    : note >= 5 && note <= 6
    ? alert(`Regular!`)
    : note >= 7 && note <= 8
    ? alert(`Bom!`)
    : alert("Excelente!");
}

function exercise16() {
  alert(listNamedButtons[15]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  return userAge < 18 
    ? alert("Menor de idade no Brasil e nos EUA!") 
    : userAge >= 18 && userAge < 21
    ? alert("Maior de idade no Brasil, mas não nos EUA!")
    : alert("Maior de idade no Brasil e nos EUA!")
}

function exercise17() {
  alert(listNamedButtons[16]);
  const chose = prompt("Escolha uma conversão:\nC - Fahrenheit para Celsius\nF - Celsius para Fahrenheit");
  console.log(chose)
  if(chose.toLowerCase() !== 'c' && chose.toLowerCase() !== 'f') return alert("Opção Inválida!")
  
  const temperature = parseFloat(prompt("Digite a temperatura:"))
  let calc = 0

  if(chose.toLowerCase() == 'c') calc = (temperature - 32) / 1.8
  if(chose.toLowerCase() == 'f') calc = temperature * 1.8 + 32
  calc = calc.toFixed(2)

  return chose.toLowerCase() == 'c'
    ? alert(`A temperatura ${temperature} convertida de Fahrenheit para Celsius é: ${calc}°C`) 
    : alert(`A temperatura ${temperature} convertida de Celsius para Fahrenheit é: ${calc}°F`) 
}

function exercise18() {
  alert(listNamedButtons[17]);
  const letter = prompt("Digite uma Letra:")

  return letter == letter.toLowerCase()
    ? alert(`A letra é minuscula`) 
    : alert(`A letra é maiúscula`)
}

function exercise19() {
  alert(listNamedButtons[18]);
  const values = []

  for(let i = 1; i <= 3; i++){
    values.push(parseInt(prompt(`Digite a ${i} nota:`)))
  }
  const media = (values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / values.length

  return media >= 6
    ? alert(`Aluno Aprovado!\nMédia: ${media}`) 
    : alert(`Aluno Reprovado!\nMédia: ${media}`)
}

function exercise20() {
  alert(listNamedButtons[19]);
  const valueOfProduct = parseInt(prompt(`Digite o preço do produto:`))

  return valueOfProduct < 20
    ? alert(`Produto Barato!`) 
    : valueOfProduct >= 20 && valueOfProduct <= 100
    ? alert(`Produto Médio!`)
    : alert(`Produto Caro!`)
}