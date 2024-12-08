const listNamedButtons = [
  'Exercício 1 - Nome Completo',
  'Exercício 2 - Frase Personalizada',
  'Exercício 3 - Antecessor',
  'Exercício 4 - Sucessor',
  'Exercício 5 - Soma de dois números',
  'Exercício 6 - Divisão de dois números',
  'Exercício 7 - Multiplicação de dois números',
  'Exercício 8 - Subtração de dois números',
  'Exercício 9 - Dobro de um número',
  'Exercício 10 - Metade de um número',
  'Exercício 11 - Conversão para Real',
  'Exercício 12 - Conversão para Dólar',
  'Exercício 13 - Trocar valores',
  'Exercício 14 - Área do Quadrado',
  'Exercício 15 - Área do Retângulo',
  'Exercício 16 - Tabuada de um Número',
  'Exercício 17 - Média Simples de 4 Valores',
  'Exercício 18 - Salário com Bônus',
  'Exercício 19 - Área do Triângulo'
]

function createButtons() {
  const getDivForButtons = document.querySelector("#exercises1");

  listNamedButtons.forEach((exercise, index) => {
    const button = document.createElement("button");
    const textButton = document.createTextNode(`${exercise}`);

    button.setAttribute("onclick", `exercise${index + 1}()`);

    button.appendChild(textButton);
    getDivForButtons.appendChild(button);
  })
}

function exercise1() {
  alert(listNamedButtons[0]);
  const userName = prompt("Digite seu nome completo:");
  return alert(`Bem vindo, ${userName}!`);
}

function exercise2() {
  alert(listNamedButtons[1]);
  const userName = prompt("Digite seu nome:");
  const userFavoriteMusic = prompt("Digite seu musica favorita:");
  return alert(
    `"Olá, me chamo ${userName} e gosto da música ${userFavoriteMusic}!"`
  );
}

function exercise3() {
  alert(listNamedButtons[2]);
  const number = parseInt(prompt("Digite um número:"));
  return alert(`O Antecessor de ${number} é ${number - 1}`);
}

function exercise4() {
  alert(listNamedButtons[3]);
  const number = parseInt(prompt("Digite um número:"));
  return alert(`O Sucessor de ${number} é ${number + 1}`);
}

function exercise5() {
  alert(listNamedButtons[4]);
  const number1 = parseInt(prompt("Digite um número:"));
  const number2 = parseInt(prompt("Digite outro número:"));

  return alert(`A soma de ${number1} com ${number2} é ${number1 + number2}`);
}

function exercise6() {
  alert(listNamedButtons[5]);
  const number1 = parseInt(prompt("Digite um número:"));
  const number2 = parseInt(prompt("Digite outro número:"));

  if (number2 == 0) return alert("A divisão por 0 é impossível.");
  if (number1 < number2)
    return alert("O divisor é maior que o dividendo. Tente novamente");

  return alert(
    `A divisão de ${number1} com ${number2} é ${number1 / number2}.`
  );
}

function exercise7() {
  alert(listNamedButtons[6]);
  const number1 = parseInt(prompt("Digite um número:"));
  const number2 = parseInt(prompt("Digite outro número:"));

  return alert(
    `O produto de ${number1} com ${number2} é ${number1 * number2}.`
  );
}

function exercise8() {
  alert(listNamedButtons[7]);
  const number1 = parseInt(prompt("Digite um número:"));
  const number2 = parseInt(prompt("Digite outro número:"));

  if (number1 < number2)
    return alert("O segundo valor é maior que o primeiro. Tente novamente");

  return alert(
    `A subtração de ${number1} com ${number2} é ${number1 - number2}.`
  );
}

function exercise9() {
  alert(listNamedButtons[8]);
  const number = parseInt(prompt("Digite um número:"));

  if (number == 0) return alert("Não é possível sobrar 0");

  return alert(`O dobro de ${number} é ${number * 2}.`);
}

function exercise10() {
  alert(listNamedButtons[9]);
  const number = parseInt(prompt("Digite um número:"));

  if (number == 0) return alert("Não é possível dividir 0");

  return alert(`O dobro de ${number} é ${number / 2}.`);
}

function exercise11() {
  alert(listNamedButtons[10]);

  const dollarPrice = 5.3;
  const number = parseFloat(
    prompt("Digite o valor em dólar (US$) para converter para real (R$):")
  );

  if (number == 0) return alert("US$0 = R$0");
  if (number < 0) return alert("Não é possível converter valores negativos.");

  return alert(
    `O valor US$${number} vale R$${
      number * dollarPrice
    } (valor da cotação: R$${dollarPrice}).`
  );
}

function exercise12() {
  alert(listNamedButtons[11]);

  const dollarPrice = 5.3;
  const number = parseFloat(
    prompt("Digite o valor em real (R$) para converter para dólar (US$):")
  );

  if (number == 0) return alert("R$0 = US$0");
  if (number < 0) return alert("Não é possível converter valores negativos.");

  return alert(
    `O valor R$${number} vale US$${
      number / dollarPrice
    } (valor da cotação: R$${dollarPrice}).`
  );
}

function exercise13() {
  alert(listNamedButtons[12]);

  let number1 = parseInt(prompt("Digite o primeiro valor:"));
  let number2 = parseInt(prompt("Digite o segundo valor:"));
  let numberComplementary = number1;

  if (number1 == number2) return alert("Os valores são iguais!");

  alert(`Valor original: ${number1} e ${number2}.`);

  number1 = number2;
  number2 = numberComplementary;
  return alert(`Valor trocado: ${number1} e ${number2}.`);
}

function exercise14() {
  alert(listNamedButtons[13]);
  const sideOfSquare = parseInt(
    prompt("Digite o valor de um lado do quadrado:")
  );

  if (sideOfSquare == 0) return alert("O quadrado não pode existir!");

  return alert(`Área do quadrado: ${sideOfSquare ** 2}`);
}

function exercise15() {
  alert(listNamedButtons[14]);
  const hightOfRectangle = parseInt(
    prompt("Digite o valor da altura do retângulo:")
  );
  const baseOfRectangle = parseInt(
    prompt("Digite o valor da base do retângulo:")
  );

  if (hightOfRectangle == 0 || baseOfRectangle == 0)
    return alert("O retângulo não pode existir!");
  if (hightOfRectangle == baseOfRectangle)
    return alert("O resultado é um quadrado!");

  return alert(`Área do retângulo: ${hightOfRectangle * baseOfRectangle}`);
}

function exercise16() {
  alert(listNamedButtons[15]);
  const multiplyTableKey = parseInt(
    prompt("Digite o número para calcular a tabuada:")
  );

  let multiplier = 0;
  let multiplyTableResults = "";

  while (multiplier <= 10) {
    multiplyTableResults += `${multiplyTableKey} x ${multiplier} = ${
      multiplyTableKey * multiplier
    }\n`;
    multiplier++;
  }

  return alert(`Tabuada do ${multiplyTableKey}:\n${multiplyTableResults}`);
}

function exercise17() {
  alert(listNamedButtons[16]);
  const values = [];

  for (let i = 1; i <= 4; i++) {
    values.push(parseInt(prompt(`Digite o ${i}° valor:`)));
  }

  let simpleAverage =
    values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / values.length;

  return alert(`Valores digitados: ${values}\nMédia: ${simpleAverage}`);
}

function exercise18() {
  alert(listNamedButtons[17]);

  const salary = parseInt(prompt(`Digite seu salário:`));
  const bonus = parseInt(prompt(`Digite o valor do bônus:`));

  if (salary <= 0) return alert("Seu salário é R$0");
  if (bonus <= 0)
    return alert("Seu Bônus é R$0, então seu salário é: R$" + salary);

  const salaryWithBonus = salary + bonus;

  return alert(
    `Salário: ${salary}\nBônus: ${bonus}\nSalário com Bônus: ${salaryWithBonus}`
  );
}

function exercise19() {
  alert(listNamedButtons[18]);

  const sides = [];
  for (let i = 1; i <= 3; i++) {
    sides.push(parseInt(prompt(`Digite o ${i}° lado do triângulo:`)));
  }

  if (
    sides[0] > sides[1] + sides[2] ||
    sides[1] > sides[0] + sides[2] ||
    sides[2] > sides[0] + sides[1]
  )
    return alert("O triângulo não pode existir");

  const semiPerimeter =
    sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    2;
  const areaOfTriangle = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - sides[0]) *
      (semiPerimeter - sides[1]) *
      (semiPerimeter - sides[2])
  ).toFixed(2);

  return alert(`A Área do Triângulo é: ${areaOfTriangle}`);
}
