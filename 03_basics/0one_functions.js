// function addTwoNumbers (number , number2){
// console.log(number + number2);

// }
function addTwoNumbers (number , number2){
let result = number + number2
return result
console.log("manu"); // result ke baad kuch bhi print nahi hota hai...


}
// console.log("Result" , result);

// const result = addTwoNumbers(4 , 5)
// // console.log("result", result);
// addTwoNumbers(3,5)

function LoginuserName (username = "sam"){
if(username === undefined){
// console.log("Please Enter a Username");

return

}

return `${username} just loged In`
}
// console.log(LoginuserName("Manu"));

function CalculateCartPrice(val, val2 , ...num){    //-- Rest Operator
return num
}
// console.log(CalculateCartPrice(200 , 400 , 500 , 2000));

const user = {
    username: "Manu",
    Price: 299
}

function handleObject(anyobject){

// console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);

}

handleObject(user)


const myArry = [200 , 400 , 600 , 800]

function returnsecondvalue(getArray){

return getArray[2]
}
console.log(returnsecondvalue(myArry));

