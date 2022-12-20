const accounts = [
  {
    'name': 'Arun',
    'accountNo': '001',
  },
  {
    'name': 'Babu',
    'accountNo': '002',
  },
  {
    'name': 'Chandra',
    'accountNo': '003',
  },
];
let balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '001',
    'type': 'deposit',
    'amount': 500,
  },
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '002',
    'type': 'deposit',
    'amount': 300,
  },
  {
    'accountNo': '002',
    'type': 'withdrawal',
    'amount': 200,
  },
  {
    'accountNo': '003',
    'type': 'deposit',
    'amount': 200,
  },
];

const operationSelector = {
  withdrawal: -1,
  deposit: +1
}

const getBalances = (account, balances) => ({
  ...account, balance: balances[account.accountNo]
})

const updateBalancesWithTransactions = (balances, transactions) => {
  transactions.map((transaction) => balances = ({
    ...balances, [transaction.accountNo]: balances[transaction.accountNo] + transaction.amount * (operationSelector[transaction.type]),
  }))
  return balances;
}


const displayBalances = (accounts, balances) => {
  const accountDetails = accounts.map((account) => getBalances(account, balances));
  console.log(accountDetails);
};

// Do not change below this line.
var main = () => {
  console.log('Balances before transactions');
  displayBalances(accounts, balances);
  const updatedBalances = updateBalancesWithTransactions(balances, transactions);
  console.log('Balances after transactions');
  displayBalances(accounts, updatedBalances);
}

main();