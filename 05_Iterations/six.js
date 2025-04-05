// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item)=>{
// console.log(item);

// } )
// console.log(values);

// const myNums = [2, 3 , 4, 5, 6, 7, 8, 9,]

//   const newNums =  myNums.filter((num)=> num > 4) // agar scop start kar denge to return keyword ka use karna padega
//   console.log(newNums);
  
const books = [
    {title: 'Book One', genre: 'Fiction', publish: '1981', edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', publish: '1992', edition: 2008},
    {title: 'Book three', genre: 'History', publish: '1999', edition: 2007},
    {title: 'Book four', genre: 'Non-Fiction', publish: '1989', edition: 2010},
    {title: 'Book five', genre: 'Science', publish: '2009', edition: 2014},
    {title: 'Book six', genre: 'Fiction', publish: '1987', edition: 201},
    {title: 'Book seven', genre: 'History', publish: '1986', edition: 1996},
    {title: 'Book eight', genre: 'Science', publish: '2011', edition: 2016},
    {title: 'Book nine', genre: 'Non-fictio', publish: '1981', edition: 1989},
];

let userBooks = books.filter((bks)=> bks.genre === 'History')

userBooks = books.filter((bks)=> {

    return bks.publish >= 1995 && bks.genre==='History'})

console.log(userBooks);


