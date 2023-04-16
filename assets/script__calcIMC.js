const btnCalculate = document.getElementById('button');
btnCalculate.addEventListener('click', calculate);

function calculate() {
  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;
  btnCalculate.addEventListener('click', openResponse);

  /*  validation   */
  if (mass !== '' && height !== '') {
    const response = document.getElementById("response");
    const imc = (mass / (height * height)).toFixed(1);
    const classification = [
      "Abaixo do peso",
      "Peso ideal",
      "Sobrepeso",
      "Obesidade grau I",
      "Obesidade grau II",
      "Obesidade grau III",
    ];

    // Return 
    const answer = function () {
      if (imc < 18.5) {
        response.textContent =
          `Seu IMC é de ${imc}. Você está  ${classification[0]}`;
      } else if (imc < 25) {
        response.textContent =
          `Seu IMC é de ${imc}. Você está no ${classification[1]}`;
      } else if (imc < 30) {
        response.textContent =
          `Seu IMC é de ${imc}. Você está com ${classification[2]}`;
      } else if (imc < 35) {
        response.textContent =
          `Seu IMC é de ${imc}. Você está com ${classification[3]}`;
      } else if (imc < 40) {
        response.textContent =
          `Seu IMC é de ${imc}. Você está com ${classification[4]}`;
      } else {
        response.textContent =
          `Seu IMC é de ${imc}. Você está com ${classification[5]}`;
      }
    }();

  } else {
    response.style.color = "red";
    response.innerHTML = " Preencha todos os campos ! ";
  }
}

function openResponse() {
  response.style.background = "#E8F0FE";
  response.style.minHeight = "80px";
}