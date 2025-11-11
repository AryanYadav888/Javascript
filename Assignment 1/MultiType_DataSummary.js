let userName = "Aryan";            // string
let userAge = 21;                  // number
let isActive = true;               // boolean
let hobbies = ["Coding", "Music"]; // array
let address = { city: "Agra", country: "India" }; // object
let emptyValue = null;             // null
let notAssigned;                   // undefined

const dataSummary = [
  { Label: "userName",   Value: userName,   Type: typeof userName },
  { Label: "userAge",    Value: userAge,    Type: typeof userAge },
  { Label: "isActive",   Value: isActive,   Type: typeof isActive },
  { Label: "hobbies",    Value: hobbies,    Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "address",    Value: address,    Type: typeof address },
  { Label: "emptyValue", Value: emptyValue, Type: typeof emptyValue }, // typeof null => 'object'
  { Label: "notAssigned",Value: notAssigned,Type: typeof notAssigned }
];

console.table(dataSummary);
