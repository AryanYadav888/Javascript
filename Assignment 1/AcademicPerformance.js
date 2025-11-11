let marks = [];

for (let i = 0; i < 5; i++) {
  let subjectMarks = Number(prompt(`Enter marks for subject ${i + 1}:`));
  marks.push(subjectMarks);
}

let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

let average = total / marks.length;       // average marks
let percentage = average;                 // percentage same as average (out of 100)

let detained = marks.some(mark => mark < 35);

if (detained) {
  alert(" Detained (Failed in one or more subjects)");
} else if (percentage >= 85) {
  alert(` Promoted with Distinction! Percentage: ${percentage.toFixed(2)}%`);
} else if (percentage >= 50) {
  alert(` Promoted. Percentage: ${percentage.toFixed(2)}%`);
} else {
  alert(` Detained. Percentage: ${percentage.toFixed(2)}%`);
}
