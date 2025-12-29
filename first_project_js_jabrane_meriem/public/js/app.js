
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





