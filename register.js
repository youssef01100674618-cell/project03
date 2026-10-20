const username = document.querySelector("#username");
const password = document.querySelector("#username");
const confirmPassword = document.querySelector("#username");
const age = document.querySelector("#username");
let validateCounter = 0;

function validateUsername(event) {
 const val = event.target.elements.username.value.trim();
  if(
    val === "" ||
    val.includes(" ")
  ) {
    document.querySelector("#msgUsername").innerHTML = " username must not include spaces or be empty !" ;
    return false ;
  }
  return true
}
function validatePassword(event) {
   const val = event.target.elements.password.value.trim();
   if( val === "") {
    document.querySelector("#msgPassword").innerHTML = "password can not be empty !"
    return false 
   }
   else if(val.length < 6) {
    document.querySelector("#msgPassword").innerHTML = "password must contain more than 6 characters !"
    return false 
   }
   else if(val.includes(" ")) {
    document.querySelector("#msgPassword").innerHTML = "password can not contain spaces"
    return false
   }
   return true
}
function validateConfirmPassword(event) {
   const val = event.target.elements.confirmPassword.value.trim();
   if(val === "") {
    document.querySelector("#msgConfirmPassword").innerHTML = "pleas fill this field !"
    return false
   }
   else if(val !== event.target.elements.password.value.trim() ) {
    document.querySelector("#msgConfirmPassword").innerHTML = "the password is not identical to the password field !"
    return false ;
   }
   return true
}
function validateAge(event) {
   const val = Number(event.target.elements.age.value.trim());
   if(val < 0) {
    document.querySelector("#msgAge").innerHTML = " age can not be a negative number"
    return false ;
   }
   else if( ! (val < 100 && val >7) ) {
    document.querySelector("#msgAge").innerHTML = " invalid age  !"
    return false ;
   } 
   return true

}
function validate(event) {
  event.preventDefault();
  if( 
  validateUsername(event) &
  validatePassword(event) &
  validateConfirmPassword(event) &
  validateAge(event)
  )
 {
    alert("Registration successful!");
    document.querySelector("form").reset();
    document.querySelector("#msgUsername").innerHTML = "";
    document.querySelector("#msgPassword").innerHTML = "";
    document.querySelector("#msgConfirmPassword").innerHTML = "";
    document.querySelector("#msgAge").innerHTML = "";
  }
}
document.querySelector("form").addEventListener("submit" ,e => {validate(e)});