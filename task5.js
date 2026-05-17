
// 1. Student Attendance System

const presentStudents = ["Ravi", "Sita", "Kiran"];
const absentStudents = ["Ajay", "Meena"];

const finalStudents = [...presentStudents, ...absentStudents, "Rahul"];

console.log("Final Students List:", finalStudents);



// 2. E-Commerce Cart

const mobile = {
  brand: "Samsung",
  model: "S24",
  price: 75000
};

const charger = {
  chargerBrand: "Samsung",
  chargerType: "Fast Charger"
};

const cartDetails = {
  ...mobile,
  ...charger,
  deliveryDate: "20-May-2026"
};

console.log("Cart Details:", cartDetails);



// 3. Food Delivery App

function orderFood(...items) {
  console.log("Total items ordered:", items.length);
  console.log("First item:", items[0]);
  console.log("Last item:", items[items.length - 1]);
}

orderFood("Pizza", "Burger", "Biryani", "Ice Cream");



// 4. Employee Salary Filter

const employees = [
  { name: "Arun", salary: 45000 },
  { name: "Priya", salary: 60000 },
  { name: "Kavya", salary: 75000 },
  { name: "Ramesh", salary: 50000 }
];

const highSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log("Employees with salary above 50000:");
console.log(highSalaryEmployees);



// 5. Online Game Score Board

const scores = [100, 200, 150, 250, 300];

const totalScore = scores.reduce((total, score) => total + score, 0);

console.log("Total Score:", totalScore);