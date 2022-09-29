const client = {
    name: 'Thi',
    age: '20',
    phone: '123456'
}

client.dependents = {
    name: 'Son',
    age: '5',
    dataNasc: '21/02/2030'
}
console.log(client)

client.dependents.name = 'fisrt son'
console.log(client)
