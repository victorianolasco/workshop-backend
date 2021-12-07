console.log("Hello, word!");

var inputSalario = document.querySelector("#valor-hora");

var inputProjeto = document.querySelector("#horas-projeto");

var inputResultado = document.querySelector("#resposta");

function calcular() {
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
