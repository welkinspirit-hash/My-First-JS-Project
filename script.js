// Find the customer message button.
const customerButton =
    document.getElementById("customerButton");

// Find the paragraph that will display the message.
const storeMessage =
    document.getElementById("storeMessage");

// Confirm that the JavaScript file loaded.
console.log("Lewis Store page loaded successfully.");

// Run this code when the button is clicked.
customerButton.addEventListener("click", function () {

    // Change the text displayed on the web page.
    storeMessage.textContent =
        "Welcome! Please speak to a sales consultant if you need assistance.";

    // Display a browser popup.
    alert("Thank you for visiting Lewis Furniture Store.");

    // Record the click for testing.
    console.log("The customer message was displayed.");
});
