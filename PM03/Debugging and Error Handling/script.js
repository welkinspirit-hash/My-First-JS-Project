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
            toggleButton.textContent = "Show Details";
        }
    });
}


// ==================================================
// SEEDED ERROR 1
// ==================================================

// ERROR:
// The wrong ID is being selected.
// "#wrongName" does not exist in the HTML.

// HOW TO FIX:
// Change "#wrongName" to "#customerName".

const customerNameInput = document.querySelector("#customerName");


// ==================================================
// SEEDED ERROR 2
// ==================================================

// ERROR:
// The remove button code is missing.
// Therefore, the request cannot be removed.

// HOW TO FIX:
// Add a click event to the remove button
// and use request.remove().

// FIXED:
// Added a remove button and click event.

const removeButton = document.createElement("button");

removeButton.textContent = "Remove";

card.appendChild(removeButton);

removeButton.addEventListener("click", function () {
    card.remove();
});


// ==================================================
// SEEDED ERROR 3
// ==================================================

// ERROR:
// event.preventDefault() is missing.
// The form will reload the page when submitted.

// HOW TO FIX:
// Add event.preventDefault() inside the submit event.

repairForm.addEventListener("submit", function (event) {

    // SEEDED ERROR 3:
    event.preventDefault()

    console.log("Form submitted");
});



