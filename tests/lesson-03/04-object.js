let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);

console.log('----------------');
let person = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}

console.log(person.address.street);

console.log('----------------');
let student = {
    name: "Jane Smith",
    grades: {
        math: 90,
        english: 92
    }
};

console.log(student["grades"]["math"]);

console.log('----------------');
let setting = {
    volumn: 10,
    brightness: 70
};

setting.volumn = 50;
console.log(setting);

let bike = {};
bike.color = "red";

let employee = {
    name: "Alice Johnson",
    age: 30
}
delete employee.age;

let school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"]
};

