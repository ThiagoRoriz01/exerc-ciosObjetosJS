class Client{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    deposit(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class SavingClient extends Client{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const thi = new SavingClient('thi', 'thiroriz@gmail', '223344556677', 200, 100)
console.log(thi)

thi.deposit(100)
thi.depositarPoup(100)

console.log(thi)
