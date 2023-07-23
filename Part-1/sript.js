alert("I'm JavaScript!");
alert("I'm invoked!");
alert("I'm JavaScript!");
alert('Hello');
alert(`World`);
alert(3 + 1 + 2);

let admin = 9;
let fname = 10.5;
fname = "Guvi";
let lname = "geek";
admin = fname + " " + lname;
alert(admin);

let a = prompt("First number?");
let b = prompt("Second number?");
let sum = Number(a) + Number(b);
alert(sum);



var c = Number("2") > Number("12");
if (c) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}



let d = prompt("Enter a number?");
if (!isNaN(d)) {
 console.log('OMG it works for any number inc 0');
}
else {
 console.log("Success");
}



let value = prompt('How many runs you scored in this ball');
let runs = parseInt(value);

if (runs === 4) {
  console.log("You hit a Four");
} else if (runs === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}



let login = 'Employee';
let message = (login === 'Employee') ? 'Welcome, Employee' :
  (login === 'Director') ? 'Greetings, Director' :
  (login === '') ? 'No login' :
  '';
console.log(message);




let message1;
if (null || 2 || undefined) {
  message1 = "welcome boss";
} else {
  message1 = "Go away";
}
console.log(message1);



let message2;
let lock = 2;
if (!lock) {
  message2 = "Go away";
} else {
  message2 = "welcome";
}
console.log(message2);


let message3;
let lock1 = 2;
if (lock && lock !== "" && lock !== undefined) {
  message3 = "Go away";
} else {
  message3 = "welcome";
}
console.log(message3);




let i = 3;
while (i) {
  console.log(i--);
}


for (let num = 1; num <= 10; num++) {
  console.log(num);
}


for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}



let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


let countdown = 100;
while (countdown > 0) {
  countdown--;
}
console.log("bomb disarmed");