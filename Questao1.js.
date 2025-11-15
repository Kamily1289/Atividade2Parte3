const produtosJSON = `{
    "itens": [
        {
            "id": 1,
            "nome": "Notebook Gamer",
            "preco": 2999.99,
            "categoria": "eletronicos",
            "tags": ["tecnologia", "computacao", "gamer"]
        },
        {
            "id": 2, 
            "nome": "Mesa Escritório",
            "preco": 450.50,
            "categoria": "moveis",
            "tags": ["escritorio", "madeira", "profissional"]
        }
    ]
}`;

// Função renomeada para um nome mais descritivo
function cntProdutos(jsonString) {

    // Converter string JSON em objeto
    const a = JSON.parse(jsonString);
    let listacnt = [];

    // Iterar sobre a lista de itens dentro do objeto 'itens'
    for (const item of a.itens) {
        

        const precoFormatado = item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        let texto = `${item.nome} - ${precoFormatado} (CATEGORIA: ${item.categoria})`;

        listacnt.push(texto);
    }

    return listacnt;
}

console.log(cntProdutos(produtosJSON));
