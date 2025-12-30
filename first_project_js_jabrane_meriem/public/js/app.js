
let users = []

function Spaces(str) {
  return str !== str.trim()
}

function innerSpaces(str) {
  return str.includes(" ")
}

function isAlphaSpace(str) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i]

    if (
      !(c >= "A" && c <= "Z") && !(c >= "a" && c <= "z") && c !== " ") {
      return false
    }
  }
  return true
}

function validFullName(name) {
  if (name !== name.trim()) return false

  for (let i = 0; i < name.length; i++) {
    let c = name[i]
    if (!( (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || c === " ")) {
      return false
    }
  }

  let lenNoSpace = 0
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== " ") lenNoSpace++
  }
  if (lenNoSpace < 5) return false

  let parts = name.split(" ")
  for (let part of parts) {
    if (part.length === 0) continue; // rir bax l usr madirx 2 " "" " bin smiya et lkniya
    let first = part[0]
    if (!(first >= "A" && first <= "Z")) return false

    for (let j = 1; j < part.length; j++) {
      let c = part[j]
      if (!(c >= "a" && c <= "z")) return false
    }
  }

  return true
 }

function validEmail(email) {
  email = email.trim()

  if (email.includes(" ")) return false

  email = email.toLowerCase()

  if (email.length < 10) return false

  let atCount = email.split("@").length - 1
  if (atCount !== 1) return false

  if (users.some(u => u.email === email)) return false

  return true
}

function validAge(age) {
  if (age.includes(" ")) return false;
  if (age.length === 0 || age.length >= 3) return false;

  for (let i = 0; i < age.length; i++) {
    if (age[i] < "0" || age[i] > "9") {
      return false;
    }
  }

  return true;
}

function validPassword(password) {
  if (Spaces(password)) return false
  if (innerSpaces(password)) return false
  if (password.length < 7) return false

  let specials = ["@", "#", "-", "+", "*", "/"]
  return specials.some(s => password.includes(s))
}

function findUserByEmail(email) {
  return users.find(u => u.email === email)
}

// & signup

function signUp() {
  let name = prompt("Enter Full Name:")
  if (!validFullName(name)) {
    alert("Invalid Name")
    return
  }

  let email = prompt("Enter Email:")
  if (!validEmail(email)) {
    alert("Invalid or existing Email" )
    return
  }

  let age = prompt("Enter Age:")
  if (!validAge(age)) {
    alert("Invalid Age")
    return
  }

  let password = prompt("Enter Password:")
  if (!validPassword(password)) {
    alert("Invalid Password")
    return;
  }

  let confirm = prompt("Confirm Password:")
  if (confirm !== password) {
    alert("Passwords do not match. Blocked.")
    return
  }


  users.push({
    name,
    email: email.toLowerCase(),   
    age,
    password,
    balance: 0,
    loan: 0,
    investment: 0,
    history: []
  });
  alert("lomour medbota")
}
function login() {
  let email = prompt("Enter Email:");
  let user = findUserByEmail(email);
  if (!user) {
    alert("Email not found");
    return;
  }

  let password = prompt("Enter Password:");
  if (password !== user.password) {
    alert("Wrong password");
    return;
  }

  applyLoanPenalty(user);
  applyInvestmentProfit(user);

  bankMenu(user);
}
//~ changePassword 
function changePassword() {
  let email = prompt("Enter your Email:");
  let user = findUserByEmail(email);
  if (!user) {
    alert("Email not found");
    return;
  }

  let newPassword = prompt("Enter New Password:");
  if (!validPassword(newPassword)) {
    alert("Invalid Password");
    return;
  }

  let confirm = prompt("Confirm New Password:");
  if (confirm !== newPassword) {
    alert("Passwords do not match");
    return;
  }

  user.password = newPassword;
  alert("Password updated successfully!");
}
// console.log(email, age, password)

while (true) {
  let action = prompt("Choose: signup or login or change or exit")

  if (action === "exit") continue

  if (action === "signup") signUp()
  else if (action === "login") alert("login not redy yet")
  else if (action === "change") alert("change password redy yet") 
  else alert("Invalid option")
}
 