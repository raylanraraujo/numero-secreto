function exibirMensagem(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagemInicial () {
    exibirMensagem('h1', 'Jogo do número secreto');
    exibirMensagem ('p', 'Escolha um número de 0 a 10');
}

mensagemInicial();


function gerarNumero() {
    return parseInt(Math.random () * 10 +1);
}
let numeroSecreto = gerarNumero ();
let tentativas = 1;


function verificarChute() {
    let palpite = document.querySelector('input').value;
    console.log (`Número secreto: ${numeroSecreto}`);
    console.log (`Palpite: ${palpite}`)
    console.log(`Tentativas ${tentativas}`);
    
    if ( palpite == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemDeAcerto = `Você acertou o número secreto igual (${numeroSecreto}) em ${tentativas} ${palavraTentativas}`;
        exibirMensagem('h1' , 'Acertou!');
        exibirMensagem('p' , mensagemDeAcerto);
        //habilitar o botao de novo jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (palpite > numeroSecreto){
            exibirMensagem('p' , 'O número secreto é menor.')
        } else {
            exibirMensagem('p' , 'O número secreto é maior')
        }
        tentativas++
    }
    limparCampo();
}

function limparCampo() {
    palpite = document.querySelector('input');
    palpite.value = '';
}

function reiniciarJogo( ) {
    numeroSecreto = gerarNumero();
    tentativas = 1;
    mensagemInicial();
    //desabilita o botao
    document.getElementById('reiniciar').setAttribute('disabled', true);
}