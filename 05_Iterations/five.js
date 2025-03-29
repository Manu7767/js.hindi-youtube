const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(item){
// console.log(item);

// })
// coding.forEach( (val)=>{
//     console.log(val);
    
// } )

// function printme (item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr)=>{
// console.log(item,index,arr);

// } )

const mycoding = [
    {
        langauageName: "Javascript",
        languageFileName: "js"
    },

    {
        langauageName: "java",
        languageFileName: "java"
    },

    {
        langauageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach( (item)=>{
console.log(item.langauageName);

} )