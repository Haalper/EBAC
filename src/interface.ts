class conta {
    numeroDaConta: number;
    saldo: number = 0

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class contaSalario extends conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

class contaCorrente extends conta implements ITransacional, IExemplo2 {
    transferir(valor: number, destinatario: conta) {
        destinatario.saldo += valor;
        return true;
    }
    taxaTransferencia: number = 0;

}