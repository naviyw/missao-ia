const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "Você ficou preocupado com os impactos da IA."
      },
      {
        texto: "Isso é incrível!",
        afirmacao: "Você ficou curioso com as possibilidades da IA."
      }
    ]
  },

  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto:
          "Utiliza uma ferramenta de busca na internet que utiliza IA para encontrar informações relevantes e facilitar o entendimento.",
        afirmacao:
          "Você decidiu utilizar a IA como ferramenta de apoio aos estudos."
      },
      {
        texto:
          "Escreve o trabalho com base nas conversas que teve com colegas, pesquisas na internet e conhecimentos próprios.",
        afirmacao:
          "Você preferiu realizar a pesquisa utilizando principalmente seus próprios conhecimentos e outras fontes."
      }
    ]
  },

  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto:
          "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao:
          "Você acredita que a IA pode criar oportunidades e ajudar as pessoas no futuro."
      },
      {
        texto:
          "Me preocupo com as pessoas que perderão seus empregos para as máquinas.",
        afirmacao:
          "Você está preocupado com os possíveis impactos da IA no mercado de trabalho."
      }
    ]
  },

  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto:
          "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao:
          "Você prefere criar suas próprias imagens e desenvolver sua criatividade."
      },
      {
        texto:
          "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao:
          "Você decidiu experimentar a geração de imagens utilizando IA."
      }
    ]
  },

  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto:
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao:
          "Você acredita que utilizar o texto gerado pela IA pode ajudar o grupo a terminar o trabalho."
      },
      {
        texto:
          "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra. Por isso, revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao:
          "Você entende que a IA deve ser utilizada como apoio, mas que é necessário revisar e participar da produção do trabalho."
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
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
