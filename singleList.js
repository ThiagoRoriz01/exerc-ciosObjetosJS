const clients = [{
    name: 'Thi',
    age: '20',
    phone:'123456',
    dependents: [
        {
          name: 'Son',
          age: '5',
          dataNasc: '21/02/2030' 
        },
        {
          name: 'second son',
          age: '2',
          dataNasc: '22/04/2033'
        }],

    },
    {
    name: 'Thi',
    age: '20',
    phone:'123456',
    dependents: [{
        name: 'futureSon',
        age: '5'
    }],
    }
]

const dependentList = [...clients[0].dependents, ...clients[1].dependents]
console.table(dependentList)