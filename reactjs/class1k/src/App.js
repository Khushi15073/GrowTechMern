import { useState } from "react";

// function App() {
//   // let name1 ="khushi";
//   const [name, SetName] = useState("khushi");
//   // function change() {
//   //   // console.log("hello")
//   //   // name1 = "Khushi Patel";
//   //   SetName("khushi patel")
//   //   // console.log(name1);
//   // }
//   // console.log(name1);
//   return (
//     <div  >
//       <p>my name is {name} </p>
//       <button onClick={() => {
//         // change();
//         SetName("khushi gyanchand patel")
//       }}>change name</button>

//     </div>

//   );
// }
// function App(){
//  const [name, SetName] = useState("khushi")
//  const [age, SetAge] = useState("21")
//  const [Qualification, SetQualification] = useState("btech")

//   return(
//     <div className="App">

//        <p>my name is {name}<button onClick={() => {

//         SetName(" yogesh patel")

//       }}>change name</button>
//       </p>

//        <p>my age is {age} <button onClick={() => {

//         SetAge("24")

//       }}>change name</button>
//       </p>
//        <p>my Qualification is {Qualification} <button onClick={() => {

//         SetQualification("MCA")

//       }}>change name</button>
//       </p>

//     </div>
//   );
// }
function App() {
  const user = {
    name: "khushi",
    age: 21,
    city: "indore",
    qualification: "B.Tech",
  };
  const [details, SetDetails] = useState(user);
  
function Handleuserdata(newData,newValue){
  SetDetails((previousData)=>{
    return{...previousData,[newData]:newValue}
  });
}
  return (
    <div className="App">
      <p>my name is {details.name}</p>
      <button onClick={()=>{
        Handleuserdata("name","harsh")
      }}>change name</button>
      <p>my age is {details.age}</p>
       <button onClick={()=>{
        Handleuserdata("age","32")
      }}>change age</button>
      <p>my city is {details.city}</p>
       <button onClick={()=>{
        Handleuserdata("city","khandwa")
      }}>change name</button>
      <p>my qualification is {details.qualification}</p>
       <button onClick={()=>{
        Handleuserdata("qualification","mtech")
      }}>change name</button>

    </div>
  );
}
export default App;
// hooks are predefined function---------
// hooks make stateless to stateactive
// use state() ui ke upr state ko change krta hai
