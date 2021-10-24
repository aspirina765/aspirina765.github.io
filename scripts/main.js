/*let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/raposa2.jpeg') {
        minhaImagem.setAttribute ('src','imagens/raposa2.jpeg');
    } else {
        minhaImagem.setAttribute ('src','imagens/raposa1.webp');
    }
}*/
/*const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!';*/

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/red-fox-looks-camera-portrait.webp') {
        minhaImagem.setAttribute ('src','imagens/red-fox-looks-camera-portrait.webp');
    } else {
        minhaImagem.setAttribute ('src','imagens/raposa3.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

/*function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome!');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Mozila é legal, mas ' + meuNome + ' é melhor!';
}*/

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digita teu nome aeee:');
    if(!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Mozila é legal, mas ' + meuNome + ' é melhor!';
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
}else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.txtContent = 'Mozila é legal, mas ' + meuNome + ' é melhor!';
}

meuBotao.onclick = function() { defineNomeUsuario();
}








