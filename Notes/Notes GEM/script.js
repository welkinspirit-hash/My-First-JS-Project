
//Project setup and order form//
//Create a browser project using index.html, style.css and script.js and link the files correctly//
// Build an order form that captures customer name, product name, quantity, unit price, member status and delivery type//
//Include a clearly identified area where JavaScript can display messages and order results//

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let delivery = document.getElementById("delivery").checked;

    document.getElementById("output").innerHTML =
        "Customer: " + name +
        "<br>product: " + name +
        "<br>quantity: " + quantity +
        "<br>member : " + status +
        "<br>unit price: " + unit +
        "<br>delivery : " + type ;
});




//Order calculation and summary//
//Read the values from the order form. Convert quantity and unit price to numbers before performing arithmetic//
//Calculate the subtotal as quantity × unit price. Apply a 10% member discount only when the customer is a member//
//Display a readable summary showing customer name, product, subtotal, discount amount and final total//

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = Number(document.getElementById("hours").value);
    let product = document.getElementById("urgent").checked;
    let rate = 200;
    let cost = hours * rate;

    if (urgent) {
        cost = cost * 1.10;
    }

    document.getElementById("output").innerHTML = "Final amount: R" + cost.toFixed(2);
});



//Reusable calculation functions//
//Create a reusable function that receives quantity and unit price and returns the subtotal//
// Create a second reusable function that receives the subtotal and member status and returns the final total after the member discount decision//
// Use both functions in the order workflow. Your functions must return values rather than only writing directly to the page//


function calculateBaseCost(hours, rate) {
    return hours * rate;
}

function applyUrgentSurcharge(cost) {
    return cost * 1.10;
}

document.getElementById("OrderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let hours = Number(document.getElementById("hours").value);
    let urgent = document.getElementById("urgent").checked;
    let rate = 200;

    let cost = calculateBaseCost(hours, rate);

    if (urgent) {
        cost = applyUrgentSurcharge(cost);
    }

    document.getElementById("output").innerHTML = "Final amount: R" + cost.toFixed(2);
});


//Validation and form event//
//Handle the order form submit event in JavaScript and prevent the browser's default submission. 
// Do not process the order when required fields are empty, quantity is not a positive whole number, or unit price is not a valid positive number. Display clear validation feedback using a text-safe DOM approach. When the data is valid, 
// display a success message and continue processing//


document.getElementById("OrderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let service = document.getElementById("service").value;
    let hours = Number(document.getElementById("hours").value);
    let output = document.getElementById("output");

    if (name === "" || service === "" || !Number.isFinite(hours) || hours <= 0) {
        output.innerHTML = "Please enter a valid name.";
        return;
    }

    output.innerHTML = "Order is a success.";
});
 

//Order records and status update//
//When a valid order is submitted, create an order object and add it to an orders array.//
//Each order must include an id, customerName, productName, finalTotal and status.//
//Display the orders on the page. Add a simple button next to each order that changes its status from Pending to Ready.//
//Update the correct order object and then update the status shown on the page.//
//It is sufficient for the button to perform this one status change//

let bookings = [
    { id: 1, customer: "John", productname: "Handy Andy", finalTotal: 2, status: "Confirmed" },
    { id: 2, customer: "Sarah", productname: "Repair", finalTotal: 3, status: "Pending" },
    { id: 3, customer: "Mike", productname: "Cleaning", finalTotal: 1, status: "Confirmed" },
    { id: 4, customer: "Lisa", productname: "Consultation", finalTotal: 2, status: "Cancelled" }
];

function displayOrders(list) {
    document.getElementById("output").innerHTML = list.map(function(order) {
        return order.id + " - " + booking.customer + " - " +
               order.serviceType + " - " + booking.hours + " hours - " +
               order.status;
    }).join("<br>");
}

function filterOrders(value) {
    let filtered = displayOrders.filter(function(booking) {
        return order.status === value || order.serviceType === value;
    });

    displayOrders(filtered);
}

displayOrders(orders);


//Order filtering, testing and debugging//

//Add a simple status filter that lets the user show All orders,// 
// Pending orders or Ready orders. Use the orders array to display only the matching records.// 
// Then use the browser console and at least one breakpoint or step-through action to inspect the order workflow.// 
// Run and record at least three tests: one normal order, one member order and one invalid order or status-filter case. //
// Compare the expected and actual result and correct any defect found.//

console.log("Testing started");

debugger;

function testOrders(orders,status) {
    if (orders <= 0) {
        console.log("Too Little Orders");
        return;
    }

    let cost = hours * 200;

    if (urgent) {
        cost = cost * 1.15;
    }

    console.log("cost: R" + cost.toFixed(2));
}

testOrders(2, false); // Normal 
testOrders(2, true);  // Urgent 
testOrders(0, false); // Invalid 






