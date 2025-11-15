const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

const params = new URLSearchParams(queryString);
const jsonObj = Object.fromEntries(params);

console.log(jsonObj);
