//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomesSorteados =[];

// function exibirTextoNaTela(ul, texto) {
//     let listaAmigos = document.querySelector(ul);
//     listaAmigos.innerHTML = texto;
// }

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if(amigo === ''){
        alert('Por favor, isira um nome.');
    } else {
        listaDeNomesSorteados.push(amigo);
        limparCampo();
        listarNomesDigitados('listaAmigos', amigo);
    }
}

function limparCampo(){
    amigo = document.getElementById('amigo');
    amigo.value='';
}

function listarNomesDigitados(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML += ` ${texto}</li>`;
}

function mostrarAmigoSorteado(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML += `<li>O amigo sorteado é ${texto}</li>`;
}


function sortearAmigo(){
    if(listaDeNomesSorteados.length ===0){
        alert('Lista não tem nenhum nome, digite ao menos um nome')
    };

    let nomeEscolhido = parseInt(Math.random() * listaDeNomesSorteados.length + 0 );
    console.log(nomeEscolhido);
    let amigoEscolhido = listaDeNomesSorteados[nomeEscolhido];    
    document.getElementById('listaAmigos').innerHTML = '';
    mostrarAmigoSorteado('listaAmigos', amigoEscolhido);
}