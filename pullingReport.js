const client = {
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
        }
      ],
  
      balance: 100,
  
      deposit: function(value) {
        this.balance += value
      }
   }

   let report = ''

   for(let info in client) {
    if(typeof client[info] === 'object' || typeof client[info] === 'function') {
        continue
    }else {
        report += `
        ${info} ==> ${client[info]}`
    }
   }

   console.log(report)