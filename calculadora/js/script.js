console.log("Hello, word!");

//pegar input #ganho-mes
var inputSalario = document.querySelector("#ganho-mes");

//pegar input #horas-dia
var inputHoras = document.querySelector("#horas-dia");

//pegar paragrafo #resposta
var inputResultado = document.querySelector("#resposta");

function calcularValorHora() {
  var salarioPorMes = inputSalario.valueAsNumber;
  var horasPorDia = inputHoras.valueAsNumber;

  var horasPorMes = horasPorDia * 22;
  var salarioPorHora = salarioPorMes / horasPorMes;

  var salarioDuasCasas = salarioPorHora.toFixed(2);

  console.log(salarioDuasCasas);

  inputResultado.textContent = "R$" + salarioDuasCasas;

  if (salarioDuasCasas < 28.41) {
    alert("Por favor, peça um aumento");
  } else {
    alert("BOOOA! Vamo ganhar mais ainda");
  }
}
