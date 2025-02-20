//part 1
let productName = "T-Shirt"; 
let productId = Symbol("uniqueId"); 
let price = 25.99; 
let isOnSale = true; 
let quantity = 50;  

console.log(typeof productName); // string 
console.log(typeof productId);   // symbol 
console.log(typeof price);       // number 
console.log(typeof isOnSale);    // boolean 
console.log(typeof quantity);    // number  

let inventory = [     
    {         
        productName: "T-Shirt",         
        productId: Symbol("uniqueId1"),         
        price: 25.99,         
        isOnSale: true,         
        quantity: 50,    
        details: {
            color: "red",
            size: "M"
        } 
    },     
    {         
        productName: "Jeans",         
        productId: Symbol("uniqueId2"),         
        price: 49.99,         
        isOnSale: false,         
        quantity: 30,     
    },     
    {         
        productName: "Sneakers",         
        productId: Symbol("uniqueId3"),         
        price: 74.99,         
        isOnSale: true,         
        quantity: 20,     
    }, 
];  

//part 2 ------------------------
Object.freeze(inventory[0]); 
inventory[0].price = 30;     
inventory[0].quantity = 10; 

console.log(inventory[0]);   

inventory[0].details.color = "blue";
console.log(inventory[0]);

// Modification to details.color is still possible because Object.freeze() only freezes the top level properties of the object and nested objects within the frozen object remain mutable

//part 3 -------------------

Object.seal(inventory[2]);
inventory[2].price = 55.99;
inventory[2].description = "Warm and comfortable"; 
delete inventory[2].quantity; 
console.log(inventory[2]);

// freeze prevents all modifications, seal allows changes to existing properties but not additions or deletions

//part 4 ---------------
let primitiveVar = 100;
let newPrimitiveVar = primitiveVar;
newPrimitiveVar = 200;
console.log(primitiveVar); 
console.log(newPrimitiveVar); 

let nonPrimitiveVar = { name: "Alice" };
let newNonPrimitiveVar = nonPrimitiveVar;
newNonPrimitiveVar.name = "Bugto";
console.log(nonPrimitiveVar.name); 

// part 4 Best Practices --------------

// Use const for values that should not be reassigned
// Use Object.freeze() for fully immutable objects
// Use Object.seal() when modification of existing properties is needed but adding or deleting properties should be restricted

// Variable Naming Examples
let validName = "example";
let _validName = "example";
let $validName = "example";

// Invalid let 1name = "error"; let name with dash = "error";