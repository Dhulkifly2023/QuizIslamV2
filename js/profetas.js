// muhammad.js

let nivelAtual = "";
let perguntas = [];
let indiceAtual = 0;
let pontos = 0; 

const bancoPerguntas = {
    iniciante: [
        {
            pergunta: "Como o profeta Nūḥ (A.S) foi salvo do dilúvio?",
            opcoes: ["Através de uma arca", "Por oração", "Por um anjo", "Por ser justo"],
            correta: 0,
            explicacao: "'E o chamaram de mentiroso. Então, Nós o salvamos, a ele e aos que estavam com ele na arca, e afogamos aqueles que negaram os Nossos sinais.' (Surata 7:64)"
        },
        {
            pergunta: "Azar, pai de Ibrāhīm ﷺ, era um crente?",
            opcoes: ["Sim", "Não"],
            correta: 1,
            explicacao: "Recorde o momento em que Ibrāhīm disse a 'Azar, seu pai: 'Você toma ídolos como deuses? Vejo você e seu povo em claro erro!' (Surata 6:74)"
        },
        {
            pergunta: "Qual era o nome do inimigo que o Profeta Dāwūd (A.S) enfrentou?",
            opcoes: ["Jālūt", "Gaspard", "Fir'aun", "Qārūn"],
            correta: 0,
            explicacao: "'Eles os derrotaram, pela graça de Deus. E Davi matou Golias; e Deus lhe concedeu realeza e sabedoria...' (Surata 2:251)"
        },
        {
            pergunta: "Quem é o pai de ʿĪsā (A.S)?",
            opcoes: ["Zakariyā (A.S)", "Yaḥyā (A.S)", "ʿImrān", "Ele não tem pai"],
            correta: 3,
            explicacao: "'Ela (Maria) disse: 'Meu Senhor, como poderei ter um filho se nenhum homem me tocou?'' (Alcorão 3:47)"
        },
        {
            pergunta: "Ibrāhīm (A.S) tinha",
            opcoes: ["1 criança", "2 crianças", "3 crianças", "Sem crianças"],
            correta: 1,
            explicacao: "Ismāʿīl e depois Isḥāq — os dois profetas de Allah."
        },
        {
            pergunta: "Qual profeta dividiu o mar em dois?",
            opcoes: ["Yūnus (A.S)", "Sulaymān (A.S)", "Mūsā (A.S)", "Hārūn (A.S)"],
            correta: 2,
            explicacao: "'Revelamos a Moisés: Golpeia o mar com a tua vara. Ele se dividiu...' (Surata 26:63)"
        },
        {
            pergunta: "Em que animal se transformou o cajado de Mūsā (A.S)?",
            opcoes: ["Leão", "Aranha", "Cobra", "Pomba"],
            correta: 2,
            explicacao: "'E lança ao chão o teu cajado. Quando ele a viu mover-se como uma serpente...' (Surata 27:10)"
        },
        {
            pergunta: "Quem foi o pai de Sulaymān (A.S)?",
            opcoes: ["Ibrāhīm (A.S)", "Yaʿqūb (A.S)", "Dāwūd (A.S)", "Zakariyā (A.S)"],
            correta: 2,
            explicacao: "'E a Davi concedemos Salomão...' (Surata 38:30) — Dāwūd é pai de Sulaymān."
        },
        {
            pergunta: "Qual profeta emigrou para a cidade de Yathrib (Madīnah)?",
            opcoes: ["Ibrāhīm (A.S)", "ʿĪsā (A.S)", "Mūsā (A.S)", "Muhammad (S.A.W)"],
            correta: 3,
            explicacao: "Segundo Abu Hurairah, o Profeta (S.A.W) disse: 'Recebi a ordem de emigrar e viver numa cidade... Chamam-lhe Yathrib, mas o seu nome é Medina.' (Bukhari)"
        },
        {
            pergunta: "Quem é Yaḥyā (A.S) na Bíblia?",
            opcoes: ["Jesus (A.S)", "José (A.S)", "Jacó (A.S)", "João (A.S)"],
            correta: 3,
            explicacao: "Yahya é João Batista na tradição cristã, filho de Zakariyā ﷺ."
        },
        {
            pergunta: "Qual profeta tinha a capacidade de interpretar sonhos?",
            opcoes: ["Muhammad (S.A.W)", "ʿĪsā (A.S)", "Mūsā (A.S)", "Yūsuf (A.S)"],
            correta: 3,
            explicacao: "'Assim, teu Senhor te escolherá e te ensinará a interpretação dos sonhos.' (Surata 12:6) — refere-se a Yūsuf."
        },
        {
            pergunta: "Qual profeta confrontou um Faraó?",
            opcoes: ["Yūsuf (A.S)", "Mūsā (A.S)", "Dāwūd (A.S)", "Sulaymān (A.S)"],
            correta: 1,
            explicacao: "Mūsā confrontou o Faraó e lhe disse: 'Eu sou um mensageiro do Senhor dos mundos.' (Surata 7:104)"
        },
        {
            pergunta: "Qual profeta terá a maior comunidade no Dia da Ressurreição?",
            opcoes: ["Ibrāhīm (A.S)", "ʿĪsā (A.S)", "Mūsā (A.S)", "Muhammad (S.A.W)"],
            correta: 3,
            explicacao: "Anas ibn Malik relatou que o Profeta (S.A.W) disse: 'Serei o profeta com o maior número de seguidores no Dia da Ressurreição...' (Muslim)"
        },
        {
            pergunta: "Qual era o nome do filho de Ibrāhīm (A.S) que ele e sua esposa tiveram quando ele já era idoso?",
            opcoes: ["Ismāʿīl (A.S)", "Isḥāq (A.S)"],
            correta: 1,
            explicacao: "Sara exclamou sobre ter um filho na velhice; o filho foi Isḥāq (Surata Hud)."
        },
        {
            pergunta: "Qual profeta foi enviado a um Faraó?",
            opcoes: ["Mūsā (A.S)", "Idrīs (A.S)", "Hūd (A.S)", "Nūḥ (A.S)"],
            correta: 0,
            explicacao: "'E Moisés disse: Ó Faraó, eu sou um mensageiro do Senhor dos mundos.' (Surata 7:104)"
        },
        {
            pergunta: "Na tradição muçulmana, qual profeta é conhecido por sua grande beleza?",
            opcoes: ["Muhammad (S.A.W)", "Nūḥ (A.S)", "Yūsuf (A.S)", "Ayyūb (A.S)"],
            correta: 2,
            explicacao: "O Profeta (S.A.W) disse sobre Yūsuf: 'Yusuf recebeu metade da beleza.' (Relatado por Ibn Abi Shaybah)"
        },
        {
            pergunta: "A qual profeta Allah submeteu o vento?",
            opcoes: ["Sulaymān (A.S)", "Dāwūd (A.S)"],
            correta: 0,
            explicacao: "'E a Salomão (submetemos) o vento.' (Surata 34:12)"
        },
        {
            pergunta: "Foi profeta mas teve filho descrente",
            opcoes: ["Sulaymān (A.S)", "Dāwūd (A.S)","Nuh (A.S)", "Ibrāhīm (A.S)"],
            correta: 2,
            explicacao: "O filho de Nūḥ ﷺ não acreditou e foi afogado no dilúvio (Surata 11:42-43)."
        },
        {
            pergunta: "Qual profeta teve 'o camelo' como um milagre?",
            opcoes: ["Ṣāliḥ (A.S)", "Shuʿayb (A.S)", "Hūd (A.S)", "Muhammad (S.A.W)"],
            correta: 0,
            explicacao: "Um camelo milagroso foi enviado ao povo de Ṣāliḥ como sinal; ele emergiu de uma rocha segundo a narrativa."
            
        }
    ],

    intermediario: [
        {
            pergunta: "Para onde Moisés (que a paz esteja com ele) fugiu quando saiu do Egito?",
            opcoes: ["Ar Ras", "Iram", "Sinai", "Madyan"],
            correta: 3,
            explicacao: "E quando se voltou para Madiã, disse: 'Espero que meu Senhor me guie pelo caminho reto.' (Surata 28, versículo 22)"
        },
        {
            pergunta: "Qual era o fruto proibido que Adão e Eva comeram?",
            opcoes: ["Um pêssego", "Uma maçã", "Uma uva", "Nenhuma dessas"],
            correta: 3,
            explicacao: "'Ó Adão, habita, tu e tua mulher, no Paraíso e comei dele à vontade. Mas não vos aproximeis desta árvore, para que não sejais dos injustos.' (Alcorão 7:19)"
        },
        {
            pergunta: "Segundo a tradição, qual era o nome da esposa do ministro egípcio Al Aziz, que adotou Youssouf ﷺ?",
            opcoes: ["Zoulaykha", "Ásia", "Belkis", "Maimouna"],
            correta: 0,
            explicacao: "'E aquele que o comprou era do Egito. Disse à sua mulher: 'Dê-lhe uma generosa hospitalidade. Talvez ele nos seja útil, ou talvez o adotemos como filho.' (Alcorão 12:21)"
        },
        {
            pergunta: "Qual profeta viajou para adquirir novos conhecimentos de um homem misterioso?",
            opcoes: ["Issa", "Mussa", "Ibrahim", "Youssouf"],
            correta: 1,
            explicacao: "'Quando Moisés disse ao seu servo: 'Não pararei até chegar à confluência dos dois mares, mesmo que tenha que viajar por muitos anos.' (Surata 18, versículo 60)"
        },
        {
            pergunta: "É verdade que Adão (A.S) conhecia o nome de todas as coisas?",
            opcoes: ["Verdadeiro", "Falso"],
            correta: 0,
            explicacao: "'E Ele ensinou a Adão todos os nomes (de todas as coisas), depois os apresentou aos anjos e disse: 'Informem-Me os nomes destas coisas, se vocês são verazes!' (Surata 2/v31)"
        },
        {
            pergunta: "Quem era o homem extremamente rico do povo de Moisés ﷺ que foi engolido pela terra, juntamente com sua fortuna?",
            opcoes: ["Qarun", "Harun", "Samiri", "Haman"],
            correta: 0,
            explicacao: "'De fato, Corá [Qarun] era do povo de Moisés, mas era violento contra eles. Havíamos-lhe concedido tesouros [...] Então fizemos com que a terra o engolisse, a ele e à sua família. Não havia clã além de Deus para ajudá-lo, nem ele próprio podia ajudar.' (Surata 28, versículos 76-81)"
        },
        {
            pergunta: "Quem foi o primeiro filho do Profeta Ibrahim (A.S)?",
            opcoes: ["Ishaq (A.S)", "Ismail (A.S)"],
            correta: 1,
            explicacao: "Ismael (que a paz esteja com ele) foi o primeiro filho de Abraão (que a paz esteja com ele); sua mãe era Agar. Mais tarde, por meio de um milagre, ele teve Isaac (que a paz esteja com ele) com Sara, quando ela já era muito idosa e estéril. 'Então sua mulher se aproximou, gritando, e bateu no rosto, dizendo: 'Uma velha e estéril...' (Alcorão 51:29)"
        },
        {
            pergunta: "Qual profeta conseguia controlar o vento?",
            opcoes: ["Muhammad (S.A.W)", "David (A.S)", "Noé (A.S)", "Salomão (A.S)"],
            correta: 3,
            explicacao: "'E (Nós submetemos) a Salomão o vento impetuoso que, por sua ordem, se dirigia para a terra que Nós tínhamos abençoado...' (Surata 21/v81)"
        },
        {
            pergunta: "Qual profeta foi aquele a quem as montanhas e os pássaros cantaram louvores a Alá?",
            opcoes: ["José (A.S)", "David (A.S)", "Salomão (A.S)", "Jesus (A.S)"],
            correta: 1,
            explicacao: "'...E submetemos os montes à glória de Deus, assim como as aves...' (Surata 21/v79)"
        },
        {
            pergunta: "Quem disse: 'Senhor! Mostra-me como ressuscitas os mortos'?",
            opcoes: ["Moussa (A.S)", "Issa (A.S)", "Ibrahim (A.S)", "Youssouf (A.S)"],
            correta: 2,
            explicacao: "Ibrahim perguntou a Allah como Ele ressuscitava os mortos, mostrando sua curiosidade sobre os milagres divinos."
        },
        {
            pergunta: "Qual história de profeta Alláh descreveu como a melhor das narrativas?",
            opcoes: ["Ibrahim (A.S)", "Yahya (A.S)", "Muhammad (S.A.W)", "Youssouf (A.S)"],
            correta: 3,
            explicacao: "'Contamos-te a mais bela história, [...] Quando Yusuf disse a seu pai: 'Ó meu pai, vi onze estrelas, e também o sol e a lua; vi-os prostrando-se diante de mim...' (Surata 12/v3-4)"
        },
        {
            pergunta: "Qual profeta disse a um rei incrédulo: 'Já que Deus traz o sol do Oriente, então faça-o nascer do Ocidente'?",
            opcoes: ["Youssouf (A.S)", "Muhammad (S.A.W)", "Ibrahim (A.S)", "Nouh (A.S)"],
            correta: 2,
            explicacao: "Ibrahim desafiou o rei incrédulo com essa questão, mostrando a irracionalidade da idolatria. (Sura 2/v258)"
        },
        {
            pergunta: "A que povo foi enviado o profeta Shu'ayb (A.S)?",
            opcoes: ["Ad", "Thamoud", "Madyan", "Al Ayka"],
            correta: 2,
            explicacao: "Shu'ayb ﷺ foi enviado ao povo de Madyan para adverti-los sobre suas práticas desonéstas no comércio."
        },
        {
            pergunta: "Qual profeta Allah o ensinou a fazer armadura de cota de malha?",
            opcoes: ["Moísés (A.S)", "Noé (A.S)", "Salomão (A.S)", "David (A.S)"],
            correta: 3,
            explicacao: "'E Nós o ensinamos (a Davi) a fazer cotas de malha para que vos protejam da violência uns dos outros (da guerra). Agradeceis então?' (Surata 21/v80)"
        },
        {
            pergunta: "Quem teve a honra de cuidar de Maryam?",
            opcoes: ["Zacarias (A.S)", "Yahya (A.S)", "Issa (A.S)", "Sua mãe"],
            correta: 0,
            explicacao: "'Então seu Senhor a aceitou com boa vontade e a fez crescer de maneira benéfica. E confiou seu cuidado a Zacarias.' (Surata 3/v37)"
        },
        {
            pergunta: "Qual profeta foi lançado ao fogo pelo seu próprio povo?",
            opcoes: ["Youssouf (A.S)", "Moussa (A.S)", "Ibrahim (A.S)", "Nouh (A.S)"],
            correta: 2,
            explicacao: "'Dissemos: Ó fogo, seja frescor e paz para Abraão.' (Surata 21, versículo 69)"
        },
        {
            pergunta: "Quem é o pai do profeta Yahya (A.S)?",
            opcoes: ["Jacó (A.S)", "Ishaq (A.S)", "Daoud (A.S)", "Zacarias (A.S)"],
            correta: 3,
            explicacao: "'Ó Zacarias, anunciamos-te um filho, cujo nome será João Batista. Antes, não lhe tínhamos dado um nome.' (Surata 19/v7)"
        },
        {
            pergunta: "Quem foi o pai do Profeta Jacó (A.S)?",
            opcoes: ["Ismail (A.S)", "Ishaq (A.S)", "Ibrahim (A.S)", "Idriss (A.S)"],
            correta: 1,
            explicacao: "O Profeta Yacoub ﷺ (também chamado Jacob) é filho de Isaac ﷺ e neto de Ibrahim, sendo também pai de Youssouf ﷺ."
        },
        {
            pergunta: "Ibrahim (A.S) teve duas esposas, quem são elas?",
            opcoes: ["Sephora e Sarah", "Ester e Ajar", "Sara e Hajar", "Hajar e Sephora"],
            correta: 2,
            explicacao: "Ibrahim ﷺ teve duas esposas: Sara (ou Sarah), mãe de Isaac, e Hajar, mãe de Ismael."
        }
    ],
    avancado: [
        {
            pergunta: "Qual profeta era sobrinho do profeta Ibrahim (A.S)?",
            opcoes: ["Lut (A.S)", "Jacó (A.S)", "Ismail (A.S)", "Salih (A.S)"],
            correta: 0,
            explicacao: "'Quando o medo deixou Abraão e as boas novas chegaram até ele, ele argumentou conosco em favor do povo de Ló.' (Surata 11/v74)"
        },
        {
            pergunta: "Qual era o nome da divindade adorada pelo povo do Profeta Elias (Ilyes) (A.S)?",
            opcoes: ["Baal", "Al Lat", "Manat", "Uzza"],
            correta: 0,
            explicacao: "'Invocarás Baal e negligenciarás o Melhor dos Criadores...' (Surata 37/v125)"
        },
        {
            pergunta: "Qual o nome do livro do Profeta Davi (A.S)?",
            opcoes: ["Tawrat", "Zabour", "Injil", "Souhouf"],
            correta: 1,
            explicacao: "'...e Nós entregamos os Salmos a Davi.' (Surata 4/v163)"
        },
        {
            pergunta: "Qual desses profetas é o diferente devido à sua origem geográfica?",
            opcoes: ["Youssouf (A.S)", "Moussa (A.S)", "Harun (A.S)", "Younous (A.S)"],
            correta: 3,
            explicacao: "Yunus é o único dos quatro profetas que viveu no território que hoje corresponde ao Iraque. Os outros três viveram no Egito."
        },
        {
            pergunta: "Quem disse: 'Se os castigares, eles serão Teus servos. E se os perdoares, Tu és o Todo-Poderoso, o Todo-Sábio'?",
            opcoes: ["Adão (A.S)", "Nouh (A.S)", "Issa (A.S)", "Younous (A.S)"],
            correta: 2,
            explicacao: "(Surata 5, versículo 118)"
        },
        {
            pergunta: "Qual dos irmãos de Youssouf (A.S) tem a mesma mãe?",
            opcoes: ["Ruben", "Judá", "Benjamin", "Gad"],
            correta: 2,
            explicacao: "Os outros irmãos eram seus meio-irmãos, pois seu pai, Yacoub ﷺ, tinha duas esposas."
        },
        {
            pergunta: "Quais dois profetas foram traídos por suas esposas?",
            opcoes: ["Adão e Noé", "Noé e Ló", "Hud e Lot", "Adão e Hud"],
            correta: 1,
            explicacao: "'Deus apresenta um exemplo para os incrédulos: a esposa de Noé e a esposa de Ló [...] Ambas os traíram e não lhes foram de nenhum auxílio contra Deus. E foi dito: 'Entrem no Fogo, ambas, com aqueles que nele entrarem.' (Surata 66/v10)"
        },
        {
            pergunta: "Qual profeta fez esta súplica por seu pai: 'Conceda Seu perdão a meu pai, pois ele estava entre os que se extraviaram'?",
            opcoes: ["Mussa (A.S)", "Muhammad (S.A.W)", "Lut (A.S)", "Ibrahim (A.S)"],
            correta: 3,
            explicacao: "(Surata Al-Ankabut (26), versículo 86)"
        },
        {
            pergunta: "No Dia do Juízo Final, todos estarão nus. Quem será o primeiro a se vestir?",
            opcoes: ["Muhammad (S.A.W)", "Ibrahim (A.S)", "Adão (A.S)", "Nouh (A.S)"],
            correta: 1,
            explicacao: "'A primeira criatura a ser vestida no Dia da Ressurreição será Ibrahim.' (Relatado por Bukhari)"
        },
        {
            pergunta: "Quem foi o primeiro profeta árabe?",
            opcoes: ["Muhammad (S.A.W)", "Salih (A.S)", "Hud (A.S)", "Ismail (A.S)"],
            correta: 2,
            explicacao: "Hud é o profeta da tribo de Ad, considerada na época um povo poderoso, com a cidade de Iram como capital, que possuía uma coluna notável, segundo a Surata 89."
        },
        {
            pergunta: "Qual profeta foi enviado ao povo de Al Ayka?",
            opcoes: ["Hud (A.S)", "Salih (A.S)", "Ayoub (A.S)", "Chouayb (A.S)"],
            correta: 3,
            explicacao: "'O povo de Al-Ayka chamou os Mensageiros de mentirosos. Quando Shu'ayb lhes disse: 'Não temerão [a Deus]?' (Surata 26/v176-177)"
        },
        {
            pergunta: "Quem disse: 'O mal me sobreveio. Mas Tu és o Mais Misericordioso dos misericordiosos'?",
            opcoes: ["Ayoub (A.S)", "Younous (A.S)", "Issa (A.S)", "Yahya (A.S)"],
            correta: 0,
            explicacao: "(Surata 21/v83)"
        },
        {
            pergunta: "Quantos profetas são mencionados no Alcorão?",
            opcoes: ["10", "15", "25", "36"],
            correta: 2,
            explicacao: "De acordo com a maioria dos estudiosos islâmicos, 25 profetas são especificamente mencionados pelo nome no Alcorão."
        },
        {
            pergunta: "Após 950 anos de preg ação, os discípulos de Noé (A.S) eram numerosos?",
            opcoes: ["Sim", "Não"],
            correta: 1,
            explicacao: "'...Dissemos: 'Coloquem na arca um casal de cada espécie e suas famílias, exceto aqueles contra os quais o decreto já foi emitido, e aqueles que creem.' Mas poucos foram os que creram com ele.' (Surata 11:40)"
        },
        {
            pergunta: "Qual é o lugar para onde Hud (A.S) chamou seu povo?",
            opcoes: ["Al Ahqaf", "Al Ayka", "Iram", "Babilônia"],
            correta: 0,
            explicacao: "'E lembre-se do irmão de Ad (Hud) quando alertou seu povo em Al-Ahqaf - tanto antes dele quanto depois dele, mensageiros vieram: Não adorem senão a Allah. Temo por vós o castigo de um dia terrível.' (Surata 46/v21)"
        },
        {
            pergunta: "Quem disse: 'Ó meu querido pai, faze como te foi ordenado, e encontrarás-me, se Deus quiser, entre os pacientes'?",
            opcoes: ["Ismail (A.S)", "Ishaq (A.S)", "Jacó (A.S)", "Youssouf (A.S)"],
            correta: 0,
            explicacao: "(Surata 37, versículo 102)"
        },
        {
            pergunta: "No versículo: 'Ó meu Senhor', disse [Zacarias], 'conceda-me um sinal', qual era esse sinal?",
            opcoes: ["Ele se tornou luz", "Ele ficou rico", "Ele ficou mudo", "Ele cresceu jovem"],
            correta: 2,
            explicacao: "'Seu sinal', disse [Allah], 'será que vocês não poderão falar com ninguém durante três noites, enquanto estiverem com boa saúde.' (Alcorão 19:10)"
        },
        {
            pergunta: "A história do profeta Yusuf (A.S) era conhecida pelo faraó de Musa (A.S)?",
            opcoes: ["Sim", "Não"],
            correta: 0,
            explicacao: "'E um crente da família de Faraó, que ocultava a sua fé, disse: [...] De fato, Yusuf (José) já havia vindo a vós antes com provas evidentes, mas vós jamais deixastes de duvidar do que ele vos havia trazido. Mas, quando ele morreu, dissestes: 'Alá jamais enviará outro mensageiro depois dele...' (Surata 40:28-34)"
        },
        {
            pergunta: "Quem é o Profeta, filho de um Profeta, ele próprio filho de um Profeta, ele próprio filho de um Profeta?",
            opcoes: ["Muhammad (S.A.W)", "Issa (A.S)", "Suleiman (A.S)", "Youssouf (A.S)"],
            correta: 3,
            explicacao: "Youssouf (A.S) filho de Yacob (A.S) filho de Ishaq (A.S) filho de Ibrahim (A.S)"
        }
    ]
    
};

function comecarNivel(nivel) {
    nivelAtual = nivel;
    perguntas = [...bancoPerguntas[nivel]];
    // Embaralha aleatoriamente as perguntas do nível
    for (let i = perguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
    indiceAtual = 0;
    pontos = 0;

    document.getElementById("tela-niveis").style.display = "none";
    document.getElementById("tela-quiz").style.display = "block";

    document.getElementById("nivel-titulo").textContent = 
        `Nível: ${nivel.charAt(0).toUpperCase() + nivel.slice(1)}`;

    mostrarPergunta();
}

function mostrarPergunta() {
    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const q = perguntas[indiceAtual];
    
    document.getElementById("contador-pergunta").textContent = 
        `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;
    
    document.getElementById("pergunta-texto").textContent = q.pergunta;

    const container = document.getElementById("opcoes-container");
    container.innerHTML = "";

    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.className = "btn-opcao";
        btn.textContent = opcao;
        btn.onclick = () => selecionarResposta(index);
        container.appendChild(btn);
    });

    document.getElementById("btn-proxima").disabled = true;
    document.getElementById("explicacao-box").innerHTML = "";
}

function selecionarResposta(escolha) {
    const q = perguntas[indiceAtual];
    const botoes = Array.from(document.querySelectorAll(".btn-opcao"));

    // Desabilita todas as opções para evitar múltiplos cliques
    botoes.forEach(b => b.disabled = true);

    if (escolha === q.correta) {
        // Acertou: marca a escolhida como correta e esconde as restantes
        botoes[escolha].classList.add("correta");
        pontos++;

        botoes.forEach((b, i) => {
            if (i !== escolha) b.style.display = 'none';
        });
    } else {
        // Errou: marca a escolhida como errada e mostra a correta
        botoes[escolha].classList.add("errada");
        botoes[q.correta].classList.add("correta");

        botoes.forEach((b, i) => {
            if (i !== escolha && i !== q.correta) b.style.display = 'none';
        });
    }

    if (q.explicacao) {
        document.getElementById("explicacao-box").textContent = q.explicacao;
    }

    document.getElementById("btn-proxima").disabled = false;
}

function mostrarProxima() {
    indiceAtual++;
    mostrarPergunta();
}

function mostrarResultado() {
    document.getElementById("tela-quiz").style.display = "none";
    document.getElementById("tela-resultado").style.display = "block";

    const total = perguntas.length;
    const percentual = Math.round((pontos / total) * 100);

    document.getElementById("acertos").textContent = pontos;
    document.getElementById("erros").textContent = total - pontos;
    document.getElementById("percentual-texto").textContent = percentual + "%";
    document.getElementById("percentual-final").textContent = percentual + "%";

    let status = "Precisa melhorar";
    if (percentual >= 80) status = "Excelente! ṣallallāhu ʿ";
    else if (percentual >= 60) status = "Muito bom!";
    else if (percentual >= 40) status = "Razoável";

    document.getElementById("status-final").textContent = status;

    animarCirculo(percentual);

    const btnProximo = document.getElementById("btn-proximo-nivel");
    if (percentual >= 80 && nivelAtual !== "avancado") {
        btnProximo.style.display = "inline-block";
        btnProximo.onclick = () => {
            const proximo = nivelAtual === "iniciante" ? "intermediario" : "avancado";
            comecarNivel(proximo);
        };
    }
}

function animarCirculo(percentualFinal) {
    const circulo = document.getElementById("circulo-progresso");
    let atual = 0;
    
    const timer = setInterval(() => {
        atual += 2;
        circulo.style.background = `conic-gradient(var(--accent-color) ${atual * 3.6}deg, var(--secondary-color) 0deg)`;
        
        if (atual >= percentualFinal) {
            clearInterval(timer);
            circulo.style.background = `conic-gradient(var(--accent-color) ${percentualFinal * 3.6}deg, var(--secondary-color) 0deg)`;
        }
    }, 20);
}

function reiniciarNivel() {
    comecarNivel(nivelAtual);
}

// Eventos
document.getElementById("btn-proxima").onclick = mostrarProxima;
