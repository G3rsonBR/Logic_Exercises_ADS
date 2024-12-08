const listNamedButtons = [
  "Exercício 1 - Compra de Maças",
  "Exercício 2 - Determinar o Maior de Três Números",
  "Exercício 3 - Cálculo de Desconto",
  "Exercício 4 - Classificar Temperatura",
  "Exercício 5 - Verificar Votação Obrigatória",
  "Exercício 6 - Classificar Nota em Conceito",
  "Exercício 7 - Validar Idade para Categoria de Ingresso",
  "Exercício 8 - Converter Temperatura de Celsius para Fahrenheit",
  "Exercício 9 - Converter Temperatura de Fahrenheit para Celsius",
  "Exercício 10 - Calcular a Distância Percorrida com Velocidade e Tempo",
];

function createButtons() {
  const getDivForButtons = document.querySelector("#exercises4");

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
  alert("As maças custam R$1,30 cada (até uma dúzia)\nSe comprar pelo menos uma dúzia, cada uma sai R$1,00")
  const applesToBuy = parseInt(prompt("Digite quantas maças irá levar:"));

  return applesToBuy < 12
    ? alert(`Maças a comprar: ${applesToBuy}\nPreço final: ${(applesToBuy * 1.3).toFixed(2)}`)
    : alert(`Maças a comprar: ${applesToBuy}\nPreço final: ${applesToBuy * 1}`)
}

function exercise2() {
  alert(listNamedButtons[1]);
  
  const values = []
  for(let i = 1; i <= 3; i++ ){
    values.push(parseInt(prompt("Digite sua idade:")))
  }

  const maxValue = Math.max(...values)
  return alert(`O maior valor é: ${maxValue}`)
}

function exercise3() {
  alert(listNamedButtons[2]);
  const valueOfPurchase = parseFloat(prompt("Digite o valor da compra:"));
  if(valueOfPurchase <= 0) return alert("Sua compra é impossível com esse valor.")

  return valueOfPurchase < 100 
    ? alert(`Pagará: R$ ${valueOfPurchase}!`) 
    : alert(`Pagará: R$ ${valueOfPurchase * (1 - 0.1)}\nDesconto: 10%`);
}

function exercise4() {
  alert(listNamedButtons[3]);
  const temperature = parseFloat(prompt("Digite a temperatura em °C:"));

  return temperature < 0
    ? alert(`Muito Frio!`) 
    : temperature >= 0 && temperature <= 20
    ? alert(`Frio!`) 
    : temperature > 20 && temperature <= 30
    ? alert(`Agradável!`)
    : alert(`Calor!`)
}

function exercise5() {
  alert(listNamedButtons[4]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  if (userAge < 0) return alert("Idade invalida identificada!");
  if (isNaN(userAge)) return alert("Idade não preenchida identificada!");

  return userAge >= 18 && userAge <= 70
    ? alert("Você tem a obrigação de Votar!")
    : alert("Você não tem obrigação de Votar");
}

function exercise6() {
  alert(listNamedButtons[5]);
  const note = parseInt(prompt("Digite a nota:"));

  return note < 60
    ? alert(`F`) 
    : note >= 60 && note < 70
    ? alert(`D`) 
    : note >= 70 && note < 80
    ? alert(`C`)
    : note >= 80 && note < 90
    ? alert(`B`)
    : alert(`A`)
}

function exercise7() {
  alert(listNamedButtons[6]);
  const userAge = parseInt(prompt("Digite sua idade:"));

  return userAge < 12
    ? alert(`Ingresso Infantil`) 
    : userAge >= 12 && userAge < 18
    ? alert(`Ingresso Adolescente`) 
    : userAge >= 18 && userAge < 65
    ? alert(`Ingresso Adulto`)
    : alert(`Ingresso Sênior`)
}

function exercise8() {
  alert(listNamedButtons[7]);
  const temperature = parseInt(prompt("Digite a temperatura em °C:"));
  const calc = temperature * 9 / 5 + 32
  return alert(`${temperature}°C = ${calc.toFixed(2)}°F`)
}

function exercise9() {
  alert(listNamedButtons[8]);
  const temperature = parseInt(prompt("Digite a temperatura em °F:"));
  const calc = (temperature - 32) * 5/9

  return alert(`${temperature}°F = ${calc.toFixed(2)}°C`)
}

function exercise10() {
  alert(listNamedButtons[9]);
  const velocity = parseInt(prompt("Digite a velocidade média do veículo durante a viagem (em km/h):"));
  if(velocity <= 0) return alert("Não é possível viajar parado ou em velocidade negativa!")

  const duration = parseInt(prompt("Digite quanto tempo durou a viagem (em horas):"));
  const calcDistance = velocity * duration

  return alert(`A distância percorrida foi: ${calcDistance.toFixed(2)} km/h\nTempo de Viagem: ${duration}\nVelocidade Média: ${velocity}`)
}
