// Singleton Object's

const tinderuser = new Object()

tinderuser.id = "2323"
tinderuser.name = "Sam"
tinderuser.isloggedIn = true

// console.log(tinderuser);

const regularuser = {
    email: "some@342343.com",
    fullname: {
        userfullname: {
            firstName: "Manu",
            LastName: "Khan"
        }
    }
}

// console.log(regularuser.fullname);

const obj = {2 : "a", 3: "b" }
const obj2 = {4: "c", 5: "d"}

// const obj3 = Object.assign({}, obj , obj2);

const obj3 = {...obj , ...obj2}

// // console.log(obj3);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser))


// console.log(tinderuser.hasOwnProperty('isloggedIn'))

const course = {
    courseName : "Js in hindi",
    Price : "999",
    courseInstructer: "Hitesh",
}

const {courseInstructer: instuctor} = course

// console.log(courseInstructer);
console.log(instuctor);



