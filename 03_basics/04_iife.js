// // IIFE(Immediately Invoked function Expressions)
// function Chai(){
// console.log(`DB Connected`);

// }
// Chai()

// (function Chai(){
// console.log(`DB Connected`);

// })
// // ()

// (function chai(name){
//     //Named iife
//     console.log(`Chai Ready ${name}`);
    
// })('Manu');

// (()=>{
//     console.log(`Chai is Already`);
    
// })('Manu')

(function chai(name){
    console.log(`chai ready ${name}`);
    
})('Manu');

((name)=>{
    console.log(`Chai is Already ${name}`);
    
})('Manu');