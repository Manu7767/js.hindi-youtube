const marvel_heros = ["Thor" , "Ironman" , "Spiderman"];
const dc_heros = ["Superman" , "Flsh" , "Batman"];

// marvel_heros.push(dc_heros);NODE
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const AllHeros = marvel_heros.concat(dc_heros);
// console.log(AllHeros);

const All_new_heros = [...marvel_heros , ...dc_heros];
// console.log(All_new_heros);

const another_array = [2 , 3 , 4 , [3 , 5 ,6], 8 , 9 ,[2 , 4 ,5,[7 , 8 , 6] ,9 ,7] ];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

let score = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score, score2 , score3));


