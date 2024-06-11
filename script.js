let indiceAtual = 0
let corretas = 0
let erradas = 0

document.addEventListener('DOMContentLoaded', () => {
    mostrarPergunta()
    document.getElementById('botao-proxima').addEventListener('click', proximaPergunta)
    document.getElementById('botao-resultados').addEventListener('click', mostrarResultados)
    document.getElementById('botao-resetar').addEventListener('click', resetar)
    document.getElementById('botao-embaralhar').addEventListener('click', embaralharPerguntas)
    document.getElementById('botao-mais-info').addEventListener('click', mostrarInformacao)
    document.getElementById('botao-voltar').addEventListener('click', voltarFlashcard)
})

function mostrarPergunta() {
    const perguntaAtual = perguntas[indiceAtual]
    document.querySelector('.pergunta').textContent = perguntaAtual.pergunta
    const respostasContainer = document.querySelector('.respostas')
    respostasContainer.innerHTML = ''

    const respostasEmbaralhadas = embaralhar([...perguntaAtual.respostas])
    respostasEmbaralhadas.forEach((resposta, index) => {
        const botaoResposta = document.createElement('button')
        botaoResposta.textContent = resposta.texto
        botaoResposta.addEventListener('click', () => verificarResposta(resposta.correta))
        respostasContainer.appendChild(botaoResposta)
    })
}

function verificarResposta(correta) {
    const mensagem = document.querySelector('.mensagem')
    if (correta) {
        mensagem.textContent = "Parabéns, resposta correta!"
        corretas++
    } else {
        mensagem.textContent = "Resposta errada!"
        erradas++
    }
}

function proximaPergunta() {
    indiceAtual = (indiceAtual + 1) % perguntas.length
    document.querySelector('.mensagem').textContent = ''
    mostrarPergunta()
}

function mostrarResultados() {
    document.getElementById('flashcard').classList.add('hidden')
    document.getElementById('resultados').classList.remove('hidden')
    document.getElementById('contagem-corretas').textContent = corretas
    document.getElementById('contagem-erradas').textContent = erradas
}

function resetar() {
    corretas = 0
    erradas = 0
    indiceAtual = 0
    document.querySelector('.mensagem').textContent = ''
    mostrarPergunta()
    document.getElementById('resultados').classList.add('hidden')
    document.getElementById('flashcard').classList.remove('hidden')
}

function embaralharPerguntas() {
    perguntas = embaralhar(perguntas)
    resetar()
}

function mostrarInformacao() {
    const perguntaAtual = perguntas[indiceAtual]
    document.querySelector('.conteudo-informacoes').textContent = perguntaAtual.informacao
    document.getElementById('flashcard').classList.add('hidden')
    document.getElementById('informacoes').classList.remove('hidden')
}

function voltarFlashcard() {
    document.getElementById('informacoes').classList.add('hidden')
    document.getElementById('flashcard').classList.remove('hidden')
}