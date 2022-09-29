const client = {
    name: 'Thi',
    age: '20',
    phone:'123456',
    dependents: [
        {
          name: 'Son',
          age: '5',
          dataNasc: '21/02/2030' },
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
   
   function assuranceOffer(obj){
    const clientsProps = Object.keys(obj)
    if(clientsProps.includes('dependents')) {
      console.log(`Assurance offer for: ${obj.name}`)
    }
   }

console.log(Object.values(client))
console.log(Object.entries(client))
assuranceOffer(client)