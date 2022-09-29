function Client(name, cpf, email, saldo) {
    this.nome = name
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.deposit = function(value) {
        this.saldo += value
    }
}

function SavingClient(name, cpf, email, saldo, saldoPoup) {
    Client.call(this, name, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const poupClient = new SavingClient('thi', '234455564332', 'thiroriz24@gmail.com', 500, 550)
console.log(poupClient)

SavingClient.prototype.depositPoup = function(value) {
    this.saldoPoup += value
}

poupClient.depositPoup(30)
console.log(poupClient.depositPoup)