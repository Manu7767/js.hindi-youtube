const user = {
    username: "manu" ,
    price: 999,

    WelcomeMessage: function(){
        // console.log(`${this.username} , Welcome to website`);
        
    }
}

//  hello

user.username = "Sam"
user.WelcomeMessage()
// user.WelcomeMessage()

const chai =  ()=>{

    let username = "Manu"
    // console.log(this.username);
    

}
// chai()

// const addtwo = (num, num2)=>{

//     return num + num2

// }   
// console.log(addtwo(4,5))

// const addtwo = (num, num2)=> num + num2
// console.log(addtwo(4,5))

const addtwo = (num, num2)=> (num + num2)     // {},me return ka use hoga , (),me return ka use nahi hogaa..
console.log(addtwo(4,5))

   

