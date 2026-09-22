import { criaArquivo } from "./criaArquivo.js";
import { trataErros } from "./error.js";
import fs from "fs";

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
// ler um arquivo apartir do nome passado via terminal
fs.readFile(link, "utf-8", (erro, textFile) => {
  try {
    if (erro) throw erro;

    const text = textFile;

    quebraParagrafos(text);
  } catch (erro) {
    trataErros(erro);
  }
  // finally {
  //   console.log("Sistema finalizado!");
  // }
});

// node fs.js ./texts/arquivo.txt
function quebraParagrafos(text) {
  const paragrafos = text.toLowerCase().split("\n");

  // console.log(paragrafos);
  // flatMap faz a extração de array internos em um array unico ex:
  // [ 4, 5, 778, 2, [ 2, 56, 7] , 4] ---> [4,5, 778, 2, 2 , 56 ,7 , 4]
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    const resultado = verificaPalavras(paragrafo);

    if (Object.keys(resultado).length === 0) return [];

    return resultado;
  });
  criaArquivo(contagem);
  console.log(contagem);
}

function verificaPalavras(text) {
  const textoLimpo = limpaCaracteres(text);
  const arrayPalavras = textoLimpo.split(" ");
  const contador = {};
  arrayPalavras.forEach((item, index) => {
    if (item.trim() != "") {
      contador[item] = (contador[item] || 0) + 1;
    }
  });
  return contador;
}

function limpaCaracteres(text) {
  const semCaracteres = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9]/g, "");
  return semCaracteres.replace(/\r/g, "");
}
