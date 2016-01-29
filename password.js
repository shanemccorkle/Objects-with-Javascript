var user;
var password;

function isUserIdValid(userId) {
  if (!(userId.includes("$") || userId.includes("#") || userId.includes("!")) && userId.length > 5) {
    return {valid: true}
  }
  else if (userId.includes("$")){
    return {valid: false, reason: "Cannot include $ in your User ID."};
  }
  else if (userId.includes("#")){
    return {valid: false, reason: "Cannot include # in your User ID."};
  }
  else if (userId.includes("!")){
    return {valid: false, reason: "Cannot include ! in your User ID."};
  }
  else if (userId.length <6){
    return {valid: false, reason: "Your User ID needs to be at least 6 characters."};
  }
};

function isPasswordValid(password) {
  if((password.includes("$") || password.includes("#") || password.includes("!")) && password.length > 5 && checkCase(password) && test(password)) {
    return {valid: true};
  }
  else if (!(password.includes("$") || password.includes("#") || password.includes("!"))){
    return {valid: false, reason: "You must include at least one $, #, or ! in your Password."};
  }
  else if (!checkCase(password)){
    return {valid: false, reason: "You must have at least one uppercase and one lowercase letter in your password."};
  }
  else if (!test(password)){
    return {valid: false, reason: "Your password must include at least one digit/number."};
  }
  else {
    return {valid: false, reason: "Your password needs to be at least 6 characters."};
  }
};

function checkCase(password) {
  return password.toUpperCase() != password && password.toLowerCase() != password
};

function test(str) {
  return /\d/.test(str);
};

function areCredentialsValid(userId, password) {
  return alert("Your credentials are valid: " + (isUserIdValid(userId) && isPasswordValid(password)));
};

function getUserId() {
  user=prompt("Enter User ID");
};

function getUserPassword() {
  password=prompt("Enter Password");
};

function login() {
  getUserId();
  var userValid = isUserIdValid(user);
  while(userValid.valid != true) {
    alert("Your user Id is not valid. " + userValid.reason);
    getUserId();
    userValid = isUserIdValid(user);
  }

  getUserPassword();
  var passValid = isPasswordValid(password);
  while(passValid.valid != true) {
    alert("Your password is not valid. " + passValid.reason);
    getUserPassword();
    passValid = isPasswordValid(password);
  }
  alert("User ID and Password accepted! You did it!!!");
};
