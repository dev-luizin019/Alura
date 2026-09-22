Desafio: Sistema de Processamento de Ordens em Lote
Você deve criar um script que gerencia uma fila de transações financeiras com simulação de processamento assíncrono, relatórios analíticos e limpeza periódica.

Regras e Requisitos Técnicos
Estrutura de Dados Inicial (Objetos e Arrays)
Crie uma lista inicial contendo no mínimo 6 ordens. Cada ordem deve conter:

id (número ou string única)

cliente (string)

tipo ("DEPOSITO" ou "SAQUE")

valor (número decimal)

status ("PENDENTE", "PROCESSADO", "REJEITADO")

criadoEm (new Date())

Decisão e Validação

Saques com valor acima de R$ 2.000,00 devem ser rejeitados automaticamente por segurança.

Transações com valor menor ou igual a 0 são consideradas inválidas e devem ser rejeitadas.

Transações válidas têm seu status alterado para "PROCESSADO".

Higher-Order Functions (Obrigatório: .map, .filter, .reduce)
Crie uma função gerarRelatorio(lista) que calcula e exibe no terminal:

Lista apenas com os nomes dos clientes que tiveram transações aprovadas (.filter + .map).

Total monetário movimentado em transações aprovadas (.reduce).

Saldo final resultante (Depósitos somam, Saques subtraem) de todas as transações aprovadas (.reduce).

Agrupamento de contagem: quantas ordens foram aprovadas vs. rejeitadas.

Fundamentos Modernos (ES6+)

Use destructuring ao iterar ou acessar propriedades das ordens (const { cliente, valor, tipo } = ordem).

Use spread operator (...) para retornar novos objetos atualizados sem mutar diretamente o array original.

Use arrow functions e template literals.

Assincronismo e Temporizadores (setTimeout e setInterval)

Crie uma função assíncrona que processa uma ordem por vez da fila a cada 1 segundo (setTimeout recursivo ou encadeado por Promise).

Exiba no console uma mensagem indicando qual item está sendo processado no momento.

Utilize setInterval para rodar a cada 3 segundos um monitor de progresso (ex: "Progresso: X de Y ordens restantes na fila...").

Quando a fila esvaziar, limpe o intervalo (clearInterval), execute o gerarRelatorio e finalize a execução com uma mensagem de encerramento via setTimeout de 500ms.