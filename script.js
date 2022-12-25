var msgInput = document.querySelector('#msg'); //textarea

var btnCodificar = document.querySelector('#codificar'); //botao

var btnDecodificar = document.querySelector('#decodificar'); //botao

var btnCopiar = document.querySelector('#copiar'); //botao

var textoRes = document.querySelector('#res'); //textarea

var display01 = document.querySelector('#conteudoAnterior');

function codificar(){
    display01.style.display = 'none';
    var entrada = msgInput.value;
    var novaSaida = entrada.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat').replace(' ', ' ');
    textoRes.value = novaSaida;
    return novaSaida
    console.log(novaSaida);
}

function decodificar(){
    var novaEntrada = msgInput.value;
    var descodigo = novaEntrada.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u').replace(' ', ' ');
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
