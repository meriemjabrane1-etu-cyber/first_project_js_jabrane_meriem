
let users = [];

function Spaces(str) {
  return str !== str.trim();
}

function innerSpaces(str) {
  return str.includes(" ");
}

function isAlphaSpace(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (
      !(c >= "A" && c <= "Z") && !(c >= "a" && c <= "z") && c !== " ") {
      return false;
    }
  }
  return true;
}

function validFullName(name) {
  if (name !== name.trim()) return false;

  for (let i = 0; i < name.length; i++) {
    let c = name[i];
    if (!( (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c === " ")) {
      return false;
    }
  }

  let lenNoSpace = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== " ") lenNoSpace++;
  }
  if (lenNoSpace < 5) return false;

  let parts = name.split(" ");
  for (let part of parts) {
    if (part.length === 0) continue; 
    let first = part[0];
    if (!(first >= "A" && first <= "Z")) return false;

    for (let j = 1; j < part.length; j++) {
      let c = part[j];
      if (!(c >= "a" && c <= "z")) return false;
    }
  }

  return true;
}
function isValidEmail(email) {
  if (hasLeadingOrTrailingSpaces(email)) return false;
  if (hasMiddleSpaces(email)) return false;

  email = email.toLowerCase();
  if (email.replaceAll(" ", "").length < 10) return false;

  let atCount = email.split("@").length - 1;
  if (atCount !== 1) return false;

  let exists = users.some(u => u.email === email);
  if (exists) return false;

  return true;
}


function validEmail(email) {
  email = email.trim();

  if (email.includes(" ")) return false;

  email = email.toLowerCase();

  if (email.length < 10) return false;

  let atCount = email.split("@").length - 1; //n insistiw 3la @
  if (atCount !== 1) return false;

  if (users.some(u => u.email === email)) return false;

  return true;
}
function validAge(age) {
  if (hasMiddleSpaces(age)){
    return false;} 
  if (!/^\d+$/.test(age)) return false;
  if (age.length === 0 || age.length >= 3) return false;
  return true;
}







let nameInput = prompt("Enter Full Name:");
if (!validFullName(nameInput)) {
  alert("Invalid Name");
} else {
  users.push({
    name: nameInput,
    email: "",     
    age: 0,
  });
  alert("Account created successfully!");
}
