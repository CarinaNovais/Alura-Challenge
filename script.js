var msgInput = document.querySelector('#msg'); //textarea

var btnCodificar = document.querySelector('#codificar'); //botao

var btnDecodificar = document.querySelector('#decodificar'); //botao

var btnCopiar = document.querySelector('#copiar'); //botao

var textoRes = document.querySelector('#res'); //textarea

var display01 = document.querySelector('#conteudoAnterior');

textoRes.value = ' ';

function codificar(){
    display01.style.display = 'none';
    var entrada = msgInput.value;
    var novaSaida = entrada.replace(/e/g,'eX').replace(/i/g,'is').replace(/a/g,'ai').replace(/o/g,'oz').replace(/u/g,'um').replace(' ', ' ');
    textoRes.value = novaSaida;
    return novaSaida
    console.log(novaSaida);
}

function decodificar(){
    display01.style.display = 'none';
    var novaEntrada = msgInput.value;
    var descodigo = novaEntrada.replace(/eX/g,'e').replace(/is/g,'i').replace(/ai/g,'a').replace(/oz/g,'o').replace(/um/g,'u').replace(' ', ' ');
    textoRes.value = descodigo;
    return descodigo
    console.log(descodigo);

}

function copiar(){
    textoCopiado = textoRes;
    textoCopiado.select();
    document.execCommand("copy");
}


btnCodificar.onclick = codificar;
btnDecodificar.onclick = decodificar;
btnCopiar.onclick = copiar;
