console.log("Salve, mundão! tamo junto")

var titulo = document.querySelector("h1")

console.log ("Salve, mundão!!! Tamo junto!") //imprimi no console a frase entre aspas.
var titulo = document.querySelector ("h1") 

console.log (titulo.textContent)

//guardei em uma variavel a tag input
var entrada = document.querySelector("input")

//guardei em uma variavel o valor do input
var ano = entrada.value

//imprimi no console o valor de ano
console.log(ano)

//guardei em uma variavel a tag com id respostaAno
var saida = document.querySelector("#respostaAno")

//imrpimi no console o texto de saida
console.log(saida.textContent)  

//atribuindo ao conteudo de texto de saida o valor de ano
saida.textContent = ano
//função estudar() 
function estudar() {
console.log("pelo amor de Deus, estude JavaScript")
alert("pelo amor de Deus, estude JavaScript")
}

// estudar()

var saida = document.querySelector("#respostaAno")

function cliquei() {
  var ano = entrada.value
  saida.textContent = ano 
}