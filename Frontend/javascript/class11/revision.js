// const cooler={
//     name: "Cooler",
//     id:"D223",
//     functionality:{
//         kaam: "cooling",
//         color:"white  "  
//     },
//     height:3.5

// };
// // const dublicate=cooler;
// const dublicate=Object.assign({},cooler); // shallow copy

// console.log("original: ",cooler);
// console.log("dublicate" ,dublicate);
// dublicate.name="dublicate cooler";
// dublicate.functionality.color="black";
// cooler.brand="voltas";
// console.log("after update original: ",cooler);
// console.log("after update dublicate: ",dublicate);

// checking the shallow copy and deep copy
// shallow copy by equal(=) operator
// const cooler1={
//     name:"blue",
//     id:"dre101",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//     height:3.5
// };
// const cooler2=cooler1;
// console.log("original" , cooler1);
// console.log("copy",cooler2);

// cooler2.id="5555";
// cooler2.functionality.color="green";
// console.log("update karne ke baad" , cooler1);
// console.log("update karne ke baad",cooler2);

//  shallow copy by spread operator
 
//  const cooler1={
//     name:"blu",
//     id:"DRE101",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//        height:3.5
//  };
//  const cooler2 = { ...cooler1 }; 
// console.log("original", cooler1);
// console.log("copy", cooler2);
// cooler2.name="ram";
// // cooler1.functionality.kaam="Garmi"
// cooler2.functionality.kaam="Garmi"

// console.log("original update ke baad", cooler1);
// console.log("copy update ke baad", cooler2);

//  shallow copy by object.assign
//  const cooler1={
//     name:"blu",
//     id:"DRE101",
//     functionality:{
//         kaam:"cooling",
//         color:"white"
//     },
//        height:3.5
//  };
//  const cooler2 = Object.assign({}, cooler1);
//  console.log("original", cooler1);
// console.log("copy", cooler2);
// cooler2.name="ram";
// cooler2.functionality.kaam="Garmi";
//  console.log("update original", cooler1);
// console.log(" update copy", cooler2);


// deepcopy
//  const cooler1={
//     name:"blu",
//      id:"DRE101",
//          functionality:{
//         kaam:"cooling",
//         color:"white"

//     },
//        height:3.5
//  };
//  const cooler2 = JSON.parse(JSON.stringify(cooler1)); // deep copy
//   console.log("original", cooler1);
//   console.log("copy", cooler2);
//   cooler2.name="white";
//   cooler2.functionality.color="black";
// console.log("update original", cooler1);
// console.log(" update copy", cooler2);
