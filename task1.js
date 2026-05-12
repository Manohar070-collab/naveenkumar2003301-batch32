console.log("10" + 5)           
// Output: "105"
// Datatype: string

console.log(10 + true)          
// Output: 11
// Datatype: number

console.log(false + null)       
// Output: 0
// Datatype: number

console.log("Hello" + undefined)
// Output: "Helloundefined"
// Datatype: string

console.log([1,2] + 5)          
// Output: "1,25"
// Datatype: string

// 1. String + Number
let a = "100" + 20;
console.log(a, typeof a);
// Output: "10020"
// Datatype: string

// 2. Boolean + Number
let b = true + 5;
console.log(b, typeof b);
// Output: 6
// Datatype: number

// 3. Array + String
let c = [1,2] + " JS";
console.log(c, typeof c);
// Output: "1,2 JS"
// Datatype: string

// 4. Object + Number
let d = {} + 10;
console.log(d, typeof d);
// Output: "10"
// Datatype: string

// 5. Null + Number
let e = null + 50;
console.log(e, typeof e);
// Output: 50
// Datatype: number
//task3
console.log(Number("500"));   // 500
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number("abc"));   // NaN
console.log(Number([100]));   // 100
console.log(Number({}));      // NaN
//task4
console.log(Boolean(""));            // false
console.log(Boolean("javascript"));  // true
console.log(Boolean(0));             // false
console.log(Boolean(1));             // true
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false
console.log(Boolean([]));            // true
console.log(Boolean({}));            // true
//task5
let mark = 45;

if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}
// Output: "Pass"
//task6
let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}
// Output: "Eligible"
//task7
let k = 50;
let l = 80;
let v = 30;

if (k > l && k > v) {
    console.log("K is greatest");
}
else if (l > k && l > v) {
    console.log("L is greatest");
}
else {
    console.log("V is greatest");
}
// Output: "L is greatest"
//task8
let color = "red";

switch(color) {
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("ready");
        break;

    case "green":
        console.log("go");
        break;

    default:
        console.log("Invalid color");
}
// Output: "stop"
//task9
let username = "admin";
let password = "1234";

if (username === "admin") {

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Login");
    }

} else {
    console.log("Invalid Login");
}
// Output: "Login Success"
//task10
let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
}
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
}
else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
}
else if (hour >= 20 && hour <= 24) {
    console.log("Night");
}
else {
    console.log("Invalid Time");
}
// Output: "Afternoon"

// BONUS CHALLENGE
console.log(true + true)
// Output: 2
// Datatype: number

console.log("5" - 2)
// Output: 3
// Datatype: number

console.log("5" + 2)
// Output: "52"
// Datatype: string

console.log(null + 1)
// Output: 1
// Datatype: number

console.log(undefined + 1)
// Output: NaN
// Datatype: number

console.log(Boolean(" "))
// Output: true
// Datatype: boolean

console.log(Number(true))
// Output: 1
// Datatype: number