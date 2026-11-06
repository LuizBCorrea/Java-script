const nomecandidato = "Luiz Augusto Correa";
console.log("Nome: ", nomecandidato)
let idadecandidato = 18;
console.log("Idade: ", idadecandidato)
const Curso= "Desenvlovimento de sistemas";
console.log("Curso: ", Curso)
let desconto = true;
let mensalidade = 200;
let vagas = 30;


if (idadecandidato >= 18){
    console.log("Inscrição permitida.")
}else if(idadecandidato >= 16){
    console.log("Necessita autorização do responsável.")
}else{
    console.log("Inscrição não permitida.")
}

if(vagas > 0){
    console.log("Existem vagas disponíveis.")
}else{
    console.log("Não existem vagas disponíveis.")
}



if(desconto == true){
    console.log("Mensalidade original: R$", mensalidade)
    console.log("Desconto aplicado: 15%")
    console.log("Mensalidade final: R$", mensalidade-mensalidade*0.15)    
}else{
    console.log("Mensalidade final: R$", mensalidade)
}

if(mensalidade>600){
    console.log("Classificação: Curso premium")
} else if(mensalidade>=300) {
    console.log("Classificação: Curso intermediario")
} else {
    console.log("Classificação: Curso econômico")
}