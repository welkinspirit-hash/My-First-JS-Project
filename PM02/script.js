/*console.log("Learner: Shane");
console.log("Department: Orion");
console.log("I want to be equipped  on Java Script.");*/

/*const ticketId = "TCK-1001";
let ticketStatus = "Open";

console.log(ticketId);
console.log(ticketStatus);

ticketStatus = "In Progress";
console.log(ticketStatus);*/

/*const ticketId = "TCK-9999";
let ticketStatus = "Closed";

console.log(ticketId);
console.log(ticketStatus);

ticketStatus = "In Progress";
console.log(ticketStatus);*/






/*const ticketNumber = "Jira-456";
const customerName = "Ryan Williams";
const department = "Ops Support";
let ticketPriority = "Low";
let assignedTo = "Closed";

// Reassigning the ticket to a specific agent
assignedTo = "Shane Davis";

// Logging the ticket details
console.log("Ticket Details:");
console.log("Number:", ticketNumber);
console.log("Customer:", customerName);
console.log("Department:", department);
console.log("Priority:", ticketPriority);
console.log("Assigned To:", assignedTo);*/

/*const ticketNumber = "HD-2451";
const customerName = "Thabo Mokoena";
const department = "Software Support";
let ticketPriority = "High";
let assignedTo = "Unassigned";

function displayTicketSummary() {
    console.log(`--- Ticket #${ticketNumber} Summary ---`);
    console.log(`Customer: ${customerName}`);
    console.log(`Department: ${department}`);
    console.log(`Priority: ${ticketPriority}`);
    console.log(`Assigned To: ${assignedTo}`);
}

// Call the function
displayTicketSummary();*/



/*let ticketStatus = "Closed";
console.log("Before update:", ticketStatus);

ticketStatus = "Unresolved";
console.log("After update:", ticketStatus);*/




/*const requestNumber = "TKT-911";
const employeeName = "Shane Davis";
const departmentName = "Finance";
const requestType = "Keyboard";
let isApproved = true;

console.log(requestNumber);
console.log(employeeName);
console.log(departmentName);
console.log(requestType);
console.log(isApproved);*/



/*const departmentName = "Helpdesk";
const openTicketCount = 18;
const escalationRequired = true;

console.log(
  `${departmentName} has ${openTicketCount} open tickets. Escalation required: ${escalationRequired}`
);*/





/*const numberOfTickets = 7;
const minutesPerTicket = 20;
const totalMinutes = numberOfTickets * minutesPerTicket;
const isLongWorkload = totalMinutes > 120;

console.log("Total minutes:", totalMinutes);
console.log("Long workload:", isLongWorkload);*/



/*const lunchChoice = "Burger";

if (lunchChoice === "Pizza") {
    console.log("Order from the local Italian pizzeria.");
} else if (lunchChoice === "Burger") {
    console.log("Drive thru the nearest burger joint.");
} else {
    console.log("Eat a healthy homemade salad.");*/




/*function getAnimalHabitat(animalType) {
    if (animalType === "Dog") {
        return "Assign to SPCA.";
    } else if (animalType === "Cat") {
        return "Assign to litter yard.";
    } else if (animalType === "Cow") {
        return "Assign to Mcdonald Farm.";
    } else {
        return "Assign to Greener Pastures.";
    }
}

// Testing the function
console.log(getAnimalHabitat("Cat"));*/





// Array of 5 items
/*const playlist = [
  "Bohemian Rhapsody",
  "Billie Jean",
  "Hotel California",
  "Stayin' Alive",
  "Imagine"
];

// Loop to display each item with a custom message
for (const song of playlist) {
  console.log(`Now playing: ${song}`);*/




// Check if an order qualifies for a free express delivery upgrade.
const shoppingCartTotal = 150;
const isVipMember = true;

if (shoppingCartTotal >= 100 && isVipMember === true) {
    console.log("Upgrade package to free overnight shipping!");
} else {
    console.log("Ship package via standard ground delivery.");
}