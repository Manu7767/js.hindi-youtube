// for of 

const arr = [2 , 3 , 4 ,5 ,6 ,7 ,8]

for (const num of arr) {
//  console.log(num);
    
}

const map = new Map()
map.set('Ind', "India")
map.set('Usa', "United State of America")
map.set('Fr', "France")

// console.log(map);/

for (const [key,value] of map) {
//  console.log(key, '-:', value);
    
}

const myObject = {
    'game': 'NFS',
    'game2': 'spiderman'
}
 for (const [key , value] of myObject) {
    console.log(key, '-:', value);         // --- Not Iterrable
 }