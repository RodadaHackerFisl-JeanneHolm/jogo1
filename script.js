
nomes = [
    'abacaxi',
    'maçã',
    'vaso',
    'banana',
    'bicicleta',
    'cachorro',
    'cama',
    'cereja',
    'coelho',
    'urso',
    'carro',
    'besouro',
    'kiwi',
    'melância',
    'morango',
    'navio pirata',
    'pêra',
    'uva',
    'picolé duplo',
    'peru'
];

function sorteiaNome(){
    var x= Math.floor(Math.random() * 20);
    return lista[x];
}

window.addEventListener('load', inicio);

function inicio(){
    var elementoImagem = document.getElementById("imagem");


    console.log(elementoImagem);
    console.log('nome sorteado='+sorteiaNome());

}
var lista = [];
for (i= 1; i<= 20; i++) {
    var nome = "imagens/" +i+ ".png";
    lista.push(nome);
}
console.log(lista);