
//console.log(Math.floor((Math.random() * 20) + 1));

function sorteiaNome(){
    var x= Math.floor(Math.random() * 20);
    return lista[x];
}
 // console.log(x+ ".png");
// function (Math.floor((Math.random() * 20) + 1));

window.addEventListener('load', inicio);

function inicio(){
    var elementoImagem = document.getElementById("imagem");


    console.log(elementoImagem);
    console.log('nome sorteado='+sorteiaNome());

}
var lista = [];
for (i= 1; i<= 20; i++) {
    var nome = "imagens/" + i+ ".png";
	// console.log(nome);
    lista.push(nome);
}
console.log(lista);