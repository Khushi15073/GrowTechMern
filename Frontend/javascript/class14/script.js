console.log("currying");
// function dothreesumproblem(x,y,z){
//     return x + y + z;
// Another way to write the same function using c;3
// urrying}
// console.log(dothreesumproblem(1,2,3)); // 6
// currying



function dothreesumproblem(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}






