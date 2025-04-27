document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting


const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const email =  document.getElementById("email");
const password = document.getElementById("password");
const ninNumber = document.getElementById("ninNumber");
const phone= document.getElementById("phone");
// const address = document.getElementById("address");
// const amountDue = document.getElementById("amountDue");
// const dueDate = document.getElementById("dueDate");
// const produceName = document.getElementById("produceName");
// const dateOfBirth = document.getElementById("dateOfBirth");
// const maritalStatus = document.getElementById("maritalStatus");
// const city = document.getElementById("city");
// const salesAgentName = getElementById("salesAgentName");


let errorCount = 0;

// Clear previous error messages for all fields
document.getElementById("firstNameError").textContent = "";  
document.getElementById("secondNameError").textContent = ""
document.getElementById("NINumberError").textContent = "";
document.getElementById("emailError").textContent = "";
document.getElementById("phoneError").textContent = "";
document.getElementById("passwordError").textContent = "";
document.getElementById("passwordError").textContent = "";



// Reset field borders
firstName.style.border = "";
secondName.style.border = "";
email.style.border = "";  
ninNumber.style.border = "";  
phone.style.border = "";
// dueDate.style.border = "";
// dateOfBirth.style.border = "";
// produceName.style.border = "";
// maritalStatus.style.border = "";
// address.style.border = "";
// city.style.border = "";
// salesAgentName.style.border = "";


// Validate buyername: 2 to 50 alphabetic characters (spaces allowed)
const firstNameRegex = /^[A-Za-z\s]{2,100}$/;
if (!firstNameRegex.test(firstName.value.trim())) {
  firstName.style.border = "1px solid red";
  document.getElementById("firstNameError").style.color = "red";
  document.getElementById("firstNameError").textContent =
    "Enter a valid full name (2-50 alphabetic characters)";
  errorCount++;
} else {
  firstName.style.border = "1px solid green";

  const secondNameRegex = /^[A-Za-z\s]{2,100}$/;
if (!secondNameRegex.test(secondName.value.trim())) {
  secondName.style.border = "1px solid red";
  document.getElementById("secondNameError").style.color = "red";
  document.getElementById("secondNameError").textContent =
    "Enter a valid full name (2-50 alphabetic characters)";
  errorCount++;
} else {
  secondName.style.border = "1px solid green";

  //validating email

    // Validate Email using an email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.style.border = "1px solid red";
      document.getElementById("emailError").style.color = "red";
      document.getElementById("emailError").textContent =
        "Enter a valid email address";
      errorCount++;
    } else {
      email.style.border = "1px solid green";
    }

    //passwrod regex for Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
 const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/  ;
 if (!passwordRegex.test(passwordRegex.value.trim())) {
  password.style.border = "1px solid red";
  document.getElementById("passwordError").style.color = "red";
  document.getElementById("passwordError").textContent =
    "Enter a valid email address";
  errorCount++;
} else {
  email.style.border = "1px solid green";
}

if (password != confirmPassword){
  document.getElementById("passwordError").style.color = "red";
  document.getElementById("passwordError").textContent =
    "The passwords do not match ";
}
  //validate amount to buy

// if (amountToBuy >0 ) {
//     amountToBuy.style.border = "1px solid red";
//     document.getElementById("amountToBuyError").style.color = "red";
//     document.getElementById("amountToBuyError").textContent =
//       "Kindly Input the Quantity to purchase here";
//     errorCount++;
//   } else {
//     amountToBuy.style.border = "1px solid green";
  

     //to get total amount Paid
     
totalPaid = unitCost*amountToBuy;

document.getElementById("totalPaid") = totalPaid

document.getElementById("totalPaid").innerHTML = totalPaid
console.log(totalPaid)
    // Prevent form submission if there are any errors
    if (errorCount > 0) {
      e.preventDefault();
      return false;
    }
  
    return true;
  };
}})
