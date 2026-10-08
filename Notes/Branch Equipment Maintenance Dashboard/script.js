// ============================================================
// BRANCH EQUIPMENT MAINTENANCE DASHBOARD
// ============================================================

// ============================================================
// TASK 1: EQUIPMENT DATA MODEL
// Create an array containing at least five equipment objects.
// ============================================================

let equipment = [
    {
        id: 1,
        itemName: "Laptop",
        category: "IT",
        branch: "Cape Town",
        status: "Available",
        replacementValue: 12000
    },
    {
        id: 2,
        itemName: "Printer",
        category: "Office",
        branch: "Cape Town",
        status: "Maintenance",
        replacementValue: 5000
    },
    {
        id: 3,
        itemName: "Projector",
        category: "AV",
        branch: "Durban",
        status: "Available",
        replacementValue: 8000
    },
    {
        id: 4,
        itemName: "Scanner",
        category: "Office",
        branch: "Johannesburg",
        status: "Maintenance",
        replacementValue: 4000
    },
    {
        id: 5,
        itemName: "Tablet",
        category: "IT",
        branch: "Durban",
        status: "Available",
        replacementValue: 6000
    }
];

// Display a readable summary of all equipment.
console.log("===== ALL EQUIPMENT =====");

equipment.forEach(function (item) {
    console.log(
        item.itemName +
        " - " +
        item.category +
        " - " +
        item.branch +
        " - " +
        item.status
    );
});


// ============================================================
// TASK 2: FILTERING BY MAINTENANCE STATUS
// Show only equipment currently in maintenance.
// ============================================================

let maintenance = equipment.filter(function (item) {
    return item.status === "Maintenance";
});

console.log("===== MAINTENANCE EQUIPMENT =====");

maintenance.forEach(function (item) {
    console.log(
        item.itemName +
        " - " +
        item.branch +
        " - " +
        item.status
    );
});


// ============================================================
// TASK 3: FORMATTED LABELS AND TOTAL VALUE
// Use map() to create formatted labels.
// Use reduce() to calculate the total replacement value.
// ============================================================

let labels = equipment.map(function (item) {
    return item.itemName + " - " + item.category;
});

console.log("===== EQUIPMENT LABELS =====");
console.log(labels);


// Calculate the total replacement value.
let totalValue = equipment.reduce(function (total, item) {
    return total + item.replacementValue;
}, 0);

console.log("Total replacement value: R" + totalValue);


// ============================================================
// TASK 4: BRANCH SELECTION AND DOM EVENTS
// Update the dashboard when a branch is selected.
// ============================================================

// Get the branch dropdown and output area from the HTML.
let branchSelect = document.getElementById("branch");
let output = document.getElementById("output");

// Only run the event code if the HTML elements exist.
if (branchSelect && output) {

    branchSelect.addEventListener("change", function () {

        let selectedBranch = this.value;

        // Filter equipment based on the selected branch.
        let filtered = equipment.filter(function (item) {
            return item.branch === selectedBranch;
        });

        // Show a message if no equipment is found.
        if (filtered.length === 0) {
            output.innerHTML = "No equipment found for this branch.";
            return;
        }

        // Display equipment for the selected branch.
        output.innerHTML = filtered.map(function (item) {
            return (
                "<strong>" +
                item.itemName +
                "</strong> - " +
                item.status
            );
        }).join("<br>");
    });
}


// ============================================================
// TASK 5: REST API REQUEST
// Make a GET request using fetch().
// ============================================================

fetch("https://jsonplaceholder.typicode.com/posts?_limit=2")

    .then(function (response) {

        // Check whether the request was successful.
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })

    .then(function (data) {

        console.log("===== REST API DATA =====");

        // Display at least two returned records in the console.
        console.log("Post 1:", data[0].title);
        console.log("Post 2:", data[1].title);

        // Display the API results on the page if output exists.
        if (output) {
            output.innerHTML +=
                "<br><br><strong>REST API Results:</strong><br>" +
                data[0].title +
                "<br>" +
                data[1].title;
        }
    })

    .catch(function (error) {

        // User-facing error message.
        if (output) {
            output.innerHTML +=
                "<br><br>Unable to load API data.";
        }

        // Show the error in the console for debugging.
        console.error("API Error:", error);
    });


// ============================================================
// TASK 6: TESTING AND DEBUGGING
// Test branches and maintenance filtering.
// ============================================================

console.log("===== TESTING STARTED =====");

// Breakpoint / step-through point.
// Open Developer Tools in the browser and run the project.
// The debugger will pause here when this line is reached.
debugger;


// Test a branch that has equipment.
function testBranch(branch) {

    let result = equipment.filter(function (item) {
        return item.branch === branch;
    });

    console.log("Testing branch:", branch);
    console.log("Result:", result);

    return result;
}


// Test branch with equipment.
testBranch("Cape Town");

// Test branch with NO equipment.
testBranch("Pretoria");


// Test maintenance filter.
let maintenanceTest = equipment.filter(function (item) {
    return item.status === "Maintenance";
});

console.log("Maintenance test:", maintenanceTest);


// ============================================================
// TEST RESULTS
// Expected results:
//
// Cape Town  -> Laptop and Printer should be returned.
// Pretoria   -> No equipment should be returned.
// Maintenance -> Printer and Scanner should be returned.
//
// Actual results should be checked in the browser console.
// ============================================================

console.log("===== TESTING COMPLETE =====");