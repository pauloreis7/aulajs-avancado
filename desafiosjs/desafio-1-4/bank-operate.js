//User's Bank operations

//data entry

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

//Add transactions

function createTransaction (transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance -transaction.value
    }
}

//Highest transaction with its type

function getHigherTransactionByType (type) {
   let higherTransaction
   let higherValue = 0

   for ( let transaction of user.transactions) {
       if (transaction.type == type && transaction.value > higherValue) {
           higherValue = transaction.value
           higherTransaction = transaction
       }
   }

   return higherTransaction

}

//Transactions avarage

function getAverageTransactionValue (){
    let totValueTran = 0

    for ( let transaction of user.transactions) {
        totValueTran = totValueTran + transaction.value
    }

    transactionAvarage = totValueTran / user.transactions.length

    return transactionAvarage
}

//How many trasactions of each type

function getTransactionsCount () {
   let creditTransation = 0
   let debitTransation = 0

   for ( let transaction of user.transactions) {
       if (transaction.type == 'credit') {
           creditTransation = creditTransation + 1
       } else {
           debitTransation = debitTransation + 1
       }
   }

   const transactionsTypes = {
       credit: creditTransation,
       debit: debitTransation
   }

   return transactionsTypes
}

//Transaction´s creation

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

//Data's insertion in screen

console.table( `Your balance is : ${user.balance} $`)

console.table( getHigherTransactionByType('credit'))
console.table( getHigherTransactionByType('debit'))

console.table(`Your transactions avarage is: ${getAverageTransactionValue()}`)

console.table( getTransactionsCount())