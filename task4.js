//task1
let studentName = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age1 = prompt("Enter Age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age1}`);


//task2
let balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount:"));

if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
} else if (amount < 100) {
    console.log("Minimum withdrawal is 100");
} else {
    console.log("Insufficient Balance");
}

//task3
let orderAmount = Number(prompt("Enter Order Amount:"));

let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(result);

//task4
let username1 = prompt("Enter Username:");

if (username1 === "admin") {

    let password = prompt("Enter Password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}

// Task 5
let signal = prompt("Enter Signal Color:");

switch (signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}
//task6

function salaryCalculation(basicSalary, bonus) {
    return basicSalary + bonus;
}

let totalSalary = salaryCalculation(25000, 5000);

console.log(totalSalary);


//task7
let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);

//task8

let contact = {
    name: "Naveen",
    phone: "9876543210",
    status: "Online"
};

for (let key in contact) {
    console.log(key + ": " + contact[key]);
}

//task9
function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}

bookTicket(payment);

//task10
function* deliveryStatus() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";

}

let order = deliveryStatus();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);