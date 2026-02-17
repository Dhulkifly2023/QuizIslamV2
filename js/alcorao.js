// alcorao.js - versão atualizada com suas perguntas

let nivelAtual = "";
let perguntas = [];
let indiceAtual = 0;
let pontos = 0;

const bancoPerguntas = {
    // Nível Iniciante - perguntas mais básicas e diretas
   iniciante: [
        {
            pergunta: "Quantos surats existem no Alcorão?",
            opcoes: ["30 surats", "114 surats", "121 surats", "100 suratas"],
            correta: 1,
            explicacao: "São 114 surates (Capítulos). Dentre eles 86 foram reveladas em Makka e 28 em Madina."
        },
        {
            pergunta: "Em quantos Juzes (partes) o Alcorão foi dividido?",
            opcoes: ["30", "26", "28", "15"],
            correta: 0,
            explicacao: "O Alcorão é dividido em 30 partes iguais para facilitar a leitura mensal."
        },
        {
            pergunta: "O nome do profeta que o nome da mãe foi mencionado no Alcorão:",
            opcoes: ["Issa (A.S)", "Ibrahim (A.S)", "Yaakub (A.S)", "Muhammadd (S.A.W)"],
            correta: 0,
            explicacao: "Refere-se a Maryam filha de Imran, que é conhecida como Maria mãe de Jesus (A.S). Ela possui um surat com seu nome (Alcorão-cap.19)."
        },
        {
            pergunta: "Qual foi o Primeiro surat do Alcorão a ser revelado?",
            opcoes: ["Maryam", "An-nass", "At tawbah", "Al'Alaq"],
            correta: 3,
            explicacao: "O primeiro surat foi Al'Alaq (Alcorão-Cap.96) os seus primeiro 5 versículos."
        },
        {
            pergunta: "Qual foi o Primeiro surat do Alcorão a ser revelado em Maddinah?",
            opcoes: ["Al'Alaq", "Ar-Rahman", "Al-fatiha", "Al-kawthar"],
            correta: 2,
            explicacao: "AL'Fatiha foi o primeiro surat a ser revelado em Madinah, diferente do Al'Alaq que foi em Makka."
        },
        {
            pergunta: "Qual é o significado da palavra Fatiha?",
            opcoes: ["Paz", "Abertura", "Sinceridade", "Harmonia"],
            correta: 1,
            explicacao: "Fatiha significa 'A Abertura', pois abre o Livro Sagrado."
        },
        {
            pergunta: "Onde ocorreu a primeira revelação do Alcorão?",
            opcoes: ["Caverna de Badr", "Caverna Hira"],
            correta: 1,
            explicacao: "Ocorreu na Caverna Hira, localizada nos subúrbios de Makka."
        },
        {
            pergunta: "Em qual das cidades a Caverna Hira está localizada?",
            opcoes: ["Makka", "Madinah"],
            correta: 0
        },
        {
            pergunta: "O dia que a primeira revelação foi feita para Muhammad (S.A.W):",
            opcoes: ["segunda-Feira", "Terça-Feira", "Domingo", "Sexta-Feira"],
            correta: 3
        },
        {
            pergunta: "O Alcorão contém factos científicos?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "Sim, o alcorão contém tudo, incluindo factos científicos; é um autêntico milagre."
        },
        {
            pergunta: "Qual é o último surat do Alcorão?",
            opcoes: ["Al-fatiha", "An-nass", "An-nahl", "Ya-sin"],
            correta: 1,
            explicacao: "An-nass (Alcorão-cap.114)."
        },
        {
            pergunta: "Qual é o maior surat do Alcorão?",
            opcoes: ["An-Burooj", "An-Nahl", "Al-Baqara", "Al-Qalam"],
            correta: 2,
            explicacao: "Surat Al-Baqara (A vaca) com 286 versículos."
        },
        {
            pergunta: "Qual é o surat mais curto do Alcorão?",
            opcoes: ["Al-fatiha", "An-nass", "Al-kawthar", "Al-ikhlass"],
            correta: 2,
            explicacao: "Surata Al-kawthar (cap.108) com apenas 3 versículos e não contém a letra 'mim'."
        },
        {
            pergunta: "Qual é o surat conhecido por coração do Alcorão?",
            opcoes: ["An-Naml", "An-nass", "Al-kawthar", "Ya-sin"],
            correta: 3
        },
        {
            pergunta: "Qual é o surat conhecido por Uruss (noiva) do Alcorão?",
            opcoes: ["An-Naml", "Al-Balad", "Ar-Rahman", "Ya-sin"],
            correta: 2,
            explicacao: "O Profeta (S.A.W) disse: 'Tudo tem uma noiva, e a noiva do Alcorão é a Surah Ar-Rahman'."
        },
        {
            pergunta: "Qual é o surat que possui o versículo mais longo do Alcorão?",
            opcoes: ["Al-Baqara", "Al-Furqan", "Al-Rahman", "Ya-sin"],
            correta: 0,
            explicacao: "É o versículo 282 do surat Al-Baqara."
        },
        {
            pergunta: "Qual é o surat conhecido por Ummul Kitab (mãe do livro)?",
            opcoes: ["Al-Waquiah", "Al-Fatiha", "Az-Zumar", "Ya-sin"],
            correta: 1
        },
        {
            pergunta: "Quantas vezes o nome do profeta Muhammad (S.A.W) foi mencionado no Alcorão?",
            opcoes: ["4", "6", "7", "9"],
            correta: 0
        },
        {
            pergunta: "Quantos versículos foram revelados na primeira revelação (wahi)?",
            opcoes: ["7", "9", "5", "6"],
            correta: 2,
            explicacao: "Foram os 5 primeiros versículos do surat Al-Alaq (Cap. 96)."
        },
        {
            pergunta: "Quantos surates têm nomes de Animais como título?",
            opcoes: ["2", "3", "1", "5"],
            correta: 0,
            explicacao: "Surat Al-Baqara (A Vaca) e Al-fil (O elefante)."
        },
        {
            pergunta: "Qual surat é recomendado para ler na sexta-feira?",
            opcoes: ["Al-kahf", "As-Shamss", "Al-lail", "At-tur"],
            correta: 0,
            explicacao: "A recitação de Surah Al Kahf traz luz de uma sexta-feira à próxima."
        },
        {
            pergunta: "Quantos surates têm nomes de Insectos como título?",
            opcoes: ["2", "7", "6", "3"],
            correta: 3,
            explicacao: "Al-Nahl (Abelha), An-Naml (Formiga) e Al-Ankabut (Aranha)."
        },
        {
            pergunta: "Há algum surat com nome de um fruto?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "Sim, o surat At-Tiin (O Figo) no capítulo 95."
        },
        {
            pergunta: "Qual foi o primeiro versículo que foi revelado ao profeta (S.A.W)?",
            opcoes: [
                "Diga, Ele Allah é único", 
                "Louvado seja Deus, Senhor do Universo", 
                "Que tu és dos mensageiros", 
                "Lê, em nome do Teu Senhor que criou"
            ],
            correta: 3,
            explicacao: "Versículo 01 do surat Al-Alaq (Cap. 96)."
        }
    ],

    // Nível Intermediário - perguntas médias
   intermediario: [
        {
            pergunta: "O Alcorão foi revelado no Lailatul-Qadr (Noite de Decreto)?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "O Alcorão foi revelado na noite de Decreto. Uma noite ímpar da última dezena do mês de Ramadan do ano 610, quando o profeta tinha 40 anos."
        },
        {
            pergunta: "Em que forma foi revelado o Alcorão?",
            opcoes: ["Era revelado um ou mais versículos", "Era revelado um surat Inteiro", "As duas opções estão corretas"],
            correta: 2,
            explicacao: "As duas Opções estão corretas, às vezes era revelado um ou mais versículos e às vezes um surat inteiro."
        },
        {
            pergunta: "Quantos escrivãos haviam para redigirem o Alcorão?",
            opcoes: ["5", "7", "3", "8"],
            correta: 2,
            explicacao: "3: Ali Ibn Abi Talib, Abdullah ibn Massud e Zaid Ibn Thabit. Escreviam em pedras, pergaminhos, peles, etc."
        },
        {
            pergunta: "Quanto tempo durou a revelação do Alcorão?",
            opcoes: ["27 anos", "18 anos", "29 anos", "23 anos"],
            correta: 3,
            explicacao: "O Alcorão foi revelado em 23 anos, sendo 13 anos em Makka e 10 em Madina."
        },
        {
            pergunta: "Em termos de período de revelação, quantos tipos de versículos existem?",
            opcoes: ["3", "2", "4", "Apenas 1"],
            correta: 1,
            explicacao: "Existem 2 tipos: Makki (antes da Hégira) e Madani (depois da Hégira)."
        },
        {
            pergunta: "Em termos de conteúdo, quais são os tipos de versículos no Alcorão?",
            opcoes: ["7", "3", "2", "1"],
            correta: 2,
            explicacao: "Existem 2: Muhkam (claros e sólidos) e Mutashábihát (exigem os Muhkam para serem compreendidos)."
        },
        {
            pergunta: "Quantos profetas foram mencionados no Alcorão?",
            opcoes: ["36", "27", "25", "91"],
            correta: 2
        },
        {
            pergunta: "Existem surates que levam nomes dos profetas?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "Sim, existem seis: Yunuss, Hud, Yussuf, Ibrahim, Muhammadd e Nuh."
        },
        {
            pergunta: "Qual foi o alfabeto (letra) mais utilizado no Alcorão?",
            opcoes: ["Suad (ص)", "Baun (ب)", "Alif (ا)", "Lam (ل)"],
            correta: 2
        },
        {
            pergunta: "Quanto tempo durou a revelação do Alcorão em Madina?",
            opcoes: ["10 anos", "11 anos", "23 anos", "12 anos"],
            correta: 0,
            explicacao: "A revelação durou 13 anos em Makka e 10 anos em Madina."
        },
        {
            pergunta: "Quem é o profeta mais citado no Alcorão?",
            opcoes: ["Mussa (A.S)", "Issa (A.S)", "Ibrahim (A.S)", "Muhammad (S.A.W)"],
            correta: 0,
            explicacao: "Mussa (A.S) é mencionado 136 vezes no Alcorão."
        },
        {
            pergunta: "No Alcorão, quantos anjos guardam o inferno?",
            opcoes: ["18", "21", "19", "70.000"],
            correta: 2,
            explicacao: "«Há 19 deles que cuidam dele» (Alcorão 74:30)."
        },
        {
            pergunta: "Qual surat não contém a letra 'mim'?",
            opcoes: ["Al-kawthar", "An-Nass", "Al-Burooj", "Al-Ikhlass"],
            correta: 0
        },
        {
            pergunta: "No Alcorão, onde está localizada a árvore de Zaqqum?",
            opcoes: ["No Paraíso", "No inferno", "No Monte Sinai", "Em Makka"],
            correta: 1,
            explicacao: "A árvore de Zaqqum é uma fonte de tormento no Inferno. Seus frutos parecem cabeças de demônios."
        },
        {
            pergunta: "Qual surat fala de um rio do paraíso?",
            opcoes: ["Al-kawthar", "An-Nass", "Al-Burooj", "Al-Ikhlass"],
            correta: 0,
            explicacao: "O Al-Kawthar é um rio que Allah concedeu ao Profeta no Paraíso."
        },
        {
            pergunta: "Qual foi o último versículo revelado no Alcorão?",
            opcoes: ["Diga, Ele Allah é único", "E temei o dia em que retornareis a Allah", "Que tu és dos mensageiros", "Lê, em nome do Teu Senhor"],
            correta: 1,
            explicacao: "Alcorão cap. 2:281."
        },
        {
            pergunta: "Quantos Sujdats (prostrações) há no Alcorão?",
            opcoes: ["16", "14", "11", "10"],
            correta: 1,
            explicacao: "Há 14 pontos de prostração obrigatórios na leitura do Alcorão."
        },
        {
            pergunta: "Qual é o nome do Dia da Ressurreição mencionado no Alcorão?",
            opcoes: ["Al-Ba'çu", "Yaumul al-akhir", "As-sa'at", "Todos eles"],
            correta: 3,
            explicacao: "O Alcorão usa diversos nomes: Ressurreição, Último Dia, A Hora, Julgamento, etc."
        },
        {
            pergunta: "Qual é o surat que contém dois sujdats (prostrações)?",
            opcoes: ["Al-Mulk", "Ar-rum", "Al-Alaq", "Al-Hajj"],
            correta: 3,
            explicacao: "O Surat Al-Hajj (cap. 22) é o único com duas prostrações."
        },
        {
            pergunta: "Quantos 'Basmallahs' existem no Alcorão?",
            opcoes: ["100", "114", "112", "113"],
            correta: 1,
            explicacao: "São 114. O Surat 9 não tem, mas o Surat 27 tem duas (uma no início e outra no versículo 30)."
        },
        {
            pergunta: "Quantos versículos existem no Surat Al-Fatiha?",
            opcoes: ["9", "6", "7", "10"],
            correta: 2,
            explicacao: "São 7 versículos reiterativos (Alcorão 15:87)."
        },
        {
            pergunta: "O Alcorão foi revelado originalmente em qual língua?",
            opcoes: ["Hebraico", "Árabe", "Aramaico", "Persa"],
            correta: 1,
            explicacao: "Revelado em Árabe para admoestar a Mãe das Metrópoles (Alcorão 42:7)."
        },
        {
            pergunta: "Quais surates começam com 'Al-Hamdulillah'?",
            opcoes: [
                "Al-Fatiha, Al-An'ami, Al-Kahf, As-sabai, Al-Fátuir",
                "Al-Fatiha, Al-Kahf, Al-kawthar, Al-Máida",
                "Todas opções estão certas",
                "Nenhum deles"
            ],
            correta: 0,
            explicacao: "São as suratas 01, 06, 18, 34 e 35."
        },
        {
            pergunta: "Quais animais foram enviados para proteger a Kaaba do exército de Abraha?",
            opcoes: ["Corvos", "Elefantes", "Pássaros", "Leões"],
            correta: 2,
            explicacao: "Allah enviou bandos de pássaros que atiraram pedras de barro contra eles (Surat Al-Fil)."
        },
        {
            pergunta: "O Alcorão conta a história de todos os profetas, sem exceção?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "Falso. Allah diz que relatou a história de alguns, mas de outros nada relatou (Alcorão 40:78)."
        }
    ],

    // Nível Avançado - perguntas mais detalhadas e específicas
   avancado: [
        {
            pergunta: "Em qual surat se encontra o versículo: 'O ser humano certamente está em perdição'?",
            opcoes: ["Al-Asr", "Ar-Humazat", "Al-Lail", "Al-Quraish"],
            correta: 0,
            explicacao: "Capítulo 103 (Surat Al-Asr)."
        },
        {
            pergunta: "Quem disse: 'Meu Senhor! Construa-me, Contigo, uma casa no Paraíso'?",
            opcoes: ["Maryam", "Ássia", "Khadijat", "Fátima"],
            correta: 1,
            explicacao: "Ássia, a esposa do Faraó. Deus a cita como exemplo de fé no Alcorão (cap. 66:V11)."
        },
        {
            pergunta: "Em qual surat é mencionado que Issa (Jesus) não foi morto nem crucificado?",
            opcoes: ["Al-Baqara", "Ál-Imran", "An-Nissa", "Muhammad"],
            correta: 2,
            explicacao: "Surat An-Nissa (cap. 4:v157), onde Allah esclarece que a eles pareceu que o tinham feito, mas Deus o elevou."
        },
        {
            pergunta: "Qual é o outro nome de Meca mencionado no Alcorão?",
            opcoes: ["Quiblat", "Madina", "Aqsa", "Bakka"],
            correta: 3,
            explicacao: "Bakka. 'A primeira Casa erigida para o gênero humano é a de Bakka' (Alcorão 3:96)."
        },
        {
            pergunta: "No Alcorão, qual é a cidade onde desceram os dois anjos Harut e Marut?",
            opcoes: ["Babilônia", "Madina", "Al-Ahqaf", "Irã"],
            correta: 0,
            explicacao: "Babilônia. Eles foram enviados como uma prova para o povo (Alcorão 2:102)."
        },
        {
            pergunta: "Quem disse pouco antes de se afogar: 'Acredito que não existe outra divindade além daquela em que os Banu Israel acreditaram'?",
            opcoes: ["Nabucodonosor I", "Faraó", "Nabucodonosor II", "César"],
            correta: 1,
            explicacao: "O Faraó, no momento de seu afogamento, tentou declarar fé, mas já era tarde."
        },
        {
            pergunta: "Quem disse: 'pois eu não tive autoridade alguma sobre vós, a não ser convocar-vos, e vós me atendestes'?",
            opcoes: ["Anjo da Morte", "Satanás", "Djibril", "Izrafil"],
            correta: 1,
            explicacao: "Satanás (Iblis) dirá isso no dia do Juízo Final conforme o Alcorão (14:22)."
        },
        {
            pergunta: "Quantos anos as pessoas da caverna (Ashab al-Kahf) dormiram?",
            opcoes: ["8 anos", "1 ano", "308 anos", "309 anos"],
            correta: 3,
            explicacao: "Eles permaneceram na caverna por trezentos e nove anos (Alcorão 18:25)."
        },
        {
            pergunta: "Quem é o Imran no Alcorão?",
            opcoes: ["Pai de Mussa (A.S)", "Pai de Maryam (A.S)", "Primo de Zakaria (A.S)", "Sobrinho de Yahia (A.S)"],
            correta: 1,
            explicacao: "Imran é o pai de Maria (Maryam). O Alcorão dedica o capítulo 3 (Al-Imran) à sua família."
        },
        {
            pergunta: "Qual é o nome do Surat que contém a palavra 'Allah' em todos os seus versículos?",
            opcoes: ["Al-Mulk", "Al-Ikhlass", "An-Nass", "Al-Mujadalat"],
            correta: 3,
            explicacao: "Surat Al-Mujadalat (capítulo 58)."
        },
        {
            pergunta: "Allah mencionou 18 de Seus mensageiros no mesmo surat. Qual é?",
            opcoes: ["Al-An'am", "Al-kahf", "An-Najm", "Al-Anbiya"],
            correta: 0,
            explicacao: "Surat Al-An'am (6:74-86)."
        },
        {
            pergunta: "Quantos surats começam com as letras destacadas 'Ha Mim'?",
            opcoes: ["2", "3", "7", "12"],
            correta: 2,
            explicacao: "São 7 suratas (do capítulo 40 ao 46), conhecidas como Hawamim."
        },
        {
            pergunta: "Qual surat contém a Basmala (Bismillah) duas vezes?",
            opcoes: ["Al-Qamar", "An-Naml", "Al-Sajdatt", "Al-Mumtahanat"],
            correta: 1,
            explicacao: "An-Naml (cap. 27). Uma no início e outra no versículo 30 (carta de Salomão)."
        },
        {
            pergunta: "Em qual surata é dito: 'Ignora, acaso, que Deus o observa?'",
            opcoes: ["Al-Qamar", "Al-Alaq", "Al Layl", "Al-Aala"],
            correta: 1,
            explicacao: "Surat Al-Alaq (96:14)."
        },
        {
            pergunta: "Logo após o parto, o que Allah recomendou que Maryam comesse?",
            opcoes: ["Nozes", "Tâmaras", "Sementes de Nigella"],
            correta: 1,
            explicacao: "Tâmaras maduras e frescas, sacudindo o tronco da tamareira (19:25)."
        },
        {
            pergunta: "O Alcorão também é chamado de 'Al-Huda'. O que este termo significa?",
            opcoes: ["Misericórdia", "A Paz", "Louvor", "A Orientação"],
            correta: 3,
            explicacao: "Significa 'A Orientação' ou 'O Guia' para os piedosos (2:2)."
        },
        {
            pergunta: "Qual é o termo no Alcorão que está quase sempre associado ao Salat (oração)?",
            opcoes: ["As-saum", "Az-zakat", "Tawhid", "Al-hajj"],
            correta: 1,
            explicacao: "O Zakat (esmola). A conexão entre os dois indica a importância social e espiritual no Islã."
        },
        {
            pergunta: "A quem o Faraó pediu para construir uma torre para subir ao céu?",
            opcoes: ["Moussa (A.S)", "Qarun", "Haman", "Harun (A.S)"],
            correta: 2,
            explicacao: "Haman. O Faraó pediu que ele fabricasse tijolos para construir o monumento (28:38)."
        },
        {
            pergunta: "Em que montanha a arca de Nuh (A.S) encalhou?",
            opcoes: ["Suafa", "Monte Tur", "Judi", "Marwa"],
            correta: 2,
            explicacao: "No Monte Al-Judi (Alcorão 11:44)."
        },
        {
            pergunta: "Como o povo de Ad foi destruído por Allah?",
            opcoes: ["Um vento furioso", "Um terremoto", "Uma cheia", "Um choro terrível"],
            correta: 0,
            explicacao: "Foram exterminados por um furioso furacão que durou sete noites e oito dias (69:6-7)."
        }
    ]
};

// =============================================
// FUNÇÕES PRINCIPAIS
// =============================================

function comecarNivel(nivel) {
    nivelAtual = nivel;
    
    // Copia as perguntas do nível escolhido
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

    // Mostra explicação se existir
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
    if (percentual >= 80) status = "Excelente! MashaAllah";
    else if (percentual >= 60) status = "Bom";
    else if (percentual >= 40) status = "Razoável";

    document.getElementById("status-final").textContent = status;

    // Animação do círculo
    animarCirculo(percentual);

    // Mostra botão próximo nível só se ≥ 80% e não for avançado
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