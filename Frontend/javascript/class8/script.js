// // named function||normal function
// function showdata(a){
//     console.log("this is grow tech");
   
// }
// showdata();

// // let x =showdata();
// // console.log(x);
// // function expression
// let showdata1 = function(){
//     console.log("heloooooooooooooo");
// }
// showdata1();
// annonymous arrow function
// console.log(showdata2);;
// var showdata2 = () => {
//     console.log("hello khushi");
// }  
 
// showdata();
// // annonymous function
// let showdata3 = function xee (){
//     console.log("khushi");
// }
// showdata3();
// // xee(); not possible
// getdata();
// var getdata=()=> console.log("hello");

// in arrow function if you write  only one line of code then  no nned to use return keyword
// console.log(getdata);
// function getdata(){
//     console.log("hello");   
// }
	// callback function--------------- Function that is passed on as argument to another function is called callback function.
    // use of callback function
    // 
// pure functions 
// functions are those functions which always return the same output for the same input in each execution.
// impure functions
// impure functions are those functions which do not always return the same output for the same input in each execution.

function impure(x){
    return x+5;
}
console.log(impure(4)); 

 function heyimpure(){
    return Math.random();
 }
console.log(heyimpure()); // 0.123456789