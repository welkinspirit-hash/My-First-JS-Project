const repairForm = document.querySelector("#repairForm");
const requestList = document.querySelector("#requestList");
const message = document.querySelector("#message");

const repairRequests = [];

repairForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const customerName = document.querySelector("#customerName").value;
    const contactNumber = document.querySelector("#contactNumber").value;
    const product = document.querySelector("#product").value;
    const repairDetails = document.querySelector("#repairDetails").value;

    const repairRequest = {
        customerName: customerName,
        contactNumber: contactNumber,
        product: product,
        repairDetails: repairDetails,
        status: "Approved",

        getSummary: function () {
            return this.customerName + " - " + this.product;
        }
    };

    repairRequests.push(repairRequest);

    displayRequest(repairRequest);

    message.textContent = "Repair request submitted successfully!";

    repairForm.reset();
});


function displayRequest(request) {

    const card = document.createElement("div");

    card.classList.add("request-card");

    card.innerHTML = `
        <h3>${request.getSummary()}</h3>

        <button class="toggleButton">Show Details</button>

        <div class="status-details hidden">
            <p><strong>Customer:</strong> ${request.customerName}</p>
            <p><strong>Contact:</strong> ${request.contactNumber}</p>
            <p><strong>Product:</strong> ${request.product}</p>
            <p><strong>Repair:</strong> ${request.repairDetails}</p>
            <p><strong>Status:</strong> ${request.status}</p>
        </div>
    `;

    requestList.appendChild(card);

    const toggleButton = card.querySelector(".toggleButton");
    const details = card.querySelector(".status-details");

    toggleButton.addEventListener("click", function () {

        details.classList.toggle("hidden");

        if (details.classList.contains("hidden")) {
            toggleButton.textContent = "Show Details";
        } else {
            toggleButton.textContent = "Hide Details";
        }
    });
}


// ===============================
// DEBUGGING AND ERROR HANDLING
// ===============================

// console.log() - used to check that the program is working
console.log("Furniture Repair System loaded");

// console.warn() - used for warnings
console.warn("Debugging mode is active");

// console.error() - used to show an error
console.error("Test error message");


// ===============================
// TRY...CATCH EXAMPLE
// ===============================

try {
    let testNumber = 10;

    if (testNumber < 0) {
        throw new Error("Number cannot be negative");
    }

    console.log("Try section worked correctly");

} catch (error) {
    console.error("Controlled error:", error.message);
}


// ===============================
// BREAKPOINT
// ===============================

function testRequest(request) {

    // Put a breakpoint on the next line in VS Code
    console.log("Checking request:", request);

    console.log("Customer:", request.Shane);
    console.log("Product:", request.Chair);

    return request;
}



function testRequest(request) {

    console.log("Checking request:", request);

    console.log("Customer:", request.customerName);
    console.log("Product:", request.product);

    return request;
}


// Test the function
const testData = {
    customerName: "Shane",
    product: "Chair"
};

testRequest(testData);

