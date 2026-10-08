// Hourly rate
const hourlyRate = 500;

// Booking records
const bookings = [
    {
        id: 1,
        customer: "John Smith",
        serviceType: "Computer Repair",
        hours: 2,
        status: "Completed"
    },
    {
        id: 2,
        customer: "Mary Jones",
        serviceType: "Software Support",
        hours: 3,
        status: "Pending"
    },
    {
        id: 3,
        customer: "David Brown",
        serviceType: "Network Support",
        hours: 4,
        status: "Completed"
    },
    {
        id: 4,
        customer: "Sarah Williams",
        serviceType: "Computer Repair",
        hours: 1.5,
        status: "Pending"
    }
];

// Get form elements
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const serviceType = document.getElementById("serviceType");
const hours = document.getElementById("hours");
const urgent = document.getElementById("urgent");
const message = document.getElementById("message");
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const bookingList = document.getElementById("bookingList");


// TASK 3: Calculate base cost
function calculateBaseCost(hours, hourlyRate) {
    return hours * hourlyRate;
}


// TASK 3: Apply urgent surcharge
function applyUrgentSurcharge(baseCost, isUrgent) {
    if (isUrgent) {
        return baseCost * 1.15;
    }
    return baseCost;
}


// TASK 2 + TASK 4: Form submission
bookingForm.addEventListener("submit", function(event) {
    // Prevent normal form submission
    event.preventDefault();

    console.log("Booking form submitted.");

    // Read form values
    const customer = customerName.value.trim();
    const service = serviceType.value;
    const inputHours = parseFloat(hours.value);
    const isUrgent = urgent.checked;

    // Simple validation check
    if (!customer || isNaN(inputHours) || inputHours <= 0) {
        if (message) message.textContent = "Please fill out all fields correctly.";
        return;
    }

    // Use reusable functions to calculate final total cost
    const baseCost = calculateBaseCost(inputHours, hourlyRate);
    const totalCost = applyUrgentSurcharge(baseCost, isUrgent);

    // Display the calculation results to the user
    if (result) {
        result.innerHTML = `
            <p><strong>Customer:</strong> ${customer}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Base Cost:</strong> R${baseCost.toFixed(2)}</p>
            <p><strong>Total Cost (inc. surcharges):</strong> R${totalCost.toFixed(2)}</p>
        `;
    }

    // Optional: Add new booking to array list tracking
    const newBooking = {
        id: bookings.length + 1,
        customer: customer,
        serviceType: service,
        hours: inputHours,
        status: "Pending"
    };
    bookings.push(newBooking);

    // Reset form fields
    bookingForm.reset();
});
