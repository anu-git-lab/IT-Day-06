// class Customer{
//     name;
//     age;
//     address;


//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
        
//     }
// }

// let customer1 = new Customer("John Doe", 30, "123 Main St");
// console.log(customer1);

//----------------------------------------

let customer2= {
    name: "Jane Smith",
    age: 25,
    address: "456 Elm St",
    salary: 50000,
    items: ["item1", "item2", "item3"],
    father: {
        name: "Robert Smith",
        age: 55,
        address: "789 Oak St"
    }
}
console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);
console.log(customer2.salary);
console.log(customer2.items);
console.log(customer2.father);
console.log(customer2.father.name);
console.log(customer2.items[2]);
