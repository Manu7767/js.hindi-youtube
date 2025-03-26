// Singleton

//Object literals
const jsUser = {
    name: "Manu",
    age: 20,
    location: "Jaipur",
    email: "khan@manu",
    IsloggedIn: false,
    Lastlogindays: ["Monday" , "Sturday"],

}


// console.log(jsUser.email);
// console.log(jsUser["email"]);

// jsUser.email ="manu@chatgpt.com"
// console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email = "manu@microsoft.com"
// console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`);
    
}
console.log(jsUser.greetingTwo());
