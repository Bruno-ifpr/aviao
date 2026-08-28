class TorreDeControle {
    static instanciaUnica;

    constructor() {
        // Verifica se a torre já foi criada
        if (TorreDeControle.instanciaUnica) {
            return TorreDeControle.instanciaUnica;
        }

        // Primeira criação da torre
        this.nome = "Torre Central";
        this.pistaOcupada = false;

        // Guarda a única instância
        TorreDeControle.instanciaUnica = this;
    }

    autorizarPouso(voo) {
        if (this.pistaOcupada) {
            return `Pista ocupada, ${voo} arremeta!`;
        }

        this.pistaOcupada = true;
        return `Pouso autorizado para ${voo}.`;
    }
}

export default TorreDeControle;