// multiplayer.js - Versão corrigida (limpeza de classes de feedback)

const gameState = {
    player1: { name: 'Jogador 1', score: 0, correct: 0, wrong: 0, currentQuestion: 0, usedQuestions: new Set(), queue: [] },
    player2: { name: 'Jogador 2', score: 0, correct: 0, wrong: 0, currentQuestion: 0, usedQuestions: new Set(), queue: [] },
    gameMode: 'questions',
    totalQuestions: 10,
    gameTime: 3 * 60, // em segundos
    timeLeft: 0,
    questions: [],
    gameActive: false,
    timerInterval: null,
    category: 'all',
    answeringLock: false
};

const questionBank = [
 
    { question: "Quantos surats existem no Alcorão?", answers: ["30 surats", "114 surats", "121 surats", "100 suratas"], correct: 1, category: "quran" },
    { question: "Em quantos Juzes (partes) o Alcorão foi dividido?", answers: ["30", "26", "28", "15"], correct: 0, category: "quran" },
    { question: "O nome do profeta que o nome da mãe foi mencionado no Alcorão:", answers: ["Issa (A.S)", "Ibrahim (A.S)", "Yaakub (A.S)", "Muhammadd (S.A.W)"], correct: 0, category: "quran" },
    { question: "Qual foi o Primeiro surat do Alcorão a ser revelado?", answers: ["Maryam", "An-nass", "At tawbah", "Al'Alaq"], correct: 3, category: "quran" },
    { question: "Qual foi o Primeiro surat do Alcorão a ser revelado em Maddinah?", answers: ["Al'Alaq", "Ar-Rahman", "Al-fatiha", "Al-kawthar"], correct: 2, category: "quran" },
    { question: "Qual é o significado da palavra Fatiha?", answers: ["Paz", "Abertura", "Sinceridade", "Harmonia"], correct: 1, category: "quran" },
    { question: "Onde ocorreu a primeira revelação do Alcorão?", answers: ["Caverna de Badr", "Caverna Hira"], correct: 1, category: "quran" },
    { question: "Em qual das cidades a Caverna Hira está localizada?", answers: ["Makka", "Madinah"], correct: 0, category: "quran" },
    { question: "O dia que a primeira revelação foi feita para Muhammad (S.A.W):", answers: ["segunda-Feira", "Terça-Feira", "Domingo", "Sexta-Feira"], correct: 3, category: "quran" },
    { question: "O Alcorão contém factos científicos?", answers: ["Verdade", "Falso"], correct: 0, category: "quran" },
    { question: "Qual é o último surat do Alcorão?", answers: ["Al-fatiha", "An-nass", "An-nahl", "Ya-sin"], correct: 1, category: "quran" },
    { question: "Qual é o maior surat do Alcorão?", answers: ["An-Burooj", "An-Nahl", "Al-Baqara", "Al-Qalam"], correct: 2, category: "quran" },
    { question: "Qual é o surat mais curto do Alcorão?", answers: ["Al-fatiha", "An-nass", "Al-kawthar", "Al-ikhlass"], correct: 2, category: "quran" },
    { question: "Qual é o surat conhecido por coração do Alcorão?", answers: ["An-Naml", "An-nass", "Al-kawthar", "Ya-sin"], correct: 3, category: "quran" },
    { question: "Qual é o surat conhecido por Uruss (noiva) do Alcorão?", answers: ["An-Naml", "Al-Balad", "Ar-Rahman", "Ya-sin"], correct: 2, category: "quran" },
    { question: "Qual é o surat que possui o versículo mais longo do Alcorão?", answers: ["Al-Baqara", "Al-Furqan", "Al-Rahman", "Ya-sin"], correct: 0, category: "quran" },
    { question: "Qual é o surat conhecido por Ummul Kitab (mãe do livro)?", answers: ["Al-Waquiah", "Al-Fatiha", "Az-Zumar", "Ya-sin"], correct: 1, category: "quran" },
    { question: "Quantas vezes o nome do profeta Muhammad (S.A.W) foi mencionado no Alcorão?", answers: ["4", "6", "7", "9"], correct: 0, category: "quran" },
    { question: "Quantos versículos foram revelados na primeira revelação (wahi)?", answers: ["7", "9", "5", "6"], correct: 2, category: "quran" },
    { question: "Quantos surates têm nomes de Animais como título?", answers: ["2", "3", "1", "5"], correct: 0, category: "quran" },
    { question: "Qual surat é recomendado para ler na sexta-feira?", answers: ["Al-kahf", "As-Shamss", "Al-lail", "At-tur"], correct: 0, category: "quran" },
    { question: "Quantos surates têm nomes de Insectos como título?", answers: ["2", "7", "6", "3"], correct: 3, category: "quran" },
    { question: "Há algum surat com nome de um fruto?", answers: ["Verdade", "Falso"], correct: 0, category: "quran" },
    { question: "Qual foi o primeiro versículo que foi revelado ao profeta (S.A.W)?", answers: ["Diga, Ele Allah é único", "Louvado seja Deus, Senhor do Universo", "Que tu és dos mensageiros", "Lê, em nome do Teu Senhor que criou"], correct: 3, category: "quran" },

    // Nível Intermediário
    { question: "O Alcorão foi revelado no Lailatul-Qadr (Noite de Decreto)?", answers: ["Verdade", "Falso"], correct: 0, category: "quran" },
    { question: "Em que forma foi revelado o Alcorão?", answers: ["Era revelado um ou mais versículos", "Era revelado um surat Inteiro", "As duas opções estão corretas"], correct: 2, category: "quran" },
    { question: "Quantos escrivãos haviam para redigirem o Alcorão?", answers: ["5", "7", "3", "8"], correct: 2, category: "quran" },
    { question: "Quanto tempo durou a revelação do Alcorão?", answers: ["27 anos", "18 anos", "29 anos", "23 anos"], correct: 3, category: "quran" },
    { question: "Em termos de período de revelação, quantos tipos de versículos existem?", answers: ["3", "2", "4", "Apenas 1"], correct: 1, category: "quran" },
    { question: "Em termos de conteúdo, quais são os tipos de versículos no Alcorão?", answers: ["7", "3", "2", "1"], correct: 2, category: "quran" },
    { question: "Quantos profetas foram mencionados no Alcorão?", answers: ["36", "27", "25", "91"], correct: 2, category: "quran" },
    { question: "Existem surates que levam nomes dos profetas?", answers: ["Verdade", "Falso"], correct: 0, category: "quran" },
    { question: "Qual foi o alfabeto (letra) mais utilizado no Alcorão?", answers: ["Suad (ص)", "Baun (ب)", "Alif (ا)", "Lam (ل)"], correct: 2, category: "quran" },
    { question: "Quanto tempo durou a revelação do Alcorão em Madina?", answers: ["10 anos", "11 anos", "23 anos", "12 anos"], correct: 0, category: "quran" },
    { question: "Quem é o profeta mais citado no Alcorão?", answers: ["Mussa (A.S)", "Issa (A.S)", "Ibrahim (A.S)", "Muhammad (S.A.W)"], correct: 0, category: "quran" },
    { question: "No Alcorão, quantos anjos guardam o inferno?", answers: ["18", "21", "19", "70.000"], correct: 2, category: "quran" },
    { question: "Qual surat não contém a letra 'mim'?", answers: ["Al-kawthar", "An-Nass", "Al-Burooj", "Al-Ikhlass"], correct: 0, category: "quran" },
    { question: "No Alcorão, onde está localizada a árvore de Zaqqum?", answers: ["No Paraíso", "No inferno", "No Monte Sinai", "Em Makka"], correct: 1, category: "quran" },
    { question: "Qual surat fala de um rio do paraíso?", answers: ["Al-kawthar", "An-Nass", "Al-Burooj", "Al-Ikhlass"], correct: 0, category: "quran" },
    { question: "Qual foi o último versículo revelado no Alcorão?", answers: ["Diga, Ele Allah é único", "E temei o dia em que retornareis a Allah", "Que tu és dos mensageiros", "Lê, em nome do Teu Senhor"], correct: 1, category: "quran" },
    { question: "Quantos Sujdats (prostrações) há no Alcorão?", answers: ["16", "14", "11", "10"], correct: 1, category: "quran" },
    { question: "Qual é o nome do Dia da Ressurreição mencionado no Alcorão?", answers: ["Al-Ba'çu", "Yaumul al-akhir", "As-sa'at", "Todos eles"], correct: 3, category: "quran" },
    { question: "Qual é o surat que contém dois sujdats (prostrações)?", answers: ["Al-Mulk", "Ar-rum", "Al-Alaq", "Al-Hajj"], correct: 3, category: "quran" },
    { question: "Quantos 'Basmallahs' existem no Alcorão?", answers: ["100", "114", "112", "113"], correct: 1, category: "quran" },
    { question: "Quantos versículos existem no Surat Al-Fatiha?", answers: ["9", "6", "7", "10"], correct: 2, category: "quran" },
    { question: "O Alcorão foi revelado originalmente em qual língua?", answers: ["Hebraico", "Árabe", "Aramaico", "Persa"], correct: 1, category: "quran" },
    { question: "Quais surates começam com 'Al-Hamdulillah'?", answers: ["Al-Fatiha, Al-An'ami, Al-Kahf, As-sabai, Al-Fátuir", "Al-Fatiha, Al-Kahf, Al-kawthar, Al-Máida", "Todas opções estão certas", "Nenhum deles"], correct: 0, category: "quran" },
    { question: "Quais animais foram enviados para proteger a Kaaba do exército de Abraha?", answers: ["Corvos", "Elefantes", "Pássaros", "Leões"], correct: 2, category: "quran" },
    { question: "O Alcorão conta a história de todos os profetas, sem exceção?", answers: ["Verdade", "Falso"], correct: 1, category: "quran" },

    // Nível Avançado
    { question: "Em qual surat se encontra o versículo: 'O ser humano certamente está em perdição'?", answers: ["Al-Asr", "Ar-Humazat", "Al-Lail", "Al-Quraish"], correct: 0, category: "quran" },
    { question: "Quem disse: 'Meu Senhor! Construa-me, Contigo, uma casa no Paraíso'?", answers: ["Maryam", "Ássia", "Khadijat", "Fátima"], correct: 1, category: "quran" },
    { question: "Em qual surat é mencionado que Issa (Jesus) não foi morto nem crucificado?", answers: ["Al-Baqara", "Ál-Imran", "An-Nissa", "Muhammad"], correct: 2, category: "quran" },
    { question: "Qual é o outro nome de Meca mencionado no Alcorão?", answers: ["Quiblat", "Madina", "Aqsa", "Bakka"], correct: 3, category: "quran" },
    { question: "No Alcorão, qual é a cidade onde desceram os dois anjos Harut e Marut?", answers: ["Babilônia", "Madina", "Al-Ahqaf", "Irã"], correct: 0, category: "quran" },
    { question: "Quem disse pouco antes de se afogar: 'Acredito que não existe outra divindade além daquela em que os Banu Israel acreditaram'?", answers: ["Nabucodonosor I", "Faraó", "Nabucodonosor II", "César"], correct: 1, category: "quran" },
    { question: "Quem disse: 'pois eu não tive autoridade alguma sobre vós, a não ser convocar-vos, e vós me atendestes'?", answers: ["Anjo da Morte", "Satanás", "Djibril", "Izrafil"], correct: 1, category: "quran" },
    { question: "Quantos anos as pessoas da caverna (Ashab al-Kahf) dormiram?", answers: ["8 anos", "1 ano", "308 anos", "309 anos"], correct: 3, category: "quran" },
    { question: "Quem é o Imran no Alcorão?", answers: ["Pai de Mussa (A.S)", "Pai de Maryam (A.S)", "Primo de Zakaria (A.S)", "Sobrinho de Yahia (A.S)"], correct: 1, category: "quran" },
    { question: "Qual é o nome do Surat que contém a palavra 'Allah' em todos os seus versículos?", answers: ["Al-Mulk", "Al-Ikhlass", "An-Nass", "Al-Mujadalat"], correct: 3, category: "quran" },
    { question: "Allah mencionou 18 de Seus mensageiros no mesmo surat. Qual é?", answers: ["Al-An'am", "Al-kahf", "An-Najm", "Al-Anbiya"], correct: 0, category: "quran" },
    { question: "Quantos surats começam com as letras destacadas 'Ha Mim'?", answers: ["2", "3", "7", "12"], correct: 2, category: "quran" },
    { question: "Qual surat contém a Basmala (Bismillah) duas vezes?", answers: ["Al-Qamar", "An-Naml", "Al-Sajdatt", "Al-Mumtahanat"], correct: 1, category: "quran" },
    { question: "Em qual surata é dito: 'Ignora, acaso, que Deus o observa?'", answers: ["Al-Qamar", "Al-Alaq", "Al Layl", "Al-Aala"], correct: 1, category: "quran" },
    { question: "Logo após o parto, o que Allah recomendou que Maryam comesse?", answers: ["Nozes", "Tâmaras", "Sementes de Nigella"], correct: 1, category: "quran" },
    { question: "O Alcorão também é chamado de 'Al-Huda'. O que este termo significa?", answers: ["Misericórdia", "A Paz", "Louvor", "A Orientação"], correct: 3, category: "quran" },
    { question: "Qual é o termo no Alcorão que está quase sempre associado ao Salat (oração)?", answers: ["As-saum", "Az-zakat", "Tawhid", "Al-hajj"], correct: 1, category: "quran" },
    { question: "A quem o Faraó pediu para construir uma torre para subir ao céu?", answers: ["Moussa (A.S)", "Qarun", "Haman", "Harun (A.S)"], correct: 2, category: "quran" },
    { question: "Em que montanha a arca de Nuh (A.S) encalhou?", answers: ["Suafa", "Monte Tur", "Judi", "Marwa"], correct: 2, category: "quran" },
    { question: "Como o povo de Ad foi destruído por Allah?", answers: ["Um vento furioso", "Um terremoto", "Uma cheia", "Um choro terrível"], correct: 0, category: "quran" },

    // ========== PROFETA MUHAMMAD ==========
    // Nível Iniciante
    { question: "Em que ano o profeta Muhammad (S.A.W) nasceu?", answers: ["576", "550", "570", "572"], correct: 2, category: "prophet" },
    { question: "Qual é o nome do pai do profeta Muhammad (S.A.W)?", answers: ["Abdul Qassim", "Abdullah", "Abdul Mutualib", "Nenhum deles"], correct: 1, category: "prophet" },
    { question: "Quem era a babá do profeta Muhammad (S.A.W)?", answers: ["Halima Sa'diyya", "Arwa al-Sulayhi", "Rabia al Adawiyya", "Zaynab Nefzaouia"], correct: 0, category: "prophet" },
    { question: "A mãe do Profeta (S.A.W) chamava-se?", answers: ["Halima", "Amina", "Assia", "Khadijat"], correct: 1, category: "prophet" },
    { question: "Qual era o apelido do Profeta antes de receber a revelação do Alcorão?", answers: ["O confiável", "Bom Homem"], correct: 0, category: "prophet" },
    { question: "O Profeta (S.A.W) foi enviado apenas para os árabes?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "O Profeta (S.A.W) foi violento?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "Quantos anos tinha o Profeta quando sua mãe faleceu?", answers: ["4", "3", "6", "7"], correct: 2, category: "prophet" },
    { question: "O Profeta Muhammad (S.A.W) morreu com que idade?", answers: ["56 anos", "48 anos", "76 anos", "63 anos"], correct: 3, category: "prophet" },
    { question: "Muhammad (S.A.W) é o último dos Profetas?", answers: ["Verdade", "Falso"], correct: 0, category: "prophet" },
    { question: "O Profeta (S.A.W) tinha irmãos e irmãs?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "Qual era o nome do primeiro filho do Profeta (S.A.W)?", answers: ["Qassim", "Abdullah", "Ibrahim", "Fátima"], correct: 0, category: "prophet" },
    { question: "Com quantos anos o profeta (S.A.W) recebeu a profecia?", answers: ["30", "40", "50", "60"], correct: 1, category: "prophet" },
    { question: "Qual dos filhos do profeta (S.A.W) não foi de Khadija (R.A)?", answers: ["Qassim", "Ibrahim", "Fátima", "Todas foram de Khadija"], correct: 1, category: "prophet" },
    { question: "Qual era o nome da primeira esposa do Profeta (S.A.W)?", answers: ["Aisha", "Hafsa", "Maryam", "Khadijat"], correct: 3, category: "prophet" },
    { question: "Qual anjo ensinou a Muhammad (S.A.W) o Alcorão?", answers: ["Mikail", "Djibril", "Malik", "Issrafil"], correct: 1, category: "prophet" },
    { question: "Em que dias o Profeta (S.A.W) costumava jejuar voluntariamente?", answers: ["Segundas e Quintas", "Segundas e Terças", "Quartas e Sextas", "Apenas Quintas"], correct: 0, category: "prophet" },
    { question: "Como se chamava o avô do Profeta (S.A.W)?", answers: ["Abu Tualib", "Abdullah", "Abdul Mutualib", "Abbas"], correct: 2, category: "prophet" },
    { question: "Qual era o nome da avó paterna do Profeta (S.A.W)?", answers: ["Haleema", "Sakeena", "Fátima bint Omar", "Nenhuma"], correct: 2, category: "prophet" },
    { question: "Em qual mês Djibril visitou o profeta na caverna de Hira?", answers: ["Ramadan", "Rajab", "Shaban", "Muharram"], correct: 0, category: "prophet" },
    { question: "Com que idade o Profeta Muhammad (S.A.W) casou-se com Khadijah (R.A)?", answers: ["25 anos", "30 anos", "35 anos", "40 anos"], correct: 0, category: "prophet" },
    { question: "Por que o Profeta Muhammad ﷺ migrou para Medina?", answers: ["Comércio", "Fugir da perseguição", "Visitar família", "Ensinar"], correct: 1, category: "prophet" },
    { question: "Onde faleceu o pai do Profeta?", answers: ["Meca", "Yathrib (Medina)", "Taif", "Viagem à Síria"], correct: 1, category: "prophet" },
    { question: "Qual era a ocupação do Profeta até os 40 anos?", answers: ["Professor", "Pastor e Comerciante", "Soldado", "Fazendeiro"], correct: 1, category: "prophet" },
    { question: "Qual foi a primeira forma de revelação recebida?", answers: ["Sonhos verdadeiros", "Livro escrito", "Sinais", "Mensageiros"], correct: 0, category: "prophet" },

    // ========== SUAHABAS / COMPANIONS ==========
    { question: "Quem não está entre os 10 prometidos ao Paraíso?", answers: ["Tal'ha (R.A)", "Zubeyr (R.A)", "Abu Obayda (R.A)", "Abu Jahal"], correct: 3, category: "companions" },
    { question: "Após minha conversão, os muçulmanos puderam realizar orações abertamente perto da Caaba. Quem sou eu?", answers: ["Abu Bakr", "Hamza", "Omar", "Abu Sofian"], correct: 2, category: "companions" },
    { question: "Qual companheiro do Profeta dormiu na cama do Profeta na noite da Hégira para enganar os coraixitas?", answers: ["Ali", "Omar", "Otman", "Abu Bakr"], correct: 0, category: "companions" },
    { question: "Qual companheiro disse: 'Por que adoramos essas pedras que nada nos trazem?'", answers: ["Abu Bakr Omar (R.A)", "Omar (R.A)", "Otman (R.A)", "Ali (R.A)"], correct: 1, category: "companions" },
    { question: "Qual companheiro foi o primeiro muezim do Islã?", answers: ["Bilal", "Ibn Mas'ud", "Zubayr", "Tal'ha"], correct: 0, category: "companions" },
    { question: "Quem foi Hamza, o Leão de Alá, para o Profeta?", answers: ["Seu irmão", "Seu primo", "Seu sobrinho", "Seu tio"], correct: 3, category: "companions" },
    { question: "Quem era o companheiro que veio da Pérsia?", answers: ["Outro companheiro", "ObeYDa", "Salman", "Tal'ha"], correct: 2, category: "companions" },
    { question: "Hafsa é filha de...?", answers: ["Abu Bakr", "Omar", "Ali", "Otman"], correct: 1, category: "companions" },
    { question: "Minha filha Hafsa foi uma das esposas do Profeta. Quem sou eu?", answers: ["Abu Bakr", "Omar", "Ali", "Otman"], correct: 1, category: "companions" },
    { question: "Qual companheiro era conhecido por sua gentileza e humildade a ponto de o Profeta lhe dar o apelido de 'o homem gentil desta comunidade'?", answers: ["Abu Bakr", "Omar", "Otman", "Ali"], correct: 2, category: "companions" },
    { question: "Quem foi o primeiro califa do Islã guiado corretamente?", answers: ["Abu Bakr", "Omar", "Otman", "Ali"], correct: 0, category: "companions" },
    { question: "Os netos do Profeta, filhos de Ali e Fátima, são", answers: ["Maomé e Mahmoud", "Hassan e Mohsin", "Al Hassan e Al Hussein", "Khalid e Khowaylid"], correct: 2, category: "companions" },
    { question: "Quem é Ali, o 4º califa bem guiado em relação ao Profeta?", answers: ["Seu tio", "Seu primo", "Seu irmão", "Seu sobrinho"], correct: 1, category: "companions" },
    { question: "Qual companheiro recebeu o apelido de 'O Leão de Alá' e morreu como mártir na Batalha de Uhud?", answers: ["Tal'a", "Zubayr", "Hamza", "Al Hussein"], correct: 2, category: "companions" },
    { question: "Qual companheiro foi sepultado com as roupas ensanguentadas após ser martirizado na Batalha de Uhud?", answers: ["Hamza", "Abu Hurayra", "Tal'ha", "Zubayr"], correct: 0, category: "companions" },
    { question: "Quem foi o segundo califa do Islã guiado corretamente?", answers: ["Abu Bakr", "Omar", "Otman", "Ali"], correct: 1, category: "companions" },
    { question: "A ordem dos Califas Bem-Guiados é Abu Bakr, Umar, Ali e Uthman?", answers: ["Verdadeiro", "Falso"], correct: 1, category: "companions" },
    { question: "A primeira pessoa a acreditar no Islã foi uma mulher?", answers: ["Verdadeiro", "Falso"], correct: 0, category: "companions" },
    { question: "Quem era o primo do Profeta?", answers: ["Abdullah Ibn Omar", "Abdallah Ibn Mas'oud", "Abdallah Ibn Ommi Maktum", "Abdullah Ibn Abbas"], correct: 3, category: "companions" },
    { question: "Sou primo do Profeta e o primeiro filho a se converter ao Islã, quem sou eu?", answers: ["Zayd Ibn Haritha", "Anas Ibn Mali", "Ali Ibn Abu Talib", "Abdullah Ibn Abbas"], correct: 2, category: "companions" },

    // ========== MUHAMMAD / PROPHET (ADICIONAIS) ==========
    { question: "Em que ano o profeta Muhammad (S.A.W) nasceu?", answers: ["576", "550", "570", "572"], correct: 2, category: "prophet" },
    { question: "Qual é o nome do pai do profeta Muhammad (S.A.W)?", answers: ["Abdul Qassim", "Abdullah", "Abdul Mutualib", "Nenhum deles"], correct: 1, category: "prophet" },
    { question: "Quem era a babá do profeta Muhammad (S.A.W)?", answers: ["Halima Sa'diyya", "Arwa al-Sulayhi", "Rabia al Adawiyya", "Zaynab Nefzaouia"], correct: 0, category: "prophet" },
    { question: "A mãe do Profeta (S.A.W) chamava-se?", answers: ["Halima", "Amina", "Assia", "Khadijat"], correct: 1, category: "prophet" },
    { question: "Qual era o apelido do Profeta antes de receber a revelação do Alcorão?", answers: ["O confiável", "Bom Homem"], correct: 0, category: "prophet" },
    { question: "O Profeta (S.A.W) foi enviado apenas para os árabes?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "O Profeta (S.A.W) foi violento?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "Quantos anos tinha o Profeta quando sua mãe faleceu?", answers: ["4", "3", "6", "7"], correct: 2, category: "prophet" },
    { question: "O Profeta Muhammad (S.A.W) morreu com que idade?", answers: ["56 anos", "48 anos", "76 anos", "63 anos"], correct: 3, category: "prophet" },
    { question: "Muhammad (S.A.W) é o último dos Profetas?", answers: ["Verdade", "Falso"], correct: 0, category: "prophet" },
    { question: "O Profeta (S.A.W) tinha irmãos e irmãs?", answers: ["Verdade", "Falso"], correct: 1, category: "prophet" },
    { question: "Qual era o nome do primeiro filho do Profeta (S.A.W)?", answers: ["Qassim", "Abdullah", "Ibrahim", "Fátima"], correct: 0, category: "prophet" },
    { question: "Com quantos anos o profeta (S.A.W) recebeu a profecia?", answers: ["30", "40", "50", "60"], correct: 1, category: "prophet" },
    { question: "Qual dos filhos do profeta (S.A.W) não foi de Khadija (R.A)?", answers: ["Qassim", "Ibrahim", "Fátima", "Todas foram de Khadija"], correct: 1, category: "prophet" },
    { question: "Qual era o nome da primeira esposa do Profeta (S.A.W)?", answers: ["Aisha", "Hafsa", "Maryam", "Khadijat"], correct: 3, category: "prophet" },
    { question: "Qual anjo ensinou a Muhammad (S.A.W) o Alcorão?", answers: ["Mikail", "Djibril", "Malik", "Issrafil"], correct: 1, category: "prophet" },
    { question: "Em que dias o Profeta (S.A.W) costumava jejuar voluntariamente?", answers: ["Segundas e Quintas", "Segundas e Terças", "Quartas e Sextas", "Apenas Quintas"], correct: 0, category: "prophet" },
    { question: "Como se chamava o avô do Profeta (S.A.W)?", answers: ["Abu Tualib", "Abdullah", "Abdul Mutualib", "Abbas"], correct: 2, category: "prophet" },
    { question: "Qual era o nome da avó paterna do Profeta (S.A.W)?", answers: ["Haleema", "Sakeena", "Fátima bint Omar", "Nenhuma"], correct: 2, category: "prophet" },
    { question: "Em qual mês Djibril visitou o profeta na caverna de Hira?", answers: ["Ramadan", "Rajab", "Shaban", "Muharram"], correct: 0, category: "prophet" },
    { question: "Com que idade o Profeta Muhammad (S.A.W) casou-se com Khadijah (R.A)?", answers: ["25 anos", "30 anos", "35 anos", "40 anos"], correct: 0, category: "prophet" },
    { question: "Por que o Profeta Muhammad migrou para Medina?", answers: ["Comércio", "Fugir da perseguição", "Visitar família", "Ensinar"], correct: 1, category: "prophet" },
    { question: "Onde faleceu o pai do Profeta?", answers: ["Meca", "Yathrib (Medina)", "Taif", "Viagem à Síria"], correct: 1, category: "prophet" },
    { question: "Qual era a ocupação do Profeta até os 40 anos?", answers: ["Professor", "Pastor e Comerciante", "Soldado", "Fazendeiro"], correct: 1, category: "prophet" },
    { question: "Qual foi a primeira forma de revelação recebida?", answers: ["Sonhos verdadeiros", "Livro escrito", "Sinais", "Mensageiros"], correct: 0, category: "prophet" }

];

// Funções auxiliares
function toggleGameMode() {
    const mode = document.getElementById('game-mode').value;
    document.getElementById('questions-group').style.display = mode === 'questions' ? 'block' : 'none';
    document.getElementById('time-group').style.display = mode === 'time' ? 'block' : 'none';
}

function mostrarTela(telaId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(telaId).classList.add('active');
}

function embaralharArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getCategoryName(cat) {
    return { quran: 'Alcorão', prophet: 'Profeta Muhammad', companions: 'Companheiros', general: 'Geral', mixed: 'Misturado', all: 'Todas' }[cat] || cat;
}

function atualizarPlacar() {
    document.getElementById('score-p1').textContent = `${gameState.player1.name}: ${gameState.player1.score} pts`;
    document.getElementById('score-p2').textContent = `${gameState.player2.name}: ${gameState.player2.score} pts`;
}

function atualizarTimerDisplay() {
    if (gameState.gameMode !== 'time') return;
    const min = Math.floor(gameState.timeLeft / 60);
    const sec = gameState.timeLeft % 60;
    // document.getElementById('game-timer').textContent = `${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

// ============================================
// INICIAR JOGO
// ============================================
function iniciarJogo() {
    gameState.player1.name = document.getElementById('player1').value.trim() || 'Jogador 1';
    gameState.player2.name = document.getElementById('player2').value.trim() || 'Jogador 2';
    gameState.gameMode = document.getElementById('game-mode').value;
    gameState.category = document.getElementById('category').value;

    if (gameState.gameMode === 'questions') {
        gameState.totalQuestions = parseInt(document.getElementById('num-questions').value);
    } else {
        gameState.gameTime = parseInt(document.getElementById('game-time').value) * 60;
        gameState.timeLeft = gameState.gameTime;
    }

    // Reset completo
    gameState.player1.score = gameState.player1.correct = gameState.player1.wrong = gameState.player1.currentQuestion = 0;
    gameState.player2.score = gameState.player2.correct = gameState.player2.wrong = gameState.player2.currentQuestion = 0;
    gameState.player1.usedQuestions.clear();
    gameState.player2.usedQuestions.clear();

    let availableQuestions = gameState.category === 'all' 
        ? [...questionBank] 
        : questionBank.filter(q => q.category === gameState.category);

    // Em modo 'questions' criamos filas alternadas para cada jogador
    if (gameState.gameMode === 'questions') {
        const shuffled = embaralharArray(availableQuestions);
        gameState.player1.queue = [];
        gameState.player2.queue = [];
        for (let i = 0; i < shuffled.length; i++) {
            if (i % 2 === 0) gameState.player1.queue.push(shuffled[i]);
            else gameState.player2.queue.push(shuffled[i]);
        }
        // gameState.questions mantém vazio ou pool não usado para este modo
        gameState.questions = [];
    } else {
        // em modo 'time' usamos pool global embaralhado
        gameState.questions = embaralharArray(availableQuestions);
    }

    gameState.gameActive = true;
    gameState.answeringLock = false;

    document.getElementById('player1-title').textContent = gameState.player1.name;
    document.getElementById('player2-title').textContent = gameState.player2.name;

    atualizarPlacar();

    mostrarTela('game-screen');

    if (gameState.gameMode === 'time') {
        gameState.timerInterval = setInterval(() => {
            if (!gameState.gameActive) return;
            gameState.timeLeft--;
            atualizarTimerDisplay();
            if (gameState.timeLeft <= 0) finalizarJogo();
        }, 1000);
    }

    mostrarQuestaoParaJogador(1);
    mostrarQuestaoParaJogador(2);
}

// ============================================
// MOSTRAR PRÓXIMA PERGUNTA
// ============================================
function mostrarQuestaoParaJogador(playerNum) {
    const player = gameState[`player${playerNum}`];

    if (gameState.gameMode === 'questions' && player.currentQuestion >= gameState.totalQuestions) {
        if (gameState.player1.currentQuestion >= gameState.totalQuestions &&
            gameState.player2.currentQuestion >= gameState.totalQuestions) {
            finalizarJogo();
        }
        return;
    }

    let questao = null;

    if (gameState.gameMode === 'questions') {
        // Perguntas pré-alocadas por jogador (filas alternadas)
        if (player.queue && player.currentQuestion < player.queue.length) {
            questao = player.queue[player.currentQuestion];
            // marca como usada apenas para consistência (não é necessário para evitar duplicatas entre filas)
            player.usedQuestions.add(questao.question);
        } else {
            player.currentQuestion = gameState.totalQuestions;
            if (gameState.player1.currentQuestion >= gameState.totalQuestions &&
                gameState.player2.currentQuestion >= gameState.totalQuestions) {
                finalizarJogo();
            }
            return;
        }
    } else {
        for (const q of gameState.questions) {
            if (!player.usedQuestions.has(q.question)) {
                questao = q;
                break;
            }
        }

        if (!questao) {
            player.currentQuestion = gameState.totalQuestions;
            if (gameState.gameMode === 'questions' &&
                gameState.player1.currentQuestion >= gameState.totalQuestions &&
                gameState.player2.currentQuestion >= gameState.totalQuestions) {
                finalizarJogo();
            }
            return;
        }

        player.usedQuestions.add(questao.question);
    }

    // Atualiza os textos
    document.getElementById(`player${playerNum}-question`).textContent = questao.question;
    document.getElementById(`player${playerNum}-category`).textContent = getCategoryName(questao.category);
    
    document.getElementById(`player${playerNum}-counter`).textContent = 
        gameState.gameMode === 'questions'
            ? `#${player.currentQuestion + 1}/${gameState.totalQuestions}`
            : `Pergunta ${player.currentQuestion + 1}`;

    // Container das respostas
    const container = document.getElementById(`player${playerNum}-answers`);
    
    // Limpeza completa - muito importante!
    container.innerHTML = '';

    const respostas = embaralharArray([...questao.answers]);
    const indiceCorreto = respostas.indexOf(questao.answers[questao.correct]);

    respostas.forEach((res, idx) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';  // ← só essa classe! Nada de correct/incorrect aqui
        btn.textContent = res;

        btn.onclick = () => {
            if (gameState.answeringLock) return;
            gameState.answeringLock = true;
            verificarResposta(playerNum, idx, indiceCorreto, questao);
            setTimeout(() => { gameState.answeringLock = false; }, 1600);
        };

        container.appendChild(btn);
    });
}

function verificarResposta(playerNum, idxEscolhido, idxCorreto, questao) {
    if (!gameState.gameActive) return;

    const botoes = document.querySelectorAll(`#player${playerNum}-answers .answer-btn`);

    // Reset total de classes antes de aplicar feedback
    botoes.forEach(b => {
        b.className = 'answer-btn';           // remove correct, incorrect, qualquer outra classe
        b.disabled = true;
    });

    const player = gameState[`player${playerNum}`];

    if (idxEscolhido === idxCorreto) {
        botoes[idxEscolhido].classList.add('correct');
        player.score += 10;
        player.correct++;
    } else {
        botoes[idxEscolhido].classList.add('incorrect');
        botoes[idxCorreto].classList.add('correct');
        player.wrong++;
    }

    player.currentQuestion++;
    atualizarPlacar();

    // Tempo curto para mostrar o feedback
    setTimeout(() => {
        if (gameState.gameActive) {
            mostrarQuestaoParaJogador(playerNum);
        }
    }, 1000);
}

function finalizarJogo() {
    gameState.gameActive = false;
    if (gameState.timerInterval) clearInterval(gameState.timerInterval);

    let winnerText = 'Empate!';
    let winnerClass = '';

    if (gameState.player1.score > gameState.player2.score) {
        winnerText = `${gameState.player1.name} Venceu!`;
        winnerClass = 'player1';
    } else if (gameState.player2.score > gameState.player1.score) {
        winnerText = `${gameState.player2.name} Venceu!`;
        winnerClass = 'player2';
    }

    document.getElementById('result-name1').textContent = gameState.player1.name;
    document.getElementById('result-score1').textContent = `${gameState.player1.score} pontos`;
    document.getElementById('result-correct1').textContent = gameState.player1.correct;
    document.getElementById('result-wrong1').textContent = gameState.player1.wrong;

    document.getElementById('result-name2').textContent = gameState.player2.name;
    document.getElementById('result-score2').textContent = `${gameState.player2.score} pontos`;
    document.getElementById('result-correct2').textContent = gameState.player2.correct;
    document.getElementById('result-wrong2').textContent = gameState.player2.wrong;

    document.getElementById('winner-text').textContent = winnerText;

    if (winnerClass) {
        document.getElementById('winner-banner').classList.add(winnerClass);
    }

    mostrarTela('result-screen');
}


// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    mostrarTela('config-screen');
    toggleGameMode();

    window.reiniciarJogo = function() {
        mostrarTela('config-screen');
    };

    window.voltarMenu = function() {
        mostrarTela('config-screen');
        // Aqui você pode redirecionar para o menu principal se existir
    };

    setTimeout(() => {
    document.activeElement?.blur();
}, 0);

});
