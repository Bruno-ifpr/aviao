// ================================================
// AGENTE IoT - PAINEL DE PARTIDAS AUTOMÁTICO
// ================================================

// 1. DADOS SIMULADOS DA FROTA
let frotaAtiva = [
    { codigo: "G3-100", destino: "São Paulo", status: "Embarque", tempoParaDecolagem: 5 },
    { codigo: "LA-222", destino: "Rio de Janeiro", status: "Embarque", tempoParaDecolagem: 10 },
    { codigo: "AZ-999", destino: "Campinas", status: "Aguardando", tempoParaDecolagem: 15 }
];

// 2. FUNÇÃO VISUAL
function renderizarPainel() {
    let tela = document.getElementById("painel");
    tela.innerHTML = "<h2>Painel de Partidas Automático 🛫</h2>";

    frotaAtiva.forEach(voo => {
        let cor = voo.status === "Decolado" ? "green" : (voo.tempoParaDecolagem <= 5 ? "red" : "white");

        tela.innerHTML += `
            <div style="color: ${cor}; border: 1px solid gray; margin: 5px; padding: 10px;">
                <strong>${voo.codigo}</strong> para ${voo.destino} <br>
                Status: ${voo.status} | Decola em: ${voo.tempoParaDecolagem}s
            </div>
        `;
    });
}

// ========================================================
// DESAFIO 1: O AGENTE AUTÔNOMO
// ========================================================
function varreduraDeRotina() {
    frotaAtiva.forEach(voo => {
        // A) Se o avião já decolou, ignore.
        if (voo.status === "Decolado") return;

        // B) Diminui 1 segundo enquanto houver tempo.
        if (voo.tempoParaDecolagem > 0) {
            voo.tempoParaDecolagem -= 1;
        }

        // C) Quando chegar exatamente a zero, decola.
        if (voo.tempoParaDecolagem === 0) {
            voo.status = "Decolado";
            console.log(`🚨 ATENÇÃO: O voo ${voo.codigo} acaba de decolar!`);
        }
    });

    // D) Atualiza a tela após alterar os dados.
    renderizarPainel();
}

// ========================================================
// DESAFIO 2: LIGANDO O ROBÔ
// ========================================================
console.log("Iniciando Agente IoT da Torre de Controle...");

setInterval(varreduraDeRotina, 1000);

// Primeira renderização.
renderizarPainel();
