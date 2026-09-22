import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function criaArquivo(conteudo) {
  const nome = "arquivo02.txt";

  const novoArquivo = path.join(__dirname, "texts", nome);

  let words = JSON.stringify(conteudo);

  try {
    await fs.promises.writeFile(novoArquivo, words);
    console.log("arquivo criado com sucesso");
  } catch (erro) {
    throw erro;
  }
}



// export function criaArquivo(conteudo) {
//   const nome = "arquivo02.txt";

//   const novoArquivo = path.join(__dirname, "texts", nome);

//   let words = JSON.stringify(conteudo);

//   fs.promises
//     .writeFile(novoArquivo, words)
//     .then(() => {
//       console.log("arquivo criado com sucesso");
//     })
//     .catch((erro) => {
//       throw erro;
//     })
//     .finally(() => {
//       console.log("Sistema finalizado");
//     });
// }
