let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 0 a 10'; // serve para manipular o conteúdo do elemento selecionado


//criado funcao para evitar que seja escrito várias linhas com comandos parecidos
//incluido os parâmetros para que quando a função seja chamada com os parâmetros sejam especificados, eles retornem o resultado desejado
//função COM PARAMETROS mas SEM RETORNO 
function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak ( texto , 'Brazilian Portuguese Female' , {rate: 1.2});
}

//função chamada com parâmetros especificados na tela
function mensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número de 0 a 10');
}

mensagemInicial();

//a função é responsável por executar alguma ação dentro do nosso programa. Por padrão e por convenção, é ideal determinar que as funções tenham apenas uma responsabilidade.
//função SEM PARÂMETROS NEM RETORNO
//incluido a variavel numeroSecreto para exibir o número aleatório que foi gerado
function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
     

        exibirTextoNaTela ('h1' , 'Acertou!');
        exibirTextoNaTela ('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p' , 'O número secreto é menor.');
        } else {
            exibirTextoNaTela ('p' , 'O número secreto é maior.');
        }
        tentativas++
        limparCampo();
    }
}

// criado a função que gera um número aleatório e retorna esse valor (pois sem ele o número é gerado mas nao fica guardado em lugar algum)
//função SEM PARÂMETRO, mas COM RETORNO
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}