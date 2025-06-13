const inner = document.getElementsByClassName("container");
const myBtn = document.querySelector("button");
const inputlist = document.getElementById("List");
const mydiv = document.getElementById("adddiv");

function add() {
  if (inputlist.value === "") {
    alert("Please Enter Some Input");
  } else {
    const inputvalue = inputlist.value;

    const para = document.createElement("p");
    para.textContent = inputvalue;
    mydiv.appendChild(para);
    inputlist.value = "";

    const btn = document.createElement("button");
    btn.textContent = "remove";
    mydiv.appendChild(btn);

    const upbtn = document.createElement("button");
    upbtn.textContent = "Update";

    mydiv.appendChild(upbtn);
    btn.addEventListener("click", () => {
      mydiv.removeChild(para);
      mydiv.removeChild(upbtn);
      mydiv.removeChild(btn);
    });
    upbtn.addEventListener("click", () => {
      const save = document.createElement("button");
      save.textContent = "save";
      mydiv.appendChild(save);
      mydiv.removeChild(upbtn);
      inputlist.value = para.innerText;

      save.addEventListener("click", () => {
        para.innerText = inputlist.value;
        const newupbtn = document.createElement("button");
        newupbtn.textContent = "Update";

        mydiv.appendChild(para);
        mydiv.appendChild(btn);

        mydiv.appendChild(upbtn);

        mydiv.removeChild(save);

    inputlist.value = "";

      });
    });
  }
}

myBtn.addEventListener("click", () => {
  add();
});
