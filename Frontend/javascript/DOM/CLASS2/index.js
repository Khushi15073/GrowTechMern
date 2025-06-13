// const select = document.querySelector("p")
// console.log(select)
// const byid = document.querySelector(".div1")
// console.log(byid)
// const one =document.querySelectorAll("p")
// console.log(one)
// const two= document.querySelector("div")
// // console.log(two)

// console.log(two.innerHTML)

// const para= document.querySelector("p")
// console.log(para.innerText)
// console.log(para.innerHTML)

// console.log(para.textContent)

// const newelement = document.createElement("div")
// newelement.textContent="this is a newelement"

// const newelement1 = document.createElement("div")
// newelement1.textContent="this is a newelement"
// const a= document.querySelector(".div1")
// a.append(newelement1, "hello world")

// a.prepend(newelement)

// events
// const dinvaladiv = document.getElementsByTagName("div");
// dinvaladiv[0].addEventListener("click",()=>{
//     console.log("click hogya")
// })

// const eventbtn = document.getElementsByClassName("eventbtn");
// const mybtn = document.querySelector("button")

// mybtn.addEventListener("click", ()=>{
//     const para =document.createElement("p");
//     para.textContent="ye hai para";
//    eventbtn[0].append(para);

// })
const eventValaDiv = document.getElementsByClassName("event11");
const myBtn = document.querySelector("button");

function addKaregaPko() {
  const para1 = document.createElement("p");
 para1.textContent = "para is created";
  eventValaDiv[0].appendChild(para1);

  const btn = document.createElement("button");
  btn.textContent = "remove";
  para1.appendChild(btn);

  const upbtn = document.createElement("button");
  upbtn.textContent = "Update";
  
  para1.appendChild(upbtn);

  upbtn.addEventListener("click", () => {
    para1.textContent = "m change hogaya";
      para1.appendChild(btn);
    para1.appendChild(para1);


  });

  btn.addEventListener("click", () => {
    eventValaDiv[0].removeChild(para1);
    eventValaDiv[0].removeChild(btn);
    eventValaDiv[0].removeChild(upbtn);
  });
}

myBtn.addEventListener("click", () => {
  addKaregaPko();
});
