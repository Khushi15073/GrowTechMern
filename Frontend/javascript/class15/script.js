// console.log("main hu don")
// setTimeout(()=>{
//     console.log("set timeout applied")
// },5000)
// console.log("main hu dusra don")
// const id = setInterval(()=>{
//      console.log("set  interval applied")
//      clearInterval(id)
// },5000)
// console.log(id)

// error hanlding
// function dividebyanyno(a,b){
//     try{
//         if(typeof a ===Number && typeof b===Number){
//             return
//         }
//     }

// }
// const mypromise = new Promise((resolve, reject) => {
//   const myNumber = Math.floor(Math.random() * 30);
//   console.log(myNumber);
//   if (myNumber >= 18) {
//     resolve("You are eligible for voting");
//   } else {
//     reject("You are not eligible for voting");
//   }
// });
// console.log(mypromise);

// mypromise.then((ip) => console.log(ip)).catch((error) => console.log(error));

let result = fetch("https://jsonplaceholder.typicode.com/posts/1");
console.log(result.then((data)=>console.log(data)))

// print the status code of the response