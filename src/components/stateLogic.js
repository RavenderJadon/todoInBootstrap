// let a =[1,2,3,4,5]
// console.log(a);
// const b = [...a];
// console.log(b);
// a.push(6);
// console.log(a);
// console.log(b);
const months = ['Jan','feb', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);

// months.splice(4, 1, 'May');
// console.log(months);
console.log(months);
months.splice(2, 1);
console.log(months);
console.log(months.length);

let a=[1,2,3,4,5,6];
console.log(a);
let aCopy = [...a];
console.log(aCopy);
 const [c] = aCopy.splice(2,1);
console.log(c);
console.log(aCopy);
console.log(c);
aCopy.splice(4,0,c);
console.log(aCopy)

