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

const thi = new Client('Thiago', 'thiroriz@gmail.com', '12321567', 300)

thi.deposit(30)
thi.exibirSaldo()
console.log(thi)
