//400g de carne por pessoa + de 6H 550g
//200g de linguiça por pessoa + de 6H 300g
//150g de frango por pessoa + de 6H 250g
//1200ml cerveja por pessoa + de 6H 2000ml
//1000ml refrigerante/agua + de 6H 1500ml
//criança vale 0,5 pessoa

let inputAdultos = document.getElementById("adultos");
let inputAdultosCerv = document.getElementById("adultosCerv");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let adultosCerv = inputAdultosCerv.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qnCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qnLing = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
    let qnFrango = frangoPP(duracao) * adultos + (frangoPP(duracao) / 2 * criancas);
    let qnCerveja = cervejaPP(duracao) * adultosCerv;
    let qnRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${qnCarne/1000} Kg Carne.`;
    resultado.innerHTML += `<p>${qnLing/1000} Kg Linguiça.`;
    resultado.innerHTML += `<p>${qnFrango/1000} Kg Frango.`;
    resultado.innerHTML += `<p>${Math.ceil(qnCarne/355)} Latas de Cerveja.`;
    resultado.innerHTML += `<p>${Math.ceil(qnCarne/2000)} Pet's de 2L de bebidas (Água e Refrigerante).`;
}

function carnePP(duracao) {
    if(duracao >= 6) {
        return 550;
    }
    else {
        return 400;
    }
}

function linguicaPP(duracao) {
    if(duracao >= 6) {
        return 300;
    }
    else {
        return 200;
    }
}

function frangoPP(duracao) {
    if(duracao >= 6) {
        return 250;
    }
    else {
        return 150;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function refriPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}