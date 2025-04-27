document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting


const buyerName = document.getElementById("buyerName");
const amountToBuy =  document.getElementById("amountToBuy").value;

const unitCost = document.getElementById("unitCost").value;
// const phoneNumber = document.getElementById("phoneNumber");
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
document.getElementById("buyerNameError").textContent = "";  
document.getElementById("amountToBuyError").textContent = ""
// document.getElementById("NINumberError").textContent = "";
// document.getElementById("phoneNumberError").textContent = "";
// document.getElementById("amountDueError").textContent = ""; 
// document.getElementById("dueDateError").textContent = "";
// document.getElementById("dateOfBirthError").textContent = "";
// document.getElementById("produceNameError").textContent = "";
// document.getElementById("maritalStatusError").textContent = "";
// document.getElementById("addressError").textContent = "";
// document.getElementById("cityError").textContent = "";
// document.getElementById("salesAgentNameError").textContent = "";



// Reset field borders
buyerName.style.border = "";
amountToBuy.style.border = "";
// NINumber.style.border = "";  
// phoneNumber.style.border = "";  
// amountDue.style.border = "";
// dueDate.style.border = "";
// dateOfBirth.style.border = "";
// produceName.style.border = "";
// maritalStatus.style.border = "";
// address.style.border = "";
// city.style.border = "";
// salesAgentName.style.border = "";


// Validate buyername: 2 to 50 alphabetic characters (spaces allowed)
const buyernameRegex = /^[A-Za-z\s]{2,100}$/;
if (!buyernameRegex.test(buyerName.value.trim())) {
  buyerName.style.border = "1px solid red";
  document.getElementById("buyerNameError").style.color = "red";
  document.getElementById("buyerNameError").textContent =
    "Enter a valid full name (2-50 alphabetic characters)";
  errorCount++;
} else {
  buyerName.style.border = "1px solid green";

  //validate amount to buy

if (amountToBuy >0 ) {
    amountToBuy.style.border = "1px solid red";
    document.getElementById("amountToBuyError").style.color = "red";
    document.getElementById("amountToBuyError").textContent =
      "Kindly Input the Quantity to purchase here";
    errorCount++;
  } else {
    amountToBuy.style.border = "1px solid green";
  

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
