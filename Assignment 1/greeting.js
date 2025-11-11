let userName = prompt("Enter your name:");

let currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour < 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

alert(greeting);
