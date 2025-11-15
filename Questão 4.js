const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(11) 99999-9999",
      nome: "Fulano de Tal"
    }
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
};

function sanitizarDados(dados) {

  dados.usuarios.forEach(usuario => {
    usuario.cpf = "***.***.***-**";
    usuario.cartaoCredito = "****-****-****-8888";
    usuario.telefone = "(11) *****-****";
  });
  dados.metadata.token = dados.metadata.token.substring(0, 10) + "...";
  delete dados.metadata.ip; // Remover o IP
  return dados;
}

console.log("Dados Originais:");
console.log(dadosSensiveis);

console.log("\nDados Sanitizados:");
console.log(sanitizarDados(dadosSensiveis));
