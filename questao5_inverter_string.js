// Questão 5: Inverter uma string sem usar funções prontas como reverse

// Função que inverte uma string
function inverterString(str) {
    let invertida = "";

    // Loop que percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i]; // Concatena os caracteres na nova string
    }

    return invertida; // Retorna a string invertida
}

// Defina a string a ser invertida
const palavra = "exemplo"; // Substitua por qualquer string desejada

// Exibe a string invertida
console.log(inverterString(palavra));
