const perguntas = [
    {
        pergunta: "Qual é a capital da França?",
        respostas: [
            { texto: "Paris", correta: true },
            { texto: "Londres", correta: false },
            { texto: "Berlim", correta: false },
            { texto: "Madri", correta: false },
        ],
        informacao: "Paris é a capital e maior cidade da França."
    },
    {
        pergunta: "Qual é o maior oceano do mundo?",
        respostas: [
            { texto: "Atlântico", correta: false },
            { texto: "Índico", correta: false },
            { texto: "Ártico", correta: false },
            { texto: "Pacífico", correta: true },
        ],
        informacao: "O Oceano Pacífico cobre mais de 63 milhões de milhas quadradas e é o maior oceano da Terra."
    },
]

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}