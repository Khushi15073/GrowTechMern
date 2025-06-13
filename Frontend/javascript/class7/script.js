
// function isPrime(num) {
   
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true
//     } 
// for (let i = 1; i <=10; i++) {
//   if (isPrime(i)) {
//     console.log(i + " is a prime number.");
//   }
//   else {
//     console.log(i + " is not a prime number.");
//   }
    
// }
// function isperfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === num;
// }
// for (let i = 1; i <=10; i++) {
//   if (isperfect(i)) {
//     console.log(i + " is a perfect number.");
//   }
//   else {
//     console.log(i + " is not a perfet number.");
//   }
    
// }
// function isstrong(){

// }
// function perfect(num){
//     let sum =0;
//     for (let i = 0; i < num; i++) {
//        if (num%i===0) {
//         sum=+i;
        
//        }
        
//     }
// return sum===num;
// }
// count the number of interger in given string
// str="mohan123rai12"
 let count = 0;
 function countIntegers(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i]==1||str[i]==2||str[i]==3||str[i]==4||str[i]==5||str[i]==6||str[i]==7||str[i]==8||str[i]==9||str[i]==0) {
            count++;
        }
    }
 }
    
countIntegers("mohan123rai12") ;
console.log(count);

