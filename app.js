
const expenseName = document.getElementById('expenseName')
const expenseAmount = document.getElementById('expenseAmount')
const addExpenseButton = document.getElementById('addExpenseButton')
console.log(expenseName);
console.log(expenseAmount);
console.log(addExpenseButton);

let expenses = []



addExpenseButton.addEventListener('click', () => {

    const expenseName = document.querySelector('#expenseName').value
    const expenseAmount = parseFloat(document.querySelector('#expenseAmount').value)
    console.log(expenseName);
    console.log(expenseAmount);


    if (expenseName && !isNaN(expenseAmount)) {
        const expense = {
            name: expenseName,
            amount: expenseAmount
        }; 
        expenses.push(expense)
        console.log(expenses);
 }else {
    alert('Enter a valid input')
}

    const defaultExpenseName = document.getElementById("expenseName").value = "";
    const defaultExpenseAmount = document.getElementById("expenseAmount").value = "";
    console.log(defaultExpenseAmount);
    console.log(defaultExpenseName);

    inputExpenseList()
    sumTotalExpense()
})


const inputExpenseList = () => {
    const expenseList = document.querySelector('#expenseList')
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
        const itemList = document.createElement('li')
        itemList.textContent = `${expense.name}:  #${expense.amount}`
        expenseList.appendChild(itemList)
    })
}

const sumTotalExpense = () => {
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const randUp = document.getElementById("totalExpense").textContent = `Total: #${totalExpense}`;
    console.log(randUp);
}
