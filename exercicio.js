function animal(comer, dormir, pular, andar) {
    this.comer = comer;
    this.dormir = dormir;
    this.pular = pular;
    this.andar = andar;
}

function cachorro(comer, dormir, pular, andar, latir) {
    this.latir = latir;

    animal.call(this, comer, dormir, pular, andar);
}

function gato(comer, dormir, pular, andar, miar) {
    this.miar = miar;

    animal.call(this, comer, dormir, pular, andar);
}

const meuCachorro = new cachorro(true, true, true, true, "Au Au");
const meuGato = new gato(true, true, true, true, "Miau");
const meuOutroCachorro = new cachorro(true, true, true, true, "Auuuuuu");


