console.log("Hey i am js");

const product = {
  id: 1001,
  name: "Smartphone",
  isAvailable: true,
  details: {
    manufacturer: "TechCorp",
    specs: {
      processor: "Octa-core 2.2GHz",
      memory: {
        ram: "8GB",
        colors: ["black", "silver", "blue"],
        "data-info": {
          idf: 780,
          user: {
            name: "Lakhan",
            kaam: "Nachna ",
            colors: ["black", 24, 8.908, undefined],
            123: function () {
              console.log("hey karan namo namo ");
            },
          },
          greet: function () {
            console.log("Hey i am bot");
          },
        },
        storage: "128GB",
        dimensions: {
          width: "70mm",
          namonamo: function () {
            console.log("hey i am namonamo");
          }
        },
        height: "150mm",
      },
      getSum: function (a, b) {
        return a + b;
      },
    },
    colors: ["black", "silver", "blue"],
  },
  tags: ["electronics", "mobile", "gadget"],
};
// product.details.specs.memory['data-info'].user[123]();
// product.details.specs.memory['data-info'].greet();
// console.log(product.details.specs.getSum(10,20));
// console.log(product.details.specs.memory.dimensions.width);
// (product.details.specs.memory.dimensions.namonamo());

// console.log(product.details.colors[0]);
// console.log(product.tags[0]);