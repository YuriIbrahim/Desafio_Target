// Questão 1: Soma os números de 1 até o valor de 'INDICE'

// Definindo as variáveis
let INDICE = 13;
let SOMA = 0;
let K = 0;

// Loop que soma os números de 1 até 'INDICE'
while (K < INDICE) {
    K = K + 1;       // Incrementa o valor de K
    SOMA = SOMA + K; // Adiciona o valor de K à soma
}

// Exibe o resultado da soma total
console.log(SOMA);
