const mydiv= document.getElementById("iddiv1")
console.log(mydiv.attributes)


console.log(mydiv.attributes);

for(let i = 0; i < mydiv.attributes.length; i++) {
    console.log(mydiv.attributes[i].name + " = " + mydiv.attributes[i].value);
}

//if you want to change an attribute
mydiv.attributes[0].value = "New Value";
for(let i = 0; i < mydiv.attributes.length; i++) {
    console.log(mydiv.attributes[i]);
}

//if you want to add new attribute
mydiv.setAttribute("data-custom", "Custom Value");
console.log(mydiv.getAttribute("data-custom"));

//if you want to remove an attribute
mydiv.removeAttribute("data-custom");
console.log(mydiv.getAttribute("data-custom")); // should be null now


// mydiv.setAttribute("style", "background-color: red; color: white;");
mydiv.style.backgroundColor = "blue"; // This will override the inline style