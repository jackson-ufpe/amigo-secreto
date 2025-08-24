//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let nomeAmigo = nome.value;

    if (nomeAmigo.trim() !== '') {
        amigos.push(nomeAmigo.trim());

        // console.log(amigos);

        exibirNomes();

        nome.value = '';
        nome.focus();
    } else {
        alert('Por favor, insira um nome.');
        nome.focus;
    }
}

function exibirNomes() {
    let lista = document.getElementById('listaAmigos');
    let listaInformada = '';

    for (let nome of amigos) {
        listaInformada += `<li>${nome}</li>`;
    }
    lista.innerHTML = listaInformada;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia, por favor, insira alguns nomes para o sorteio.');
        return;
    } else {
        const totalAmigos = amigos.length;
        const numeroSorteado = Math.floor(Math.random() * totalAmigos);

        // console.log(numeroSorteado);

        const amigoSorteado = amigos[numeroSorteado];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'A pessoa amiga sorteada foi: ' + amigoSorteado;
    }
}

