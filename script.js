const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -500.00,
    date: '05/05/2021'
},
{
    id: 2,
    description: 'Projeto Assembléia',
    amount: 1000.00,
    date: '20/05/2021'
},
{
    id: 3,
    description: 'Internet',
    amount: -200.00,
    date: '15/05/2021'
}];

const transaction = {
    incomes(){
    
    },
    expenses(){

    },
    total(){

    }
}

const DOM = {
    transactionsContainer: document.querySelector('tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    }
}
