
// Task 1 — Basic Function

function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Naveen");



// Task 2 — Parameter + Return

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(5));



// Task 3 — Object Function

const employees = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function (bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};

employees.employeeBonus(5000);



// Task 4 — Scope Checking


function scopeTest() {

    if (true) {
        var a = "VAR";
        let b = "LET";
        const c = "CONST";
    }

    console.log(a); // Works

    // console.log(b); // Error
    // console.log(c); // Error
}

scopeTest();


// Task 5 — Arrow Function

const adds = (a, b) => {
    console.log(a + b);
};

adds(10, 20);


// Task 6 — Callback Function

function multiply(a, b) {
    return a * b;
}

function calculator(callback, a, b) {
    console.log(callback(a, b));
}

calculator(multiply, 5, 2);



// Task 7 — Generator Function

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// Task 8 — Default Parameter

function students(name, course = "JavaScript") {
    console.log(name);
    console.log(course);
}

students("Naveen");
students ("Rahul", "React");



// Task 9 — Currying

function multi(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));



// Task 10 — Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);



// Task 11 — Object Spread

const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);

// Task 12 — Rest Operator

function numbers(...num) {

    console.log(num);

    let sum = 0;

    for (let n of num) {
        sum += n;
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);



// Mini Challenge 
// Student Management System
const students1 = [];

// Add Student
function addStudent(name, marks) {

    const student = {
        name,
        marks
    };

    students1.push(student);
}

// Print Students
function printStudents() {
    console.log("Students List:");
    console.log(students1);
}

// Callback Function
function calculateMarks(student, callback) {
    return callback(student.marks);
}

// Bonus Function
function addBonus(marks) {
    return marks + 5;
}

// Add Students
addStudent("Rahul", 80);
addStudent("Naveen", 90);
addStudent("Kiran", 70);

// Print Students
printStudents();

// Calculate Bonus Marks
students1.forEach(student => {

    const finalMarks = calculateMarks(student, addBonus);

    console.log(student.name + " : " + finalMarks);
});


// Spread Operator Example
const newStudents = [
    ...students1,
    { name: "Anu", marks: 95 }
];

console.log(newStudents);


// Rest Operator Example
function totalMarks(...marks) {

    let total = 0;

    for (let m of marks) {
        total += m;
    }

    console.log("Total Marks:", total);
}

totalMarks(80, 90, 70, 95);