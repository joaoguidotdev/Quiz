const perguntas = [
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["var", "let", "const"],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
    respostas: [
      "Selecionar um elemento pelo seu ID",
      "Selecionar um elemento pelo seu nome de classe",
      "Selecionar um elemento pelo seletor CSS",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual destas opções é um tipo de dado primitivo em JavaScript?",
    respostas: ["Array", "Object", "String"],
    correta: 2,
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
    respostas: ["10", "7", "Error"],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    respostas: ["parseInt()", "parseFloat()", "Number()"],
    correta: 0,
  },
  {
    pergunta:
      "Qual símbolo é usado para comentários de uma única linha em JavaScript?",
    respostas: ["//", "/* */", "<!-- -->"],
    correta: 0,
  },
  {
    pergunta:
      "Qual função é usada para remover o último elemento de um array em JavaScript?",
    respostas: ["pop()", "shift()", "splice()"],
    correta: 0,
  },
  {
    pergunta:
      "Qual operador é usado para verificar igualdade de valor e tipo em JavaScript?",
    respostas: ["==", "===", "="],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do método 'map' em JavaScript?",
    respostas: [
      "Modificar todos os elementos de um array",
      "Filtrar elementos de um array",
      "Executar uma função para cada elemento de um array",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
    respostas: ["push()", "concat()", "append()"],
    correta: 0,
  },
];
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }
      
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
