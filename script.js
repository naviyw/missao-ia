const caixaPrincipal = document.querySelector(".caixa-principal");
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
        afirmacao: "Você demonstrou preocupação com os limites e impactos éticos da IA."
      },
      {
        texto: "Acho fascinante e mal posso esperar para testar tudo!",
        afirmacao: "Você se mostrou entusiasmado e curioso para explorar novos horizontes tecnológicos."
      }
    ]
  },
  {
    enunciado:
      "A professora de tecnologia pede um trabalho sobre 'O Impacto da Inteligência Artificial na Educação'. Como você decide desenvolver essa tarefa?",
    alternativas: [
      {
        texto: "Uso uma assistente de IA para estruturar ideias, buscar dados e organizar a pesquisa.",
        afirmacao: "Optou por usar a IA como uma potente aliada para potencializar seus estudos."
      },
      {
        texto: "Prefiro pesquisar por conta própria, entrevistando pessoas e lendo artigos tradicionais.",
        afirmacao: "Valorizou o processo investigativo autônomo e o pensamento crítico autoral."
      }
    ]
  },
  {
    enunciado:
      "Durante o debate na aula sobre o futuro do trabalho com a automação, qual argumento representa melhor o seu ponto de vista?",
    alternativas: [
      {
        texto: "A IA vai eliminar tarefas repetitivas e abrir espaço para novas profissões criativas.",
        afirmacao: "Acredita que a inovação tecnológica impulsionará novas oportunidades e habilidades humanas."
      },
      {
        texto: "Preocupo-me com a substituição rápida de trabalhadores e o aumento do desemprego.",
        afirmacao: "Manteve o foco nos desafios sociais e na proteção do mercado de trabalho humano."
      }
    ]
  },
  {
    enunciado:
      "Para a feira de ciências, você precisa criar uma ilustração conceitual que defina a relação entre humanos e máquinas. Como faz isso?",
    alternativas: [
      {
        texto: "Desenho e edito a arte manualmente em um programa de design tradicional.",
        afirmacao: "Preferiu exercitar a expressão artística direta e o desenvolvimento criativo autoral."
      },
      {
        texto: "Escrevo prompts detalhados em um gerador de imagens por IA até alcançar o resultado.",
        afirmacao: "Decidiu explorar o co-design e a geração sintética de imagens via IA."
      }
    ]
  },
  {
    enunciado:
      "Um colega no trabalho de biologia usou o ChatGPT para fazer a parte dele, mas copiou o texto integralmente sem verificar as fontes. O que você faz?",
    alternativas: [
      {
        texto: "Deixo como está, afinal o texto parece bem escrito e economizou nosso tempo.",
        afirmacao: "Aceitou o conteúdo direto da máquina para otimizar o tempo do grupo."
      },
      {
        texto: "Alertamos o colega e revisamos o texto juntas para garantir dados corretos e voz própria.",
        afirmacao: "Reconheceu que a IA exige supervisão humana, checagem de fatos e toque pessoal."
      }
    ]
  },
  {
    enunciado:
      "Para encerrar o projeto da disciplina, a professora propõe publicar o código do quiz para que o mundo possa jogar. Qual é o seu próximo passo?",
    alternativas: [
      {
        texto: "Crio um repositório no GitHub, subo os arquivos do projeto e ativo o GitHub Pages para publicar o site.",
        afirmacao: "Concluiu sua jornada publicando seu projeto no GitHub e compartilhando seu conhecimento com o mundo!"
      },
      {
        texto: "Guardo o código no meu computador para usar apenas como projeto pessoal.",
        afirmacao: "Preferiu manter seu projeto guardado como um aprendizado de uso pessoal."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  progresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";

  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  progresso.textContent = "Jornada Concluída!";
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.remove("escondido");
}

btnReiniciar.addEventListener("click", () => {
  atual = 0;
  historiaFinal = "";
  caixaResultado.classList.add("escondido");
  mostraPergunta();
});

mostraPergunta();
