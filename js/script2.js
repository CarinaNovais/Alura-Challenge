// script com um jeito mais facil de fazer

var criptografarBotao = document.querySelector('#criptografar');
var descriptografarBotao = document.querySelector('#descriptografar');
var texto = document.querySelector('#msg');
var textoRes = document.querySelector('#res');

var copiarBotao = document.querySelector('#copiar');


function criptografar(){
    textoRes.value = btoa(texto.value);
}

function descriptografar(){
    textoRes.value = atob(texto.value);
    return textoRes;
}

function copiar(){
    textoCopiado = textoRes;
    textoCopiado.select();
    document.execCommand("copy");
}

criptografarBotao.onclick = criptografar;
descriptografarBotao.onclick = descriptografar;
copiarBotao.onclick = copiar;