const client = {
   name: 'Thi',
   age: '20',
   phone:'123456',
   dependents: [{
     name: 'Son',
     age: '5',
     dataNasc: '21/02/2030'
    }]

}

client.dependents.push({
    name: 'second son',
    age: '2',
    dataNasc: '22/04/2033'
})

client.dependents.push({
    name: 'third son',
    age: '2',
    dataNasc: '22/04/2033'
})

client.dependents.push({
    name: 'forth son',
    age: '2',
    dataNasc: '22/04/2033'
})

//console.log(client)

const youngerSon = client.dependents.filter(dependent => dependent.dataNasc==='22/04/2033')
//console.log(youngerSon[1].name)

youngerSon.forEach(elements => console.log(`The youngest children are: ${elements.name}`))
