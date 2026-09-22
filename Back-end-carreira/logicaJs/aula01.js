const people = [
  {
    name: "Luiz",
    age: 24,
    favoriteFruits: ["manga", "abacate", "açai"],
    pontos: [12, 56, 87],
    clt: false,
  },
  {
    name: "Maria",
    age: 13,
    favoriteFruits: ["manga", "abacaxi", "banana"],
    pontos: [11, 4, 45],
    clt: false,
  },
  {
    name: "Jonas",
    age: 56,
    favoriteFruits: ["banana", "figo", "pera"],
    pontos: [98, 7, 1],
    clt: true,
  },
];

const [first, ...rest] = [...people];
// const [first] = [...people];
// // console.log(first)
// first.name = "Luiz Eduardo";
// // console.log(rest)
// // console.log(people)

// function getName({ name }) {
//   console.log(name);
// }
// // getName(first)

const { favoriteFruits , pontos} = first;
// // console.log(favoriteFruits)

// const text = favoriteFruits.reduce((acumulador, item) => {
//   acumulador += `Nome da fruta: ${item}\n`;
//   return acumulador;
// }, "");
// // console.log(text);

// const dobrando = pontos.map((item)=>item *2)
// // console.log(dobrando)

// const filtrado = people.filter((item)=> item.name === "Luiz Eduardo")
// // console.log(filtrado)

// //  favoriteFruits.splice(1, 0, 'Uva')
// // console.log(favoriteFruits)
// //  favoriteFruits.splice(1, 2, 'Uva')
// // console.log(favoriteFruits)

console.log(favoriteFruits)
// [ 'manga', 'abacate', 'açai' ]
const selectFruit1 = favoriteFruits.slice(0,2)
console.log(selectFruit1)

const selectFruit2 = favoriteFruits.slice(2)
console.log(selectFruit2)