console.log("Hello, word!");

function calcular() {
  var inputSalario = document.querySelector("#valor-hora").valueAsNumber;

  var inputProjeto = document.querySelector("#horas-projeto").valueAsNumber;

  var inputResultado = document.querySelector("#resposta");

  var salarioPorHora = inputSalario;
  var tempoPorProjeto = inputProjeto;

  var horasPorDia = tempoPorProjeto * 8;
  var salarioPorProjeto = salarioPorHora / horasPorDia;

  var calcularProjetoDuasCasas = salarioPorProjeto.toFixed(2);

  console.log(calcularProjetoDuasCasas);

  inputResultado.textContent = "R$" + calcularProjetoDuasCasas;

  if (calcularProjetoDuasCasas < 15) {
    alert("Por favor, peça um aumento");
  } else {
    alert("BOOOA! Vamo ganhar mais ainda");
  }
}
