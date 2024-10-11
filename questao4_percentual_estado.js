// Questão 4: Cálculo do percentual de faturamento por estado

// Objeto contendo o faturamento por estado
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total somando os valores dos estados
const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Loop para calcular e exibir o percentual de cada estado
for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
