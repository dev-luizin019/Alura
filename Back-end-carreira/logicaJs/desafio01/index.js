const prompt = require(prompt - sync)();

const accounts = [];

function createAccount() {
  const number = prompt("Digite número da conta:");
  const name = prompt("Digite nome do cliente:");

  const account = {
    name,
    number,
    balance: 0,
    transitions: [],
    createdAt: new Date(),
  };
  return account;
}

function saveAccount(account) {
  return accounts.push(account);
}

function getAccont(accounts, accountNumber) {
  const account = accounts.filter(
    (account) => account.number === accountNumber,
  );

  return account;
}

function showAccount(account) {
  console.log(`------- Conta -------`);
  console.log(`Número: ${account.number}`);
  console.log(`Nome: ${account.name}`);
  console.log(`Saldo: ${account.balance}`);
  console.log(`Data de criação: ${account.createdAt}`);
  return;
}

// saque
function withdraw(accountNumber, value) {
  const account = getAccont(accountNumber);

  if (!account) {
    console.log("Conta não encontrada!");
    return false;
  }

  if (account.balance >= value) {
    account.balance -= value;
    return true;
  } else {
    return false;
  }
}

// deposito
function deposit(accountNumber, value) {
  const account = getAccont(accountNumber);

  if (!account) {
    console.log(`Conta de número ${accountNumber}não encontrada!`);
    return false;
  }
  account.balance += value;
  return true;
}

function transetion() {
  const accountNumber1 = prompt(
    "Qual o número da conta que vai enviar o valor?",
  );
  const accountNumber2 = prompt(
    "Qual o número da conta que vai receber o valor?",
  );
  const value = prompt("Qual é o valor da transferencia?");

  const account1 = getAccont(accountNumber1);
  const account2 = getAccont(accountNumber2);

  const time1 = setTimeout(() => {
    console.log("Transação iniciada aguarde, alguns segundos!");
  }, 1000);
  const time2 = setTimeout(() => {
    console.log(`Valor retirado da conta de ${account1.name}`);
  }, 1000);
  const time3 = setTimeout(() => {
    console.log(`Valor transferido para ${account2.name}!`);

    account1.transetion.push({
      action: "envio",
      value,
      status: "aprovada",
    });
    account1.transetion.push({
      action: "recebimento",
      value,
      status: "aprovada",
    });
  }, 1000);

  time1;
  if (withdraw(accountNumber1, value)) {
    time2;
    if (deposit(accountNumber2, value)) {
      time3;
      console.log("Transferencia realizada com sucesso");
      return;
    }
  } else {
    console.log(
      `Erro ao tantar transferencia de valor! O conta ${accountNumber1} não possúi saldo fuficiente!`,
    );
    account1.transetion.push({
      action: "envio",
      value,
      status: "reprovada",
    });
    account1.transetion.push({
      action: "recebimento",
      value,
      status: "reprovada",
    });
    return;
  }
}

function getAllAccounts() {
  console.log("Contas registradas no sistema");
  accounts.forEach((index, account) => {
    console.log(`---CONTA #${index}---`);
    console.log(`Número: ${account.number}`);
    console.log(`Nome: ${account.name}`);
    console.log(`Saldo: ${account.balance}`);
    console.log(`Data de criação: ${account.createdAt}`);
  });
  return;
}

function getAccountNumberForOperation() {
  const accountNumeber = prompt("Qual o número da conta quer realizar saque?");

  const account = getAccont(accountNumeber);

  if (!account) {
    console.log("Conta não encontrada");
    return;
  }

  return (accountNumeber, account);
}

function menu(option) {
  let accountNumeber;
  let account;
  switch (option) {
    case 1:
      getAllAccounts();
      break;
    case 2:
      account = createAccount();
      setTimeout(() => {
        console.log("Salvando dados...");
        saveAccount(account);
      }, 1000);
      break;
    case 3:
      [accountNumeber, account] = getAccountNumberForOperation();

      setTimeout(() => {
        console.log("Realizando saque, aguarde...");
      }, 1000);

      if (withdraw(accountNumeber, value)) {
        console.log("Saque realizado com sucesso!");
        showAccount(account);
      } else {
        console.log("Valor de saque requerido indisponível");
      }
      break;
    case 4:
      [accountNumeber, account] = getAccountNumberForOperation();

      setTimeout(() => {
        console.log("Realizando deposito, aguarde...");
      }, 1000);

      if (deposit(accountNumeber, value)) {
        console.log("Deposito realizado com sucesso!");
        showAccount(account);
      } else {
        console.log("Erro ao tentar realizar deposito");
      }
      break;
    case 5:
      transetion();
      break;
    case 6:
      break;

    case 6:
      break;

    case 6:
      break;
    case 0:
      console.log("Encerrando sistema...");
      setTimeout(() => {
        console.log("Sistema bancario encerrado!");
      }, 1000);
      break;
    default:
      console.log("Opção inválida!");
  }
}
