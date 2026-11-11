const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const progresso = document.getElementById("progresso");
const btnReiniciar = document.getElementById("btn-reiniciar");

const perguntas = [
  {
    enunciado:
      "Ao sair da escola, você descobre uma nova IA capaz de responder a qualquer dúvida, gerar vídeos hiper-realistas e até compor músicas em segundos. Qual é a sua primeira reação?",
    alternativas: [
      {
        texto: "Fico impressionado e com receio do impacto disso no mundo.",
        afirmacao:
          "Você demonstrou preocupação com os limites e os impactos éticos da IA."
      },
      {
        texto: "Acho fascinante e mal posso esperar para testar tudo!",
        afirmacao:
          "Você se mostrou entusiasmado e curioso para explorar novos horizontes tecnológicos."
      }
    ]
  },
  {
    enunciado:
      "A professora de tecnologia pede um trabalho sobre o impacto da inteligência artificial na educação. Como você decide desenvolver essa tarefa?",
    alternativas: [
      {
        texto:
          "Uso uma assistente de IA para estruturar ideias, buscar dados e organizar a pesquisa.",
        afirmacao:
          "Você optou por usar a IA como uma aliada para potencializar seus estudos."
      },
      {
        texto:
          "Prefiro pesquisar por conta própria, entrevistando pessoas e lendo artigos.",
        afirmacao:
          "Você valorizou a investigação autônoma e o pensamento crítico."
      }
    ]
  },
  {
    enunciado:
      "Durante o debate sobre o futuro do trabalho e a automação, qual argumento representa melhor o seu ponto de vista?",
    alternativas: [
      {
        texto:
          "A IA vai eliminar tarefas repetitivas e abrir espaço para novas profissões criativas.",
        afirmacao:
          "Você acredita que a inovação tecnológica pode impulsionar novas oportunidades e habilidades humanas."
      },
      {
        texto:
          "Preocupo-me com a substituição rápida de trabalhadores e o aumento do desemprego.",
        afirmacao:
          "Você manteve o foco nos desafios sociais e na proteção dos trabalhadores."
      }
    ]
  },
  {
    enunciado:
      "Para a feira de ciências, você precisa criar uma ilustração que represente a relação entre humanos e máquinas. Como faz isso?",
    alternativas: [
      {
        texto:
          "Desenho e edito a arte manualmente em um programa de design tradicional.",
        afirmacao:
          "Você preferiu exercitar a expressão artística e a criatividade autoral."
      },
      {
        texto:
          "Escrevo instruções detalhadas em um gerador de imagens por IA até chegar ao resultado desejado.",
        afirmacao:
          "Você decidiu explorar a criação de imagens com o apoio da IA."
      }
    ]
  },
  {
    enunciado:
      "Um colega usou IA para fazer a parte dele no trabalho de biologia, mas copiou o texto sem verificar as fontes. O que você faz?",
    alternativas: [
      {
        texto:
          "Deixo como está, afinal o texto parece bem escrito e economizou nosso tempo.",
        afirmacao:
          "Você aceitou o conteúdo gerado pela IA para otimizar o tempo do grupo."
      },
      {
        texto:
          "Converso com o colega e revisamos o texto juntos para conferir os dados e incluir nossas próprias ideias.",
        afirmacao:
          "Você reconheceu que a IA exige supervisão humana, checagem de informações e participação do grupo."
      }
    ]
  },
  {
    enunciado:
      "Para encerrar o projeto, a professora propõe publicar o código do quiz para que outras pessoas possam jogar. Qual é o seu próximo passo?",
    alternativas: [
      {
        texto:
          "Crio um repositório no GitHub, envio os arquivos do projeto e publico o site com o GitHub Pages.",
        afirmacao:
          "Você concluiu a jornada publicando seu projeto e compartilhando seu trabalho com outras pessoas."
      },
      {
        texto:
          "Guardo o código no meu computador para usar apenas como projeto pessoal.",
        afirmacao:
          "Você preferiu guardar o projeto como um aprendizado de uso pessoal."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];

  progresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.replaceChildren();

  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.type = "button";
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += `${opcaoSelecionada.afirmacao} `;
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  progresso.textContent = "Jornada concluída!";
  caixaPerguntas.textContent = "Em 2049...";
  caixaAlternativas.replaceChildren();
  textoResultado.textContent = historiaFinal.trim();
  caixaResultado.classList.remove("escondido");
}

function reiniciaJornada() {
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.add("escondido");
  mostraPergunta();
}

btnReiniciar.addEventListener("click", reiniciaJornada);

mostraPergunta();
