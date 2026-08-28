import Voo from './Voo.js';
import Aeroporto from './Aeroporto.js';

let aeroportoCWB = new Aeroporto("Afonso Pena");

let voo1 = new Voo("G3-100", "São Paulo");
let voo2 = new Voo("LA-200", "Rio de Janeiro");


aeroportoCWB.adicionarVooNoRadar(voo1);
aeroportoCWB.adicionarVooNoRadar(voo2);

let vooAchado = aeroportoCWB.buscarVoo("LA-200");
console.log("---Resultado da Busca---");
console.log(vooAchado); 

import TorreDeControle from "./Torre.js";

// Teste do Singleton
let torre1 = new TorreDeControle();
let torre2 = new TorreDeControle();

console.log(torre1 === torre2);

// Botão de pouso geral
document.getElementById("btnPousoGeral").addEventListener("click", () => {
    console.log(torre1.autorizarPouso("G3-100"));
});

// Botão de pouso de emergência
document.getElementById("btnPousoEmergencia").addEventListener("click", () => {
    console.log(torre2.autorizarPouso("AZ-999"));
});