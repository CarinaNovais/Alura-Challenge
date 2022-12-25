var msgInput = document.querySelector('#msg'); //textarea

var btnCodificar = document.querySelector('#codificar'); //botao

var btnDecodificar = document.querySelector('#decodificar'); //botao

var btnCopiar = document.querySelector('#copiar'); //botao

var textoRes = document.querySelector('#res'); //textarea


function codificar(){
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

// const _dicionario = () => {
//     var dicionario = new Map ();
//     dicionario.set(1,'a');
//     dicionario.set(2,'b');
//     dicionario.set(3,'c');
//     dicionario.set(4,'d');
//     dicionario.set(5,'e');
//     dicionario.set(6,'f');
//     dicionario.set(7,'g');
//     dicionario.set(8,'h');
//     dicionario.set(9,'i');
//     dicionario.set(10,'j');
//     dicionario.set(11,'k');
//     dicionario.set(12,'l');
//     dicionario.set(13,'m');
//     dicionario.set(14,'n');
//     dicionario.set(15,'o');
//     dicionario.set(16,'p');
//     dicionario.set(17,'q');
//     dicionario.set(18,'r');
//     dicionario.set(19,'s');
//     dicionario.set(20,'t');
//     dicionario.set(21,'u');
//     dicionario.set(22,'v');
//     dicionario.set(23,'w');
//     dicionario.set(24,'x');
//     dicionario.set(25,'y');
//     dicionario.set(26,'z');
//     dicionario.set(27,'A');
//     dicionario.set(28,'B');
//     dicionario.set(29,'C');
//     dicionario.set(30,'D');
//     dicionario.set(31,'E');
//     dicionario.set(32,'F');
//     dicionario.set(33,'G');
//     dicionario.set(34,'H');
//     dicionario.set(35,'I');
//     dicionario.set(36,'J');
//     dicionario.set(37,'K');
//     dicionario.set(38,'L');
//     dicionario.set(39,'M');
//     dicionario.set(40,'N');
//     dicionario.set(41,'O');
//     dicionario.set(42,'P');
//     dicionario.set(43,'Q');
//     dicionario.set(44,'R');
//     dicionario.set(45,'S');
//     dicionario.set(46,'T');
//     dicionario.set(47,'U');
//     dicionario.set(48,'V');
//     dicionario.set(49,'W');
//     dicionario.set(50,'X');
//     dicionario.set(51,'Y');
//     dicionario.set(52,'Z');
//     dicionario.set(53,'0');
//     dicionario.set(54,'1');
//     dicionario.set(55,'2');
//     dicionario.set(56,'3');
//     dicionario.set(57,'4');
//     dicionario.set(58,'5');
//     dicionario.set(59,'6');
//     dicionario.set(60,'7');
//     dicionario.set(61,'8');
//     dicionario.set(62,'9');
//     dicionario.set(63,'ç');
//     dicionario.set(64,'Ç');
//     return dicionario;
// };