// what is function
// function is a block of code that performs a specific task
function xyz(params) {
    console.log("hello");
    
}

xyz();
// complex object
// object is a collection of properties
// object is a collection of key value pairs
organization = {
    name: "xyz",
  departments: [ 'hr', 'it', 'finance'],
  revenue: 1000000,
  'ram ratan': "father",
  hierarcy: {
   top: 'ceo',
   employees: ['toplevel', 'middlelevel', 'lowerlevel',1500,1.9],
   '12Date': '2023-10-01',
   isthisorganization: true,

  },
  totalemployee: 1500,
  hiring: function() {
    console.log("hiring");
  }
};
console.log(organization.name);
console.log(organization.departments[0]);
console.log(organization.hierarcy.employees[0]);
organization.hiring();
console.log(organization.hierarcy['12Date']);