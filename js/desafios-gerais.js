// =============================================
// BANCO DE PERGUNTAS (apenas exemplos - complete com suas perguntas reais)
// =============================================
const todasAsPerguntas = [
      {
            pergunta: "Em que ano o profeta Muhammad (S.A.W) nasceu?",
            opcoes: ["576", "550", "570", "572"],
            correta: 2,
            explicacao: "Muhammad nasceu na cidade de Meca, um importante centro comercial e de peregrinação religiosa, em 570."
        },
        {
            pergunta: "Qual é o nome do pai do profeta Muhammad (S.A.W)?",
            opcoes: ["Abdul Qassim", "Abdullah", "Abdul Mutualib", "Nenhum deles"],
            correta: 1,
            explicacao: "O pai do profeta chamava-se Abdullah e faleceu antes de seu nascimento."
        },
        {
            pergunta: "Quem era a babá do profeta Muhammad (S.A.W)?",
            opcoes: ["Halima Sa'diyya", "Arwa al-Sulayhi", "Rabia al Adawiyya", "Zaynab Nefzaouia"],
            correta: 0,
            explicacao: "Halima Sa'diyya foi a ama de leite que cuidou do Profeta no deserto durante sua infância."
        },
        {
            pergunta: "A mãe do Profeta (S.A.W) chamava-se?",
            opcoes: ["Halima", "Amina", "Assia", "Khadijat"],
            correta: 1,
            explicacao: "Sua mãe era Amina bint Wahb."
        },
        {
            pergunta: "Qual era o apelido do Profeta antes de receber a revelação do Alcorão?",
            opcoes: ["O confiável", "Bom Homem"],
            correta: 0,
            explicacao: "O povo de Meca o chamava de 'Al-Amin' (o confiável) e 'Al-Sadiq' (o verdadeiro)."
        },
        {
            pergunta: "O Profeta (S.A.W) foi enviado apenas para os árabes?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "“Nós apenas te enviamos como uma misericórdia para a humanidade” (Alcorão 21:107)."
        },
        {
            pergunta: "O Profeta (S.A.W) foi violento?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "Aisha relatou: 'O Mensageiro de Allah nunca golpeou ninguém com sua mão, nem uma mulher, nem um servo'."
        },
        {
            pergunta: "Quantos anos tinha o Profeta quando sua mãe faleceu?",
            opcoes: ["4", "3", "6", "7"],
            correta: 2,
            explicacao: "Ele tinha 6 anos de idade quando sua mãe, Amina, faleceu."
        },
        {
            pergunta: "O Profeta Muhammad (S.A.W) morreu com que idade?",
            opcoes: ["56 anos", "48 anos", "76 anos", "63 anos"],
            correta: 3,
            explicacao: "O Profeta ﷺ faleceu aos 63 anos de idade em Medina."
        },
        {
            pergunta: "Muhammad (S.A.W) é o último dos Profetas?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "O Alcorão afirma que ele é o 'Selo dos Profetas' (Khatam an-Nabiyyin)."
        },
        {
            pergunta: "O Profeta (S.A.W) tinha irmãos e irmãs?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "Ele era filho único; seu pai morreu antes de ele nascer e sua mãe quando ele tinha 6 anos."
        },
        {
            pergunta: "Qual era o nome do primeiro filho do Profeta (S.A.W)?",
            opcoes: ["Qassim", "Abdullah", "Ibrahim", "Fátima"],
            correta: 0,
            explicacao: "O primeiro filho foi Qassim, por isso ele era conhecido como Abu'l-Qasim."
        },
        {
            pergunta: "Com quantos anos o profeta (S.A.W) recebeu a profecia?",
            opcoes: ["30", "40", "50", "60"],
            correta: 1,
            explicacao: "Ele recebeu a primeira revelação no Monte Hira quando tinha 40 anos."
        },
        {
            pergunta: "Qual dos filhos do profeta (S.A.W) não foi de Khadija (R.A)?",
            opcoes: ["Qassim", "Ibrahim", "Fátima", "Todas foram de Khadija"],
            correta: 1,
            explicacao: "Ibrahim era filho de Maria, a Copta (Maria al-Qibtiyya)."
        },
        {
            pergunta: "Qual era o nome da primeira esposa do Profeta (S.A.W)?",
            opcoes: ["Aisha", "Hafsa", "Maryam", "Khadijat"],
            correta: 3,
            explicacao: "Khadija bint Khuwaylid foi sua primeira e única esposa até o falecimento dela."
        },
        {
            pergunta: "Qual anjo ensinou a Muhammad (S.A.W) o Alcorão?",
            opcoes: ["Mikail", "Djibril", "Malik", "Issrafil"],
            correta: 1,
            explicacao: "Djibril (Gabriel) é o anjo responsável por transmitir as revelações de Allah aos profetas."
        },
        {
            pergunta: "Em que dias o Profeta (S.A.W) costumava jejuar voluntariamente?",
            opcoes: ["Segundas e Quintas", "Segundas e Terças", "Quartas e Sextas", "Apenas Quintas"],
            correta: 0,
            explicacao: "Ele jejuava nestes dias porque as ações dos servos são apresentadas a Allah nas segundas e quintas."
        },
        {
            pergunta: "Como se chamava o avô do Profeta (S.A.W)?",
            opcoes: ["Abu Tualib", "Abdullah", "Abdul Mutualib", "Abbas"],
            correta: 2,
            explicacao: "Abdul Mutualib foi quem cuidou dele após a morte de sua mãe."
        },
        {
            pergunta: "Qual era o nome da avó paterna do Profeta (S.A.W)?",
            opcoes: ["Haleema", "Sakeena", "Fátima bint Omar", "Nenhuma"],
            correta: 2,
            explicacao: "Fátima bint Amr (ou Omar) era a avó paterna do Profeta."
        },
        {
            pergunta: "Em qual mês Djibril visitou o profeta na caverna de Hira?",
            opcoes: ["Ramadan", "Rajab", "Shaban", "Muharram"],
            correta: 0,
            explicacao: "A primeira revelação ocorreu durante o mês sagrado do Ramadan."
        },
        {
            pergunta: "Com que idade o Profeta Muhammad (S.A.W) casou-se com Khadijah (R.A)?",
            opcoes: ["25 anos", "30 anos", "35 anos", "40 anos"],
            correta: 0,
            explicacao: "O Profeta tinha 25 anos e Khadijah tinha 40 anos no momento do casamento."
        },
        {
            pergunta: "Por que o Profeta Muhammad ﷺ migrou para Medina?",
            opcoes: ["Comércio", "Fugir da perseguição", "Visitar família", "Ensinar"],
            correta: 1,
            explicacao: "A migração (Hijra) serviu para escapar da perseguição em Meca e estabelecer uma nova comunidade."
        },
        {
            pergunta: "Onde faleceu o pai do Profeta?",
            opcoes: ["Meca", "Yathrib (Medina)", "Taif", "Viagem à Síria"],
            correta: 1,
            explicacao: "Abdullah faleceu em Yathrib (Medina) enquanto retornava de uma viagem comercial."
        },
        {
            pergunta: "Qual era a ocupação do Profeta até os 40 anos?",
            opcoes: ["Professor", "Pastor e Comerciante", "Soldado", "Fazendeiro"],
            correta: 1,
            explicacao: "Ele cuidou de ovelhas na juventude e depois tornou-se um comerciante respeitado."
        },
        {
            pergunta: "Qual foi a primeira forma de revelação recebida?",
            opcoes: ["Sonhos verdadeiros", "Livro escrito", "Sinais", "Mensageiros"],
            correta: 0,
            explicacao: "Antes da visita de Djibril, ele recebia visões através de sonhos que se tornavam realidade."
        }
, {
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
        },
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
        },
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
        },   {
            pergunta: "Em que ano o profeta Muhammad (S.A.W) nasceu?",
            opcoes: ["576", "550", "570", "572"],
            correta: 2,
            explicacao: "Muhammad nasceu na cidade de Meca, um importante centro comercial e de peregrinação religiosa, em 570."
        },
        {
            pergunta: "Qual é o nome do pai do profeta Muhammad (S.A.W)?",
            opcoes: ["Abdul Qassim", "Abdullah", "Abdul Mutualib", "Nenhum deles"],
            correta: 1,
            explicacao: "O pai do profeta chamava-se Abdullah e faleceu antes de seu nascimento."
        },
        {
            pergunta: "Quem era a babá do profeta Muhammad (S.A.W)?",
            opcoes: ["Halima Sa'diyya", "Arwa al-Sulayhi", "Rabia al Adawiyya", "Zaynab Nefzaouia"],
            correta: 0,
            explicacao: "Halima Sa'diyya foi a ama de leite que cuidou do Profeta no deserto durante sua infância."
        },
        {
            pergunta: "A mãe do Profeta (S.A.W) chamava-se?",
            opcoes: ["Halima", "Amina", "Assia", "Khadijat"],
            correta: 1,
            explicacao: "Sua mãe era Amina bint Wahb."
        },
        {
            pergunta: "Qual era o apelido do Profeta antes de receber a revelação do Alcorão?",
            opcoes: ["O confiável", "Bom Homem"],
            correta: 0,
            explicacao: "O povo de Meca o chamava de 'Al-Amin' (o confiável) e 'Al-Sadiq' (o verdadeiro)."
        },
        {
            pergunta: "O Profeta (S.A.W) foi enviado apenas para os árabes?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "“Nós apenas te enviamos como uma misericórdia para a humanidade” (Alcorão 21:107)."
        },
        {
            pergunta: "O Profeta (S.A.W) foi violento?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "Aisha relatou: 'O Mensageiro de Allah nunca golpeou ninguém com sua mão, nem uma mulher, nem um servo'."
        },
        {
            pergunta: "Quantos anos tinha o Profeta quando sua mãe faleceu?",
            opcoes: ["4", "3", "6", "7"],
            correta: 2,
            explicacao: "Ele tinha 6 anos de idade quando sua mãe, Amina, faleceu."
        },
        {
            pergunta: "O Profeta Muhammad (S.A.W) morreu com que idade?",
            opcoes: ["56 anos", "48 anos", "76 anos", "63 anos"],
            correta: 3,
            explicacao: "O Profeta ﷺ faleceu aos 63 anos de idade em Medina."
        },
        {
            pergunta: "Muhammad (S.A.W) é o último dos Profetas?",
            opcoes: ["Verdade", "Falso"],
            correta: 0,
            explicacao: "O Alcorão afirma que ele é o 'Selo dos Profetas' (Khatam an-Nabiyyin)."
        },
        {
            pergunta: "O Profeta (S.A.W) tinha irmãos e irmãs?",
            opcoes: ["Verdade", "Falso"],
            correta: 1,
            explicacao: "Ele era filho único; seu pai morreu antes de ele nascer e sua mãe quando ele tinha 6 anos."
        },
        {
            pergunta: "Qual era o nome do primeiro filho do Profeta (S.A.W)?",
            opcoes: ["Qassim", "Abdullah", "Ibrahim", "Fátima"],
            correta: 0,
            explicacao: "O primeiro filho foi Qassim, por isso ele era conhecido como Abu'l-Qasim."
        },
        {
            pergunta: "Com quantos anos o profeta (S.A.W) recebeu a profecia?",
            opcoes: ["30", "40", "50", "60"],
            correta: 1,
            explicacao: "Ele recebeu a primeira revelação no Monte Hira quando tinha 40 anos."
        },
        {
            pergunta: "Qual dos filhos do profeta (S.A.W) não foi de Khadija (R.A)?",
            opcoes: ["Qassim", "Ibrahim", "Fátima", "Todas foram de Khadija"],
            correta: 1,
            explicacao: "Ibrahim era filho de Maria, a Copta (Maria al-Qibtiyya)."
        },
        {
            pergunta: "Qual era o nome da primeira esposa do Profeta (S.A.W)?",
            opcoes: ["Aisha", "Hafsa", "Maryam", "Khadijat"],
            correta: 3,
            explicacao: "Khadija bint Khuwaylid foi sua primeira e única esposa até o falecimento dela."
        },
        {
            pergunta: "Qual anjo ensinou a Muhammad (S.A.W) o Alcorão?",
            opcoes: ["Mikail", "Djibril", "Malik", "Issrafil"],
            correta: 1,
            explicacao: "Djibril (Gabriel) é o anjo responsável por transmitir as revelações de Allah aos profetas."
        },
        {
            pergunta: "Em que dias o Profeta (S.A.W) costumava jejuar voluntariamente?",
            opcoes: ["Segundas e Quintas", "Segundas e Terças", "Quartas e Sextas", "Apenas Quintas"],
            correta: 0,
            explicacao: "Ele jejuava nestes dias porque as ações dos servos são apresentadas a Allah nas segundas e quintas."
        },
        {
            pergunta: "Como se chamava o avô do Profeta (S.A.W)?",
            opcoes: ["Abu Tualib", "Abdullah", "Abdul Mutualib", "Abbas"],
            correta: 2,
            explicacao: "Abdul Mutualib foi quem cuidou dele após a morte de sua mãe."
        },
        {
            pergunta: "Qual era o nome da avó paterna do Profeta (S.A.W)?",
            opcoes: ["Haleema", "Sakeena", "Fátima bint Omar", "Nenhuma"],
            correta: 2,
            explicacao: "Fátima bint Amr (ou Omar) era a avó paterna do Profeta."
        },
        {
            pergunta: "Em qual mês Djibril visitou o profeta na caverna de Hira?",
            opcoes: ["Ramadan", "Rajab", "Shaban", "Muharram"],
            correta: 0,
            explicacao: "A primeira revelação ocorreu durante o mês sagrado do Ramadan."
        },
        {
            pergunta: "Com que idade o Profeta Muhammad (S.A.W) casou-se com Khadijah (R.A)?",
            opcoes: ["25 anos", "30 anos", "35 anos", "40 anos"],
            correta: 0,
            explicacao: "O Profeta tinha 25 anos e Khadijah tinha 40 anos no momento do casamento."
        },
        {
            pergunta: "Por que o Profeta Muhammad ﷺ migrou para Medina?",
            opcoes: ["Comércio", "Fugir da perseguição", "Visitar família", "Ensinar"],
            correta: 1,
            explicacao: "A migração (Hijra) serviu para escapar da perseguição em Meca e estabelecer uma nova comunidade."
        },
        {
            pergunta: "Onde faleceu o pai do Profeta?",
            opcoes: ["Meca", "Yathrib (Medina)", "Taif", "Viagem à Síria"],
            correta: 1,
            explicacao: "Abdullah faleceu em Yathrib (Medina) enquanto retornava de uma viagem comercial."
        },
        {
            pergunta: "Qual era a ocupação do Profeta até os 40 anos?",
            opcoes: ["Professor", "Pastor e Comerciante", "Soldado", "Fazendeiro"],
            correta: 1,
            explicacao: "Ele cuidou de ovelhas na juventude e depois tornou-se um comerciante respeitado."
        },
        {
            pergunta: "Qual foi a primeira forma de revelação recebida?",
            opcoes: ["Sonhos verdadeiros", "Livro escrito", "Sinais", "Mensageiros"],
            correta: 0,
            explicacao: "Antes da visita de Djibril, ele recebia visões através de sonhos que se tornavam realidade."
        }, {
            pergunta: "De qual profeta descende o Profeta Muhammad ﷺ?",
            opcoes: ["Moussa (Moisés)", "Isaac", "Ismael", "Issa (Jesus)"],
            correta: 2,
            explicacao: "Os árabes, e consequentemente o Profeta Muhammad ﷺ, são descendentes de Ismael, filho de Ibrahim."
        },
        {
            pergunta: "De acordo com o Alcorão, qual nome Issa ﷺ (Jesus) usou para se referir ao Profeta do Islã?",
            opcoes: ["Maomé", "Ahmad", "Mustafa", "Mahmoud"],
            correta: 1,
            explicacao: "'...trazendo boas novas de um Mensageiro que virá depois de mim, cujo nome será Ahmad.' (Surata 61:6)"
        },
        {
            pergunta: "Qual foi a primeira ação do Profeta ﷺ em Medina?",
            opcoes: ["Mercado muçulmano", "Confraternizar Muhajirins e Ansars", "Pacto de paz", "Construir uma mesquita"],
            correta: 3,
            explicacao: "A construção da Mesquita de Quba foi a primeira ação; ela é a primeira mesquita do Islã."
        },
        {
            pergunta: "Quem é a filha do Profeta ﷺ sobre quem ele disse: 'Você não aceita ser a princesa das mulheres do Paraíso?'",
            opcoes: ["Roqayya", "Zayneb", "Fátima", "Ummu Kalthoum"],
            correta: 2,
            explicacao: "Ele disse isso a Fátima (R.A), que é considerada a senhora das mulheres do Paraíso."
        },
        {
            pergunta: "Qual era a cor favorita do Profeta ﷺ para suas roupas?",
            opcoes: ["Branco", "Verde", "Vermelho", "Preto"],
            correta: 0,
            explicacao: "O Profeta disse: 'Vistam suas roupas brancas... e usem-nas como mortalhas para os seus mortos.' (Abu Dawud)"
        },
        {
            pergunta: "O Profeta ﷺ costumava pedir perdão a Deus mais de [...] por dia.",
            opcoes: ["10 vezes", "70 vezes", "100 vezes", "1000 vezes"],
            correta: 1,
            explicacao: "'Juro por Alá que peço perdão a Alá e me arrependo perante Ele mais de 70 vezes por dia.' (Bukhari)"
        },
        {
            pergunta: "Qual era o nome do camelo do Profeta ﷺ quando ele chegou a Medina?",
            opcoes: ["Qaswa", "Adhba", "Djada", "Khamra"],
            correta: 0,
            explicacao: "O camelo se chamava Al-Qaswa."
        },
        {
            pergunta: "Complete: 'E não vos enviamos senão como [...] para o universo' (Surata 21:107)",
            opcoes: ["Presente", "Misericórdia", "Milagre", "Recompensa"],
            correta: 1,
            explicacao: "O versículo diz: 'E não te enviamos senão como misericórdia para os mundos.'"
        },
        {
            pergunta: "Quem foi a primeira filha do Profeta ﷺ?",
            opcoes: ["Ummu Kalthoum", "Fátima", "Roqayya", "Zayneb"],
            correta: 3,
            explicacao: "Zayneb foi a filha mais velha. Ela abraçou o Islã cedo, enquanto seu marido permaneceu politeísta por anos."
        },
        {
            pergunta: "Quanto tempo durou a pregação secreta do Profeta ﷺ em Meca?",
            opcoes: ["3 anos", "5 anos", "8 anos", "10 anos"],
            correta: 0,
            explicacao: "Foram 3 anos de pregação secreta seguidos de 10 anos de pregação pública em Meca."
        },
        {
            pergunta: "O Profeta ﷺ não teve filhos homens. Verdadeiro ou Falso?",
            opcoes: ["Verdadeiro", "Falso"],
            correta: 1,
            explicacao: "Falso. Ele teve filhos homens: Qasim, Abdallah e Ibrahim, mas todos faleceram na infância."
        },
        {
            pergunta: "Após a revelação de qual surata o Profeta ﷺ acordou sorrindo?",
            opcoes: ["A'la", "Al Kawthar", "Ar Rahman", "Ad Duha"],
            correta: 1,
            explicacao: "Ele sorriu ao receber a notícia do 'Kawthar', um rio no Paraíso prometido por seu Senhor. (Abu Dawud)"
        },
        {
            pergunta: "Qual filho do Profeta ﷺ faleceu no dia de um eclipse solar?",
            opcoes: ["Qasim", "Abdallah", "Ibrahim", "Roqayya"],
            correta: 2,
            explicacao: "A morte de Ibrahim coincidiu com um eclipse solar, provavelmente em 27 de janeiro de 632."
        },
        {
            pergunta: "Quantos filhos e filhas o Profeta ﷺ teve?",
            opcoes: ["3 filhos e 3 filhas", "2 filhos e 4 filhas", "3 filhos e 4 filhas", "4 filhos e 4 filhas"],
            correta: 2,
            explicacao: "Ele teve 3 filhos (Qasim, Abdallah, Ibrahim) e 4 filhas (Zayneb, Roqaya, Ummu Kulssum, Fátima)."
        },
        {
            pergunta: "O Mensageiro de Allah faleceu nos braços de quem?",
            opcoes: ["Ummu Salama", "Sawda", "Ummu Habiba", "Aisha"],
            correta: 3,
            explicacao: "Ele faleceu no quarto de Aisha e foi sepultado no local de sua morte."
        },
        {
            pergunta: "Qual o nome das pessoas que acolheram o Profeta ﷺ em Medina?",
            opcoes: ["Quraysh", "Ansars", "Banu Nadir", "Banu Ghatafan"],
            correta: 1,
            explicacao: "Os Ansars (Ajudantes) foram os habitantes de Medina que acolheram o Profeta e os migrantes (Muhajirun)."
        }, {
            pergunta: "Quantas peregrinações a Meca (Hajj) o Profeta ﷺ realizou?",
            opcoes: ["1", "2", "3", "4"],
            correta: 0,
            explicacao: "Anas ibn Malik relatou: 'Ele realizou o Hajj apenas uma vez e a Umrah quatro vezes.' (Tirmidhi)"
        },
        {
            pergunta: "Após a morte de seu avô, o Profeta ﷺ foi cuidado por uma mulher que ele chamava de 'Mãe'. Quem era?",
            opcoes: ["Halima", "Fátima bint Asad", "Barakah (Umm Ayman)", "Thuwaybah"],
            correta: 1,
            explicacao: "Fátima bint Asad era esposa de Abu Talib. Ela cuidou de Muhammad como se fosse seu próprio filho."
        },
        {
            pergunta: "Ao lado de quem o Profeta ﷺ está sepultado?",
            opcoes: ["Khadija e Aisha", "Al Hassan e Al Hussein", "Ali e Othman", "Abu Bakr e Omar"],
            correta: 3,
            explicacao: "Seus companheiros Abu Bakr e Omar ibn Al-Khattab estão sepultados ao lado dele no quarto de Aisha."
        },
        {
            pergunta: "Quantas vezes o Profeta Muhammad ﷺ realizou a Umrah?",
            opcoes: ["1", "2", "3", "4"],
            correta: 3,
            explicacao: "Ele realizou quatro Umrahs, sendo a última realizada juntamente com o Hajj de Despedida (Hajj al-Wada)."
        },
        {
            pergunta: "Em qual montanha está localizada a caverna de Hira?",
            opcoes: ["Arafa", "Jabal an-Nour", "Jabal Thawr", "Judi"],
            correta: 1,
            explicacao: "A caverna fica no Jabal an-Nour (Montanha da Luz), a noroeste de Meca."
        },
        {
            pergunta: "Na morte de quem o Profeta disse: 'O sol e a lua... nunca se eclipsam pela morte de qualquer ser humano'?",
            opcoes: ["Khadija", "Hamza", "Abu Talib", "Ibrahim (seu filho)"],
            correta: 3,
            explicacao: "Disse isso quando as pessoas acharam que o eclipse ocorreu por causa da morte de seu filho Ibrahim."
        },
        {
            pergunta: "O Profeta Muhammad ﷺ alguma vez comeu baleia (ou grande peixe do mar)?",
            opcoes: ["Sim", "Não"],
            correta: 0,
            explicacao: "Sim. Companheiros trouxeram um pedaço de um grande peixe (âmbar/baleia) de uma expedição e ele comeu."
        },
        {
            pergunta: "Quais crianças o Profeta ﷺ criou em sua própria casa?",
            opcoes: ["Talha e Zoubair", "Ali e Zayd ibn Haritha", "Ibn Abbas e Ibn Omar", "Anas e El Hussein"],
            correta: 1,
            explicacao: "Zayd foi adotado (antes da proibição da adoção legal) e Ali foi acolhido para aliviar as despesas de seu tio Abu Talib."
        },
        {
            pergunta: "Quem foi a última esposa com quem o Profeta ﷺ se casou?",
            opcoes: ["Maymouna", "Umm Habiba", "Umm Salama", "Safiya"],
            correta: 0,
            explicacao: "Maymouna bint al-Harith foi a última mulher com quem ele se casou, por volta de 629."
        },
        {
            pergunta: "Qual era o nome da caverna onde o Profeta ﷺ e Abu Bakr se refugiaram durante a Hégira?",
            opcoes: ["Hira", "Judi", "Arafa", "Thawr"],
            correta: 3,
            explicacao: "Eles se esconderam na Caverna de Thawr por três dias para escapar dos coraixitas."
        },{
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
            
        },
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
        },
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
        },{
            pergunta: "Quem não está entre os 10 prometidos ao Paraíso?",
            opcoes: ["Tal'ha (R.A)", "Zubeyr (R.A)", "Abu Obayda (R.A)", "Abu Jahal"],
            correta: 3,
            explicacao: "Abu Jahal foi o maior inimigo do Islã em Meca. O Profeta (S.A.W) disse dele: Ele é o Faraó da minha comunidade"
        },
        {
            pergunta: "Após minha conversão, os muçulmanos puderam realizar orações abertamente perto da Caaba. Quem sou eu?",
            opcoes: ["Abu Bakr", "Hamza", "Omar", "Abu Sofian"],
            correta: 2,
            explicacao: "Omar (R.A) era um líder respeitado, e sua conversão fortaleceu significativamente a comunidade muçulmana em Meca."
        },
        {
            pergunta: "Qual companheiro do Profeta ﷺ dormiu na cama do Profeta ﷺ na noite da Hégira para enganar os coraixitas?",
            opcoes: ["Ali", "Omar", "Otman", "Abu Bakr"],
            correta: 0,
            explicacao: "O Mensageiro de Allah (S.A.W) pediu a Ali que dormisse em sua cama e se cobrisse com seu manto para enganar os coraixitas."
        },
        {
            pergunta: "Qual companheiro disse: \"Por que adoramos essas pedras que nada nos trazem?\"",
            opcoes: ["Abu Bakr Omar (R.A)", "Omar (R.A)", "Otman (R.A)", "Ali (R.A)"],
            correta: 1,
            explicacao: "Omar disse: 'Por que adoramos essas pedras que nada nos trazem?' (Sahih Muslim, 2398)"
        },
        {
            pergunta: "Qual companheiro foi o primeiro muezim do Islã?",
            opcoes: ["Bilal", "Ibn Mas'ud", "Zubayr", "Tal'ha"],
            correta: 0,
            explicacao: "O Profeta (S.A.W) disse a Bilal: \"Recite o Adhan, pois você tem uma voz forte e agradável.\" (Sahih Muslim, 384)"
        },
        {
            pergunta: "Quem foi Hamza, o Leão de Alá, para o Profeta ﷺ?",
            opcoes: ["Seu irmão", "Seu primo", "Seu sobrinho", "Seu tio"],
            correta: 3,
            explicacao: "Hamza ibn Abdul-Muttalib era tio do Profeta (S.A.W) e conhecido como o Leão de Alá."
        },
        {
            pergunta: "Quem era o companheiro que veio da Pérsia?",
            opcoes: ["Outro companheiro", "ObeYDa", "Salman", "Tal'ha"],
            correta: 2,
            explicacao: "Salman el Farisi (o Persa) tem uma longa e extraordinária história em sua busca pela verdadeira religião."
        },
        {
            pergunta: "Hafsa é filha de...?",
            opcoes: ["Abu Bakr", "Omar", "Ali", "Otman"],
            correta: 1,
            explicacao: "Hafsa era filha de Omar (R.A) e foi uma das esposas do Profeta (S.A.W). Sua irmã Aisha era filha de Abu Bakr."
        },
        {
            pergunta: "Minha filha Hafsa foi uma das esposas do Profeta ﷺ. Quem sou eu?",
            opcoes: ["Abu Bakr", "Omar", "Ali", "Otman"],
            correta: 1,
            explicacao: "Omar (R.A) foi pai de Hafsa, que se tornou esposa do Profeta (S.A.W)."
        },
        {
            pergunta: "Qual companheiro era conhecido por sua gentileza e humildade a ponto de o Profeta ﷺ lhe dar o apelido de \"o homem gentil desta comunidade\"?",
            opcoes: ["Abu Bakr", "Omar", "Otman", "Ali"],
            correta: 2,
            explicacao: "Uthman é um homem gentil e modesto; até os anjos são modestos para com ele. (Sahih Muslim, 2401)"
        },
        {
            pergunta: "Quem foi o primeiro califa do Islã guiado corretamente?",
            opcoes: ["Abu Bakr", "Omar", "Otman", "Ali"],
            correta: 0,
            explicacao: "Seu califado durou 2 anos, 3 meses e 9 dias. Abu Bakr faleceu aos 63 anos no dia 17 de Jamadil Akhar, 17 anos após a Hégira."
        },
        {
            pergunta: "Os netos do Profeta ﷺ, filhos de Ali e Fátima ﷺ, são",
            opcoes: ["Maomé e Mahmoud", "Hassan e Mohsin", "Al Hassan e Al Hussein", "Khalid e Khowaylid"],
            correta: 2,
            explicacao: "Referidos em um hadith profético como: Os dois belos jovens do Paraíso (Shababay Ahl al-Jannah)"
        },
        {
            pergunta: "Quem é Ali, o 4º califa bem guiado em relação ao Profeta ﷺ?",
            opcoes: ["Seu tio", "Seu primo", "Seu irmão", "Seu sobrinho"],
            correta: 1,
            explicacao: "Ali era primo do Profeta (S.A.W) e também genro, tendo se casado com sua filha Fátima (R.A)."
        },
        {
            pergunta: "Qual companheiro recebeu o apelido de \"O Leão de Alá\" e morreu como mártir na Batalha de Uhud?",
            opcoes: ["Tal'a", "Zubayr", "Hamza", "Al Hussein"],
            correta: 2,
            explicacao: "O Profeta (S.A.W) disse, enquanto chorava por Hamza: \"O Senhor dos mártires é Hamza ibn Abdul-Muttalib.\" (Sahih Ibn Majah, 1450)"
        },
        {
            pergunta: "Qual companheiro foi sepultado com as roupas ensanguentadas após ser martirizado na Batalha de Uhud?",
            opcoes: ["Hamza", "Abu Hurayra", "Tal'ha", "Zubayr"],
            correta: 0,
            explicacao: "O Profeta (S.A.W) ordenou que Hamza fosse enterrado com suas roupas, sem lavá-las. (Sahih Al-Bukhari, 4072)"
        },
        {
            pergunta: "Quem foi o segundo califa do Islã guiado corretamente?",
            opcoes: ["Abu Bakr", "Omar", "Otman", "Ali"],
            correta: 1,
            explicacao: "Seu califado durou 10 anos, 6 meses e 5 dias e faleceu no dia de Muharram no ano 24 depois de Hijra."
        },
        {
            pergunta: "A ordem dos Califas Bem-Guiados é Abu Bakr, Umar, Ali e Uthman?",
            opcoes: ["Verdadeiro", "Falso"],
            correta: 1,
            explicacao: "Esses são Abu Bakr, Omar, Othman e Ali. A ordem correta é Abu Bakr, Omar, Othman e Ali."
        },
        {
            pergunta: "A primeira pessoa a acreditar no Islã foi uma mulher?",
            opcoes: ["Verdadeiro", "Falso"],
            correta: 0,
            explicacao: "Era Khadija (R.A), que Allah esteja satisfeito com ela, esposa do Profeta (S.A.W)."
        },
        {
            pergunta: "Quem era o primo do Profeta ﷺ?",
            opcoes: ["Abdullah Ibn Omar", "Abdallah Ibn Mas'oud", "Abdallah Ibn Ommi Maktum", "Abdullah Ibn Abbas"],
            correta: 3,
            explicacao: "Seu pai, Al Abbas, era tio do Profeta (S.A.W). Ibn Abbas foi o primeiro exegeta do Alcorão, atendendo à súplica do Profeta."
        },
        {
            pergunta: "Sou primo do Profeta ﷺ e o primeiro filho a se converter ao Islã, quem sou eu?",
            opcoes: ["Zayd Ibn Haritha", "Anas Ibn Mali", "Ali Ibn Abu Talib", "Abdullah Ibn Abbas"],
            correta: 2,
            explicacao: "Ali Ibn Abu Talib foi primo do Profeta (S.A.W) e o primeiro filho a abraçar o Islã."
        },
        {
            pergunta: "Quem o Profeta (S.A.W) designou para liderar a oração no final de sua vida?",
            opcoes: ["Abu Bakr", "Omar", "Ali", "Otman"],
            correta: 0,
            explicacao: "Abu Bakr foi designado para liderar as orações, o que indicava sua posição de liderança futura."
        },
        {
            pergunta: "Qual companheiro recebeu o apelido de \"O servo do Mensageiro de Alá\"?",
            opcoes: ["Abu Hurayra", "Anas ibn Malik", "Ibn Mas'ud", "Ibn Abbas"],
            correta: 1,
            explicacao: "Anas ibn Malik disse: \"Eu servi ao Profeta ﷺ por dez anos, e ele nunca me disse uma vez: 'Por que você fez isso?'\" (Sahih Muslim, 2309)"
        },
        {
            pergunta: "Qual companheiro lutou ao lado do Profeta ﷺ usando um turbante vermelho na Batalha de Badr e era conhecido por sua bravura?",
            opcoes: ["Ali", "Zubayr (R.A)", "Hamza", "Tal'ha"],
            correta: 1,
            explicacao: "Zubayr usava um turbante vermelho e lutou bravamente em Badr. (Sahih Muslim, 2416)"
        },
        {
            pergunta: "Qual companheiro lutou a vida inteira por Alá, mas morreu em sua cama?",
            opcoes: ["Al-Miqdad", "Khalid ibn Walid", "Amr ibn Al-As", "Talalha"],
            correta: 1,
            explicacao: "Khalid ibn Al-Walid, em seu leito de morte, chorou e disse: 'Morri em uma cama quando teria preferido morrer como mártir.' (Tabari)"
        },
        {
            pergunta: "A qual companheiro o Profeta ﷺ disse: \"Se eu tivesse uma terceira filha para casar, eu a teria dado a você como esposa\"?",
            opcoes: ["Abu Bakr", "Omar", "Ali", "Otman"],
            correta: 3,
            explicacao: "Othman casou-se com duas filhas do Profeta ﷺ, Ruqiyyah e Umm Kulthum, após a morte de cada uma."
        },
        {
            pergunta: "Quem foi o companheiro que serviu de escriba ao Profeta ﷺ e desempenhou um papel fundamental na redação do Alcorão?",
            opcoes: ["Abu Hurayra (R.A)", "Zayd ibn Thabit", "Ibn Abbas", "Ubayy ibn Ka'b"],
            correta: 1,
            explicacao: "Zayd ibn Thabit disse: \"Eu costumava anotar a revelação para o Mensageiro de Allah (que a paz e as bênçãos estejam sobre ele).\" (Sahih Al-Bukhari)"
        },
        {
            pergunta: "Quem é a causa da revelação da Surata Abassa?",
            opcoes: ["Abdallah Ibn Ommi Maktum", "Abdallah Ibn Obey Ibn Saloul", "Abdullah Ibn Abbas", "Abdallah Ibn Mas'oud"],
            correta: 0,
            explicacao: "Abdullah Ibn Umm Maktum era cego, mas apesar disso, liderou a chamada para a oração (Adhan)."
        },
        {
            pergunta: "Qual companheiro do Profeta ﷺ era conhecido por sua eloquência e domínio da poesia?",
            opcoes: ["Hassan ibn Thabit", "Abu Ubayda", "Ubayy ibn Ka'b", "Anas Ibn Malik"],
            correta: 0,
            explicacao: "O Profeta ﷺ disse a Hassan ibn Thabit: 'Refute os coraixitas com sua poesia, pois Jibril está com você.' (Sahih Al-Bukhari, 3213)"
        },
        {
            pergunta: "Quantas vezes Omar Ibn Khattab é mencionado no Alcorão?",
            opcoes: ["0", "1", "2", "3"],
            correta: 0,
            explicacao: "O único companheiro mencionado pelo nome no Alcorão é Zayd ibn Haritha, filho adotivo do Profeta ﷺ antes do Islã."
        },
        {
            pergunta: "Qual companheiro era conhecido por sua beleza e elegância antes do Islã e sacrificou tudo pela causa de Alá?",
            opcoes: ["Mus'ab ibn Umayr", "Abu Hurayra", "Ali", "Hamza"],
            correta: 0,
            explicacao: "Mus'ab era o mais elegante dos jovens de Meca antes do Islã, depois renunciou a tudo pelo Islã. (Sahih Muslim, 1924)"
        },
        {
            pergunta: "Qual era o nome da filha de Omar?",
            opcoes: ["Zeyneb", "Fátima", "Hafsa", "Maymouna"],
            correta: 2,
            explicacao: "Hafsa foi esposa do Profeta ﷺ e desempenhou papel importante na preservação do Alcorão compilado pelos companheiros."
        },
        {
            pergunta: "Quem ostenta o apelido de Califa do Profeta ﷺ?",
            opcoes: ["Abu Bakr(R.A)", "Omar(R.A)", "Otman(R.A)", "Ali (R.A)"],
            correta: 0,
            explicacao: "Abu Bakr foi o primeiro califa do Islã e é chamado de Khalifat Ar-Rasul (Califa do Profeta)."
        },
        {
            pergunta: "Qual companheiro se casou com Fátima, a filha do Profeta ﷺ?",
            opcoes: ["Abu Bakr(R.A)", "Omar(R.A)", "Otman(R.A)", "Ali (R.A)"],
            correta: 3,
            explicacao: "Ali ibn Abu Talib se casou com Fátima (R.A), a filha do Profeta ﷺ."
        },
        {
            pergunta: "Qual companheiro o Profeta ﷺ descreveu como \"o mais confiável de sua comunidade\"?",
            opcoes: ["Ubayda Ibn Jarah (R.A)", "Salman El Farisi (R.A)", "Abdullah Ibn Abbas (R.A)", "Abdullah Ibn Omar (R.A)"],
            correta: 0,
            explicacao: "Abu Ubayda Ibn Jarah é um dos 10 prometidos ao Paraíso e foi considerado extremamente confiável pelo Profeta."
        },
        {
            pergunta: "Qual companheiro recebeu o apelido de \"O Tradutor do Alcorão\" devido ao seu vasto conhecimento?",
            opcoes: ["Ibn Abbas", "Abu Hurayra", "Ibn Mas'ud", "Anas ibn Malik"],
            correta: 0,
            explicacao: "O Profeta ﷺ disse: \"Ó Allah, concede-lhe entendimento do Alcorão.\" (Sahih Al-Bukhari, 75) - Referindo-se a Ibn Abbas"
        },
        {
            pergunta: "Encontre o elemento diferente...",
            opcoes: ["Abdullah Ibn Abbas", "Abdallah Ibn Mas'oud", "Abdullah Ibn Omar", "Abdallah Ibn Mubarak"],
            correta: 3,
            explicacao: "Abdullah Ibn Mubarak não é um companheiro - ele foi um Tabii (aquele que conheceu os companheiros)."
        },
        {
            pergunta: "Qual companheiro foi mortalmente ferido por uma flecha e desejou que seu sangue fosse uma prova para Alá?",
            opcoes: ["Hamza", "Zayd ibn Haritha", "Ibn Ma'sud", "Saad ibn Mu'adh"],
            correta: 3,
            explicacao: "Quando Saad ibn Mu'adh foi ferido, ele pediu a Alá que não o deixasse morrer antes de ver o fim dos Banu Qurayza. (Tabari)"
        },
        {
            pergunta: "O chefe da delegação dos primeiros emigrantes para a Abissínia era...?",
            opcoes: ["Osama Ibn Zayd", "Khaled Ibn Walid", "Abdullah Ibn Abbas", "Jafar Ibn Abi Talib"],
            correta: 3,
            explicacao: "Jafar Ibn Abi Talib era irmão de Ali e primo do Profeta ﷺ, e liderou a migração para a Abissínia."
        },
        {
            pergunta: "Qual companheiro foi assassinado enquanto era califa, lendo o Alcorão?",
            opcoes: ["Omar", "Otman", "Ali", "Abu Bakr"],
            correta: 1,
            explicacao: "Ibn Sa'd relata que o sangue de Uthman tocou o versículo: \"Allah vos bastará contra eles. E Ele é o Oniouvinte, o Onisciente.\" (Alcorão, 2:137)"
        },
        {
            pergunta: "Por que o califa Omar destituiu o líder dos exércitos muçulmanos, Khalid Ibn Walid, mesmo ele nunca tendo perdido nenhuma batalha?",
            opcoes: ["Por ciúme", "Por ódio", "Por prudência e sabedoria", "Por raiva"],
            correta: 2,
            explicacao: "Omar disse: \"Não demiti Khaled por ele ter feito algo errado, mas sim porque temia que as pessoas o culpassem por todos os nossos sucessos militares.\""
        },
        {
            pergunta: "A quem Abu Bakr pediu para compilar o Alcorão?",
            opcoes: ["Ibn Masoud", "Otman", "Ibn Abbas", "Zayd Ibn Thabit"],
            correta: 3,
            explicacao: "Isso se deveu à morte de muitos camaradas na Batalha de Yamama, a primeira compilação oficial foi feita durante o califado de Abu Bakr."
        },
        {
            pergunta: "Quem foi o poeta que se manifestou em defesa do Profeta ﷺ?",
            opcoes: ["Amr Ibn Al Ass", "Kaab ibn Malik", "Abdullah Ibn Oumi Maktum", "Ibn Abi Quhafa"],
            correta: 1,
            explicacao: "O Profeta ﷺ teve um total de 4 poetas que foram porta-vozes do Islã e que o defenderam, entre eles Kaab Ibn Malik, que Allah esteja satisfeito com ele."
        },
        {
            pergunta: "Al-Hassan, neto do Profeta ﷺ, foi eleito Califa após a morte de seu pai, Ali.",
            opcoes: ["Verdadeiro", "Falso"],
            correta: 0,
            explicacao: "Seu califado durou menos de seis meses; ele cedeu o poder a Muawiya para evitar uma guerra mortal entre muçulmanos."
        },
        {
            pergunta: "Qual das Mães dos Crentes participou da Batalha do Camelo ou Batalha de Basra em 656?",
            opcoes: ["Maymouna", "Safiyya", "Aicha", "Hafsa"],
            correta: 2,
            explicacao: "A Batalha do Camelo, também conhecida como Batalha de Basra, é um evento significativo na história islâmica durante a primeira guerra civil muçulmana."
        },
        {
            pergunta: "Quem foi Ibn Abi Quhafa?",
            opcoes: ["Abu Bakr", "Omar", "Otman", "Ali"],
            correta: 0,
            explicacao: "Abu Quhafa era o pai de Abu Bakr (Abdullah ibn Uthman), primeiro califa do Islã."
        },
        {
            pergunta: "Qual companheiro relatou o maior número de hadiths?",
            opcoes: ["Anas Ibn Malik", "Ibn Omar", "Ali", "Abu Hurayra"],
            correta: 3,
            explicacao: "Abu Hurayra trouxe 5374 hadiths, o maior número entre todos os companheiros."
        },
        {
            pergunta: "Qual companheiro recepcionou o Profeta ﷺ em Medina?",
            opcoes: ["Salman El Farisi", "Saad Ibn Obeida", "Saad Ibn Mo'ad", "Abu Ayub El Ansari"],
            correta: 3,
            explicacao: "Abu Ayub El Ansari o abrigou por 7 meses quando chegou a Medina após a Hégira."
        },
        {
            pergunta: "Quem disse: \"Como vocês podem escravizar homens que nasceram livres?\"",
            opcoes: ["Omar", "Abdullah Ibn Abbas", "Anas Ibn Malik", "Abu Bakr"],
            correta: 0,
            explicacao: "Omar era conhecido por sua defesa da justiça. Libertar um escravo permite que um muçulmano se aproxime de seu Senhor."
        },
        {
            pergunta: "O companheiro conhecido por ter pernas finas era…?",
            opcoes: ["Abdullah Ibn Mas'oud", "Abu Bakr", "Omar", "Zubayr Ibn Awwam"],
            correta: 0,
            explicacao: "O Profeta ﷺ disse sobre Abdullah Ibn Mas'oud: \"Elas certamente pesam mais na balança do que Uhud.\" (Relatado por Ahmad)"
        },
        {
            pergunta: "\"Quem quiser ler o Alcorão como foi revelado deve ir a [...]\"",
            opcoes: ["Abdullah Ibn Abbas", "Abdullah Ibn Omar", "Abdallah Ibn Mas'oud", "Abdallah Ibn Salem"],
            correta: 2,
            explicacao: "Abdullah Ibn Mas'ud era especialista em estudos corânicos e jurisprudência. Ele foi um protegido do Profeta do Islã."
        },
        {
            pergunta: "Qual casa de um companheiro serviu como local de ensino no início do Islã?",
            opcoes: ["Arqam Ibn Arqam", "Abu Tabib", "Saad Ibn Waqas", "Ammar Ibn Yassir"],
            correta: 0,
            explicacao: "A casa de Arqam Ibn Arqam foi um importante centro de aprendizado islâmico nos primeiros dias do Islã."
        },
        {
            pergunta: "Quem era o hipócrita de Medina?",
            opcoes: ["Abdallah Ibn Obey Ibn Saloul", "Abu Jahal", "Abu Sofian", "Huyayy Ibn Akhtab"],
            correta: 0,
            explicacao: "Seu filho, no entanto, era um dos associados próximos do Profeta ﷺ. Seu ódio derivava do fato de que ambicionava ser escolhido como rei de Medina."
        },
        {
            pergunta: "Eu sou a ciência e [...] é a porta de entrada para ela.",
            opcoes: ["Abderahman Ibn Awf", "Talalha", "Omar", "Ali"],
            correta: 3,
            explicacao: "O Profeta ﷺ disse: \"...Quem quiser ir à cidade deve passar pelo portão.\" Referindo-se a Ali como porta de entrada para a sabedoria (Reportado por Al-Hakim)"
        },
        {
            pergunta: "Qual companheiro participou das maiores batalhas e recebeu o apelido de \"O Falcão de Quraysh\"?",
            opcoes: ["Talalha", "Zubayr", "Ali", "Abu Ubayda"],
            correta: 1,
            explicacao: "O Profeta ﷺ disse: \"Zubayr é meu discípulo neste mundo e no Além.\" (Sahih Al-Bukhari, 3719)"
        },
        {
            pergunta: "Qual companheiro transmitiu mais de 1000 hadiths?",
            opcoes: ["Ali", "Abu Bakr", "Abdallah Ibn Masoud", "Anas Ibn Malik"],
            correta: 3,
            explicacao: "Anas Ibn Malik foi um dos seis companheiros que transmitiram mais de 1000 hadiths."
        },
        {
            pergunta: "No versículo: \"Ele era o segundo dos dois quando estavam na caverna e disse ao seu companheiro: Não te aflijas, pois Deus está conosco\" (9:40). A qual companheiro se refere?",
            opcoes: ["Abu Bakr", "Omar", "Otman", "Ali"],
            correta: 0,
            explicacao: "Abu Bakr acompanhou o Profeta ﷺ na caverna durante a Hégira, sendo \"o segundo dos dois\"."
        },
        {
            pergunta: "Qual companheiro recebeu o apelido de \"O Guardião desta comunidade\" do Profeta ﷺ?",
            opcoes: ["Abu Bakr", "Abu Ubayda", "Ibn Abbas", "Otman"],
            correta: 1,
            explicacao: "Toda comunidade tem um guardião, e o guardião desta comunidade é Abu Ubayda. (Sahih Muslim, 2419)"
        }
 
];

// =============================================
// VARIÁVEIS GLOBAIS
// =============================================
let perguntasDesafio = [];
let indiceAtual = 0;
let pontos = 0;
let erros = 0;
let tempoRestante = 15;
let timer;

// =============================================
// EVENTOS E FUNÇÕES
// =============================================
function iniciarDesafioGeral() {
    // Garante que qualquer timer anterior seja limpo
    clearInterval(timer);

    // Cria cópia e embaralha
    perguntasDesafio = [...todasAsPerguntas];
    perguntasDesafio.sort(() => Math.random() - 0.5);
    
    // Inicia quiz
    indiceAtual = 0;
    pontos = 0;
    erros = 0;
    
    document.getElementById("tela-escolha").style.display = "none";
    document.getElementById("tela-quiz").style.display = "block";
    
    atualizarContador();
    mostrarPerguntaAtual();
    iniciarCronometro();
}

function iniciarCronometro() {
    tempoRestante = 15;
    document.getElementById("contador-tempo").textContent = tempoRestante;
    timer = setInterval(() => {
        tempoRestante--;
        document.getElementById("contador-tempo").textContent = tempoRestante;
        if (tempoRestante <= 0) {
            clearInterval(timer);
            // Tempo esgotado = erro
            responder(null);
        }
    }, 1000);
}

function atualizarContador() {
    document.getElementById("contador-pergunta").textContent = 
        `Pergunta ${indiceAtual + 1} de ${perguntasDesafio.length}`;
}

function mostrarPerguntaAtual() {
    if (indiceAtual >= perguntasDesafio.length || erros >= 5) {
        mostrarResultado();
        return;
    }
    
    const q = perguntasDesafio[indiceAtual];
    
    document.getElementById("pergunta-texto").textContent = q.pergunta;
    
    const container = document.getElementById("opcoes-container");
    container.innerHTML = "";
    
    q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.className = "btn-opcao";
        btn.textContent = opcao;
        btn.onclick = () => responder(index);
        container.appendChild(btn);
    });
    
    document.getElementById("btn-proxima").disabled = true;
    document.getElementById("explicacao-box").innerHTML = "";
}

function responder(escolhaIndex) {
    clearInterval(timer);
    
    const q = perguntasDesafio[indiceAtual];
    const botoes = Array.from(document.querySelectorAll(".btn-opcao"));

    // Desabilita todas as opções
    botoes.forEach(btn => btn.disabled = true);

    if (escolhaIndex === null || escolhaIndex !== q.correta) {
        // Erro (tempo ou resposta errada)
        if (escolhaIndex !== null) {
            botoes[escolhaIndex].classList.add("errada");
        }
        botoes[q.correta].classList.add("correta");

        // Se tempo esgotado: mostra apenas a correta; se erro por escolha: mostra a escolhida e a correta
        botoes.forEach((b, i) => {
            if (escolhaIndex === null) {
                if (i !== q.correta) b.style.display = 'none';
            } else {
                if (i !== escolhaIndex && i !== q.correta) b.style.display = 'none';
            }
        });

        erros++;
    } else {
        // Acertou
        botoes[escolhaIndex].classList.add("correta");
        pontos++;

        // Mostra somente a opção correta
        botoes.forEach((b, i) => {
            if (i !== escolhaIndex) b.style.display = 'none';
        });
    }
    
    if (q.explicacao) {
        document.getElementById("explicacao-box").textContent = q.explicacao;
    }
    
    document.getElementById("btn-proxima").disabled = false;
    
    if (erros >= 5) {
        setTimeout(mostrarResultado, 2000);
    }
}

function mostrarProxima() {
    indiceAtual++;
    atualizarContador();
    mostrarPerguntaAtual();
    iniciarCronometro();
}

function mostrarResultado() {
    document.getElementById("tela-quiz").style.display = "none";
    document.getElementById("tela-resultado").style.display = "block";

    const total = perguntasDesafio.length;
    const percentual = Math.round((pontos / total) * 100);

    document.getElementById("acertos").textContent = pontos;
    document.getElementById("erros").textContent = erros;
    document.getElementById("percentual-texto").textContent = percentual + "%";
    document.getElementById("percentual-final").textContent = percentual + "%";

    let status = "Precisa melhorar...";
    if (percentual >= 80) status = "Excelente! MashaAllah";
    else if (percentual >= 60) status = "Muito bom!";
    else if (percentual >= 40) status = "Bom esforço";

    document.getElementById("status-final").textContent = status;

    // Animação simples do círculo
    animarProgresso(percentual);
}

function animarProgresso(final) {
    const circulo = document.getElementById("circulo-progresso");
    let atual = 0;
    const intervalo = setInterval(() => {
        atual += 2;
        if (atual >= final) {
            atual = final;
            clearInterval(intervalo);
        }
        circulo.style.background = `conic-gradient(var(--accent-color) ${atual * 3.6}deg, var(--secondary-color) 0deg)`;
    }, 18);
}

function reiniciarDesafio() {
    // Reinicia totalmente o desafio: limpa timer e inicia novamente
    clearInterval(timer);
    document.getElementById("tela-resultado").style.display = "none";
    iniciarDesafioGeral();
}

// Eventos
document.getElementById("btn-proxima").onclick = mostrarProxima;