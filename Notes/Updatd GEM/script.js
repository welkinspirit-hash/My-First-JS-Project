
// ==========================================
// Project setup and order form
// ==========================================
// Browser project setup linked correctly.
// Captures customer name, product name, quantity, unit price, member status, and delivery type.
// Includes a clearly identified area (#output) for messages and order results.

// Global orders array to hold submitted order records
let orders = [
    { id: 1, customerName: "John", productName: "Handy Andy", finalTotal: 18.00, status: "Pending" },
    { id: 2, customerName: "Sarah", productName: "Repair Tool", finalTotal: 45.50, status: "Ready" }
];

// ==========================================
// Reusable calculation functions
// ==========================================
// Function 1: Receives quantity and unit price, returns subtotal
function calculateSubtotal(quantity, unitPrice) {
    return quantity * unitPrice;
}

// Function 2: Receives subtotal and member status, returns final total after 10% discount if member
function calculateFinalTotal(subtotal, memberStatus) {
    if (memberStatus === "member") {
        return subtotal * 0.90; // Apply 10% discount
    }
    return subtotal;
}

// ==========================================
// Validation and form event & Order calculation and summary
// ==========================================
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Read form values
    let name = document.getElementById("name").value.trim();
    let product = document.getElementById("product").value.trim();
    let quantityStr = document.getElementById("quantity").value;
    let unitPriceStr = document.getElementById("unitPrice").value;
    let status = document.getElementById("status").value;
    let delivery = document.getElementById("delivery").value;
    let output = document.getElementById("output");

    // Convert quantity and unit price to numbers
    let quantity = Number(quantityStr);
    let unitPrice = Number(unitPriceStr);

    // Validation: check empty fields, positive whole number quantity, and positive unit price
    if (name === "" || product === "" || isNaN(quantity) || quantity <=  0 || !Number.isInteger(quantity) || isNaN(unitPrice) || unitPrice <= 0) {
        output.innerHTML = "<span style='color: red;'>Error: Please ensure all fields are filled correctly. Quantity must be a positive whole number, and unit price must be a valid positive number.</span>";
        return;
    }

    // Perform calculations using reusable functions
    let subtotal = calculateSubtotal(quantity, unitPrice);
    let discountAmount = (status === "member") ? (subtotal * 0.10) : 0;
    let finalTotal = calculateFinalTotal(subtotal, status);

    // Create a new order object
    let newOrder = {
        id: orders.length + 1,
        customerName: name,
        productName: product,
        finalTotal: finalTotal,
        status: "Pending" // Default new status
    };

    // Add to orders array
    orders.push(newOrder);

    // Display success message and readable summary
    output.innerHTML = `
        <strong style="color: green;">Order is a success!</strong><br><br>
        <strong>Order Summary:</strong><br>
        Customer: ${name}<br>
        Product: ${product}<br>
        Quantity: ${quantity}<br>
        Unit Price: R${unitPrice.toFixed(2)}<br>
        Member Status: ${status}<br>
        Delivery Type: ${delivery}<br>
        Subtotal: R${subtotal.toFixed(2)}<br>
        Discount Amount: R${discountAmount.toFixed(2)}<br>
        <strong>Final Total: R${finalTotal.toFixed(2)}</strong>
    `;

    // Refresh order list display
    displayOrders(orders);
});


// ==========================================
// Order records and status update
// ==========================================
function displayOrders(list) {
    let outputArea = document.getElementById("output");
    
    // If no orders match
    if (list.length === 0) {
        outputArea.innerHTML += "<br><hr><p>No orders found.</p>";
        return;
    }

    let html = "<br><hr><h3>All Order Records:</h3><ul>";
    list.forEach(function(order) {
        html += `<li>
            ID: ${order.id} | Customer: ${order.customerName} | Product: ${order.productName} | Total: R${order.finalTotal.toFixed(2)} | Status: <span id="status-${order.id}">${order.status}</span>
            <button onclick="toggleOrderStatus(${order.id})">Toggle Status</button>
        </li>`;
    });
    html += "</ul>";
    
    // Append order list to output area
    outputArea.innerHTML += html;
}

// Function to change status from Pending to Ready (or vice-versa)
function toggleOrderStatus(id) {
    let order = orders.find(o => o.id === id);
    if (order) {
        order.status = (order.status === "Pending") ? "Ready" : "Pending";
        
        // Re-filter and display current view
        let currentFilter = document.getElementById("statusFilter").value;
        filterOrders(currentFilter);
    }
}


// ==========================================
// Order filtering, testing and debugging
// ==========================================
function filterOrders(filterValue) {
    let filteredList;
    if (filterValue === "All") {
        filteredList = orders;
    } else {
        filteredList = orders.filter(order => order.status === filterValue);
    }
    
    // Re-render display with filtered items
    let outputArea = document.getElementById("output");
    outputArea.innerHTML = "<strong>Filtered View:</strong>";
    displayOrders(filteredList);
}

// Event listener for status filter dropdown
document.getElementById("statusFilter").addEventListener("change", function(event) {
    filterOrders(event.target.value);
});

// Console debugging and tests setup
console.log("Testing started");

function testOrderWorkflow(quantity, unitPrice, memberStatus) {
    let subtotal = calculateSubtotal(quantity, unitPrice);
    let total = calculateFinalTotal(subtotal, memberStatus);
    console.log(`Test -> Qty: ${quantity}, Unit Price: ${unitPrice}, Status: ${memberStatus} => Final Total: R${total.toFixed(2)}`);
}

// Run and record at least three tests:
testOrderWorkflow(2, 100, "non-member"); // Test 1: Normal order (Expected: R200.00)
testOrderWorkflow(2, 100, "member");     // Test 2: Member order (Expected: R180.00 with 10% discount)
testOrderWorkflow(0, 100, "non-member"); // Test 3: Invalid quantity case
