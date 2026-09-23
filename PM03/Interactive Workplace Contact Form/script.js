const contactForm = document.querySelector("#contactForm");

const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = "";

    const name = document.querySelector("#name").value.trim();
    const department = document.querySelector("#department").value.trim();
    const email = document.querySelector("#email").value.trim();
    const category = document.querySelector("#category").value;
    const message = document.querySelector("#message").value.trim();

    // Check required fields
    if (name === "") {
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    if (department === "") {
        errorMessage.textContent = "Please enter your department.";
        return;
    }

    if (email === "") {
        errorMessage.textContent = "Please enter your email.";
        return;
    }

    if (category === "") {
        errorMessage.textContent = "Please select an issue category.";
        return;
    }

    if (message === "") {
        errorMessage.textContent = "Please enter your message.";
        return;
    }

    // Check email format
    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Successful submission
    successMessage.textContent =
        "Your contact request was submitted successfully!";

    contactForm.reset();
});


//DOM Methods//
//This handles the form submission:

const contactForm = document.querySelector("#contactForm");
const errorMessage = document.querySelector("#errorMessage");
const successMessage = document.querySelector("#successMessage");

document.querySelector("#name")
document.querySelector("#department")
document.querySelector("#email")

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // validation code goes here

});



// ===============================
// TEST CASES
// ===============================

// VALID TEST
console.log("Test 1 - Valid form");
console.log("Expected: Form submits successfully");


// INVALID TEST
console.log("Test 2 - Invalid email");
console.log("Input: shane@email");
console.log("Expected: Please enter a valid email address.");


// INVALID TEST
console.log("Test 3 - Missing name");
console.log("Input: Name left empty");
console.log("Expected: Please enter your name.");


// BOUNDARY TEST
console.log("Test 4 - Very short message");
console.log("Input: A single character");
console.log("Expected: Form should still process the input.");


// BOUNDARY TEST
console.log("Test 5 - Very long message");
console.log("Input: A very long message");
console.log("Expected: Form should still accept the message.");