var nomeSorteado = '';
var nomes = [
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
    'peru',
    'time de desenvolvimento'
];

function sorteiaNome(){
    var x= Math.floor(Math.random() * nomes.length);
    nomeSorteado = nomes[x];
    return lista[x];
}

window.addEventListener('load', inicio);

function inicio(){
    var elementoImagem = document.getElementById("imagem");
    subs();
}

var lista = [];

for (i= 1; i<= nomes.length; i++) {
    var ext = ".png";
    if (i > 19){
        ext = ".jpg";
    }
    var nome = "imagens/" +i+ ext;
    lista.push(nome);
}
console.log(lista);
function subs (){
	var elementoImagem = document.getElementById("imagem");
    var elementoTexto = document.getElementById("palavra");
	elementoImagem.setAttribute("src" , sorteiaNome());
    elementoTexto.textContent = nomeSorteado;
}


