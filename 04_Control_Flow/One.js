// If
// const isUserLoggedIn = true
 
// if(2==="2"){
// console.log("exicuted");
// }else{
//     console.log("not exicuted");
    
// }


//comparison's
// < , >, <=, >=, == , !=, ===, !==

// const score = 200

// if (score>50) {

//     const power = " fly"
//     console.log(`User power${power}`);
    
// }
// console.log(`User power${power}`); // not a global scop

// const balance = 2000
// if (balance>500) console.log("test"), console.log("test2"); // Not a good Paractice

const UserLoggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (UserLoggedIn && debitcard && 2==3) {

    console.log("Allow to buy Course");
    
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User Logged In");
    
}