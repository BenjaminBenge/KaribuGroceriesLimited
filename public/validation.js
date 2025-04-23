//formValidation

const validateUserForm = (e) => {
  // Grab input elements by their IDs
  // const form = document.getElementById("form");
  const buyerName = document.getElementById("buyerName");
  const gender = document.querySelector("input[name='gender']:checked");
  const NINumber = document.getElementById("NINumber");
  const phoneNumber = document.getElementById("phoneNumber");
  const address = document.getElementById("address");
  const amountDue = document.getElementById("amountDue");
  const dueDate = document.getElementById("dueDate");
  const produceName = document.getElementById("produceName");
  const dateOfBirth = document.getElementById("dateOfBirth");
  const maritalStatus = document.getElementById("maritalStatus");
  const city = document.getElementById("city");
  const salesAgentName = getElementById("salesAgentName");
  
 
  let errorCount = 0;

  // Clear previous error messages for all fields
  document.getElementById("buyerNameError").textContent = "";  
  document.getElementById("genderError").textContent = ""
  document.getElementById("NINumberError").textContent = "";
  document.getElementById("phoneNumberError").textContent = "";
  document.getElementById("amountDueError").textContent = ""; 
  document.getElementById("dueDateError").textContent = "";
  document.getElementById("dateOfBirthError").textContent = "";
  document.getElementById("produceNameError").textContent = "";
  document.getElementById("maritalStatusError").textContent = "";
  document.getElementById("addressError").textContent = "";
  document.getElementById("cityError").textContent = "";
  document.getElementById("salesAgentNameError").textContent = "";
 
  

  // Reset field borders
  buyerName.style.border = "";
  gender.style.border = "";
  NINumber.style.border = "";  
  phoneNumber.style.border = "";  
  amountDue.style.border = "";
  dueDate.style.border = "";
  dateOfBirth.style.border = "";
  produceName.style.border = "";
  maritalStatus.style.border = "";
  address.style.border = "";
  city.style.border = "";
  salesAgentName.style.border = "";
 

  // Validate Fullname: 2 to 50 alphabetic characters (spaces allowed)
  const buyernameRegex = /^[A-Za-z\s]{2,100}$/;
  if (!buyernameRegex.test(buyerName.value.trim())) {
    buyerName.style.border = "1px solid red";
    document.getElementById("buyerNameError").style.color = "red";
    document.getElementById("buyerNameError").textContent =
      "Enter a valid full name (2-50 alphabetic characters)";
    errorCount++;
  } else {
    buyerName.style.border = "1px solid green";
  }

  // // Validate Fullname: 2 to 50 alphabetic characters (spaces allowed)
  // const salesAgentNameRegex = /^[A-Za-z\s]{2,100}$/;
  // if (!salesAgentNameRegex.test(salesAgentName.value.trim())) {
  //   salesAgentName.style.border = "1px solid red";
  //   document.getElementById("salesAgentNameError").style.color = "red";
  //   document.getElementById("salesAgentNameError").textContent =
  //     "The name should be valid with 5-50 alphabetic characters";
  //   errorCount++;
  // } else {
  //   salesAgentName.style.border = "1px solid green";
  // }


  // // Validate Address: must not be empty and have at least 5 characters
  // if (address.value.trim() === "" || address.value.trim().length < 2) {
  //   address.style.border = "1px solid red";
  //   document.getElementById("addressError").style.color = "red";
  //   document.getElementById("addressError").textContent =
  //     "Enter a valid address (at least 5 characters)";
  //   errorCount++;
  // } else {
  //   address.style.border = "1px solid green";
  // }

  // // Validate City: must not be empty and have at least 2 characters
  // if (city.value.trim() === "" || city.value.trim().length < 2) {
  //   city.style.border = "1px solid red";
  //   document.getElementById("cityError").style.color = "red";
  //   document.getElementById("cityError").textContent =
  //     "Enter a valid city name";
  //   errorCount++;
  // } else {
  //   city.style.border = "1px solid green";
  // }



  // // Validate Telephone: must be non-empty and digits only
  // const phoneRegex = /^\d+$/;
  // if (phoneNumber.value.trim() === "") {
  //   phoneNumber.style.border = "1px solid red";
  //   document.getElementById("phoneNumber").style.color = "red";
  //   document.getElementById("phoneNumber").textContent =
  //     "Telephone is required";
  //   errorCount++;
  // } else if (!phoneRegex.test(phoneNumber.value.trim())) {
  //   phoneNumber.style.border = "1px solid red";
  //   document.getElementById("phoneNumberError").style.color = "red";
  //   document.getElementById("phoneNumberError").textContent =
  //     "Enter a valid telephone number (digits only)";
  //   errorCount++;
  // } else {
  //   phoneNumber.style.border = "1px solid green";
  // }

  // // Validate Gender: ensure a radio button is selected
  // if (!gender) {
  //   document.getElementById("genderError").style.color = "red";
  //   document.getElementById("genderError").textContent =
  //     "Please select your gender";
  //   errorCount++;
  // }

  // // Validate Terms and Conditions: must be checked
  // if (!terms.checked) {
  //   document.getElementById("termsError").style.color = "red";
  //   document.getElementById("termsError").textContent =
  //     "You must accept the terms and conditions";
  //   errorCount++;
  // }

  // Prevent form submission if there are any errors
  if (errorCount > 0) {
    e.preventDefault();
    return false;
  }

  return true;
};
