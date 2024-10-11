// Questão 3: Análise de faturamento diário de uma distribuidora

// Array de objetos contendo o faturamento diário (JSON fornecido)
const dados = [ /* Coloque o JSON fornecido aqui */ ];

let soma = 0;
let diasComFaturamento = 0;
let menorValor = Infinity;
let maiorValor = -Infinity;
let acimaDaMedia = 0;

// Loop para calcular a soma, menor e maior valor de faturamento
dados.forEach(dia => {
    if (dia.valor > 0) {  // Ignora dias sem faturamento (valor 0.0)
        soma += dia.valor;   // Soma o faturamento do dia
        diasComFaturamento++; // Conta os dias com faturamento

        // Atualiza o menor valor
        if (dia.valor < menorValor) menorValor = dia.valor;
        // Atualiza o maior valor
        if (dia.valor > maiorValor) maiorValor = dia.valor;
    }
});

// Calcula a média do faturamento mensal
const media = soma / diasComFaturamento;

// Conta os dias com faturamento acima da média
dados.forEach(dia => {
    if (dia.valor > media) acimaDaMedia++;
});

// Exibe os resultados
console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Dias com faturamento acima da média: ${acimaDaMedia}`);
