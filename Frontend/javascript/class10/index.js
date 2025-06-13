const teacher = {
    iName: "Jagmohan Rai",
    Adrress: "Jabalpur se nhi katni se hai",
    employeementRecord: {
        department: "Tech department",
        Kaam: "Baccho ko guide karna  ",
    },
    Date: "f27/05/2025",
};
// console.log("Orginal Teacher", teacher);

// // const teacher2 = teacher; // shallow copy
// const teacher2 = Object.assign(teacher)

// console.log("Sasta Teacher ", teacher2)
//     // teacher.iName = "aviraj"
// teacher2.employeementRecord.Kaam = "bachcho ko bhatkate hai"

// // teacher2.iName = "Harsh Rathore"; // modify kar dega original object
// console.log("after update the orginal teacher,  Sasta Teacher me value ", teacher2)
// console.log("Orginal Teacher!!!", teacher);

const deepTeacher = JSON.parse(JSON.stringify(teacher)); // Deep Copy orginal object nested object nhi hoga
deepTeacher.employeementRecord.Kaam = "bachcho ko bhatkate hai";
console.log("Updated", deepTeacher);
console.log("orginal ", teacher);