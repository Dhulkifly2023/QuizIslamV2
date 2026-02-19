// muhammad.js

let nivelAtual = "";
let perguntas = [];
let indiceAtual = 0;
let pontos = 0;

const bancoPerguntas = {
    iniciante: [
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
    ],

    
    intermediario: [
        {
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
        }
    ],

    avancado: [
        {
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
    if (percentual >= 80) status = "Excelente!";
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
