const myNums = [2, 3 ,4]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, curr)=> acc+ curr,0)

console.log(myTotal);

const ShoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "Mobile dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]
const priceToPay = ShoppingCart.reduce((acc, item)=> acc + item.price,0)

console.log(priceToPay);
