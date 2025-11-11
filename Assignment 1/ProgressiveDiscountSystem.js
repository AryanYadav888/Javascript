
let total = 8650; // Input total purchase amount
let discount = 0;

if (total >= 10000) {
  discount = 25;
} else if (total >= 5000) {
  discount = 15;
} else if (total >= 2000) {
  discount = 5;
} else {
  discount = 0;
}

let finalPrice = total - (total * discount / 100);

finalPrice = Math.round(finalPrice);

console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discount + "%");
console.log("Final Price after Discount: ₹" + finalPrice);
