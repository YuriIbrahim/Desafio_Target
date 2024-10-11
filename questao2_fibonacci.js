// Questão 2: Verificar se um número pertence à sequência de Fibonacci

function isFibonacci(num) {
    let a = 0, b = 1, temp;
    
    // Loop que gera números de Fibonacci até alcançar ou ultrapassar o número informado
    while (b < num) {
        temp = a;   // Armazena o valor anterior de 'a'
        a = b;      // Atualiza 'a' com o valor de 'b'
        b = temp + b; // Calcula o próximo número da sequência
    }
    
    // Verifica se o número informado é igual a algum número da sequência ou é zero
    return b === num || num === 0;
}

// Defina o número a ser verificado
const number = 21; // Substitua por qualquer número desejado

// Exibe se o número pertence à sequência ou não
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
