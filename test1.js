// SET    B

const students = [
    { id: 1, name: "Alice", age: 22, grade: "A", enrolled: true },
    { id: 2, name: "Bob", age: 24, grade: "B", enrolled: false },
    { id: 3, name: "Charlie", age: 21, grade: "A", enrolled: true },
    { id: 4, name: "David", age: 23, grade: "C", enrolled: true },
    { id: 5, name: "Eva", age: 25, grade: "B", enrolled: false }
];

// Questions:

// 1.Print all student names.
console.log(students.map(student=>student.name));
// 2.Print all students who are currently enrolled.

students.filter(student=>student.enrolled==true).forEach(students=>console.log(students.name))

// 3.Find the grade of the student with the name "David".
students.filter(student=>student.name=='David').forEach(students=>console.log(students.grade))

// 4.Create a function to add a new student to the list.

function add(id,name,age,grade,enrolled){
    students.push({

        id: id,
        name: name,
        age: age, 
        grade: grade,
        enrolled: enrolled
       })
}
    add(6,'ivy',23,'A',true)
console.log(students);

// 5.Write a function to remove a student by their ID.
// function remove(id){

//     students.filter(student=>student.id==id)
// }
// remove(2)

// console.log(students);
console.log("---------------------------------------------------");

// 6.Write a function to update the enrollment status of a student.


function update(id,status){
    students.filter(student=>student.id==id).forEach(student=>student.enrolled==status)
}
update(5,true)
console.log(students)

console.log("----------------------------------------------------");

// 7.List all students whose grade is "A".
students.filter(student=>student.grade=='A').forEach(students=>console.log(students.name))
// 8.Calculate the average age of all enrolled students.

let enroll=students.filter(student=>student.enrolled==true)
let total=enroll.reduce((a,b)=>a+b.age,0);
let average=total/enroll.length;
console.log(average);    

console.log("----------------------------------------------------");


const devices = [
    {
        id: 1, 
        name: "iPhone 14", 
        brand: "Apple", 
        price: 999, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "20"
        }
    },
    {
        id: 2, 
        name: "Galaxy S21", 
        brand: "Samsung", 
        price: 799, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "22 "
        }
    },
    {
        id: 3, 
        name: "Pixel 7", 
        brand: "Google", 
        price: 599, 
        inStock: 'yes', 
        features: {
            storage: "128GB", 
            batteryLife: "24 "
        }
    },
    {
        id: 4, 
        name: "Surface Laptop 4", 
        brand: "Microsoft", 
        price: 1499, 
        inStock: 'yes', 
        features: {
            storage: "512GB", 
            batteryLife: "15"
        }
    },
    {
        id: 5, 
        name: "MacBook Air", 
        brand: "Apple", 
        price: 999, 
        inStock: 'No', 
        features: {
            storage: "256GB", 
            batteryLife: "18 "
        }
    }
];
// 1.Print all device names.
console.log(devices.map(dev=>dev.name));
// 2.Print all device names whose price is greater than $800.
devices.filter(dev=>dev.price>800).forEach(devices=>console.log(devices.name))
console.log("---------------------------------------------------");

// 3.Print out-of-stock devices.
devices.filter(dev=>dev.inStock=='No').forEach(devices=>console.log(devices.name))
console.log("--------------------------------------------------");

// 4.Find the device names with battery life greater than 20 hours.
devices.filter(dev=>dev.features.batteryLife>20).forEach(dev=>console.log(dev.name))
console.log("----------------------------------------------------------");

// 5.Calculate the total revenue generated
//  when all available devices are sold out.
console.log(devices.filter(dev=>dev.inStock=='yes').reduce((a,b)=>a+b.price,0))
// 3. Print the Fibonacci series using recursion


