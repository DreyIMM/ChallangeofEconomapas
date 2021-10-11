var valor = prompt("Digite o valor R$");
var taxa = prompt("Digite a taxa % ");
var periodo = prompt("Digite o periodo em meses")

jurosSimples(valor,taxa,periodo)

function jurosSimples(v,t,p){
  var taxa = t / 100
  const result = v * taxa * p
  console.log("Juros a ser pago R$", result)
}