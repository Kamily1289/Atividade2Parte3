function analisarTexto(texto) {
  
  const texLimpo = texto.replace(/[^\w\s]/gi, '').toLowerCase();

  const TotalLetras = texLimpo.replace(/\s/g, '').length;

  // Frequência de palavras
  const palavras = texLimpo.split(/\s+/).filter(Boolean);
  const frequenciaPalavras = {};
  
  palavras.forEach(palavra => {
    frequenciaPalavras[palavra] = (frequenciaPalavras[palavra] || 0) + 1;
  });


  const tamanhoTexto = texto.length;

  // Retornar um objeto com todas as métricas
  return {
    TotalLetras,
    frequenciaPalavras,
    tamanhoTexto
  };
}

const texto = "JavaScript é uma linguagem de programação. JavaScript é bom ";
console.log(analisarTexto(texto));
