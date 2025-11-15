const usuarios = [
  { nome: " João Silva ", email: "JOAO@example.com" },
  { nome: "MARIA", email: "maria@EXample.com" }
];

function normalizarUsuario(usuario) {
  return {
    nome: usuario.nome.trim().toLowerCase().split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' '),
    email: usuario.email.toLowerCase()
  };
}

const usuariosNormalizados = usuarios.map(normalizarUsuario);

console.log(usuariosNormalizados);
