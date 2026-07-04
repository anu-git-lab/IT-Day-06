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

// let customer2= {
//     name: "Jane Smith",
//     age: 25,
//     address: "456 Elm St",
//     salary: 50000,
//     items: [{
//         id: 1,
//         name: "item1",
//         price: 10,
//         variant: [
//             {
//                 id: 1,
//                 name: "variant1",
//                 price: 5
//             },
//             {
//                 id: 2,
//                 name: "variant2",
//                 price: 10
//             }
//         ]
//     }, {
//         id: 2,
//         name: "item2",
//         price: 20
//     }, {
//         id: 3,
//         name: "item3",
//         price: 30
//     } ],
//     father: {
//         name: "Robert Smith",
//         age: 55,
//         address: "789 Oak St"
//     }
// }
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.salary);
// console.log(customer2.items);
// console.log(customer2.father);
// console.log(customer2.father.name);
// console.log(customer2.items[2]);
// console.log(customer2.items[0].variant[1]);

//DOM (Document Object Model) Manipulation-----------

// document.write("<h1>Hello, World!</h1>");

// console.log(document.title);

// let heading = document.getElementById("heading");
// // console.log(heading);

// heading.innerHTML = "Hello, JavaScript!";

// let number = 0;
// function changeHeading() {
//     heading.innerText = "Button Clicked!" +(++number);
//     console.log("clicked!");
// }

// function changeHeading2() {
//     heading.innerText = "Button Clicked!" +(--number);
//     console.log("clicked!");
// }

// function changeHeading() {
//     let txtinput = document.getElementById("inputText01");
//     console.log(txtinput.value);
//     let heading = document.getElementById("heading");
//     heading.innerText = txtinput.value;
// }

// function changeHeading() {

//     let txtInput = document.getElementById("inputText");

//     let userInput = txtInput.value; 

//     console.log(userInput);
    
//     let heading = document.getElementById("heading");

//     heading.innerText=userInput;   
// }

//    




let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);

    console.log(customerList);
      
}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    let body ="";

    for(let i =0; i<customerList.length; i++){
            body+=`<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
    }

    tblCustomers.innerHTML=body;

    console.log(tblCustomers);
    
}