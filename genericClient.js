function Client(name, cpf, email, saldo) {
    this.nome = name
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.deposit = function(value) {
        this.saldo += value
    }
}

const thi = new Client('Thiago', '1234567', 'thiroriz@gmail.com', 500)

console.log(thi)