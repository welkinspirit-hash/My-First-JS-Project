// =========================================================================
// SECTION 1: DYNAMIC SHOPPING LIST LOGIC (Activity 3.3)
// =========================================================================
const itemForm = document.getElementById('item-form');
const itemInput = document.querySelector('#item-input');
const shoppingList = document.getElementById('shopping-list');
const themeBtn = document.getElementById('theme-btn');
const bodyElement = document.body;

itemForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    const itemText = itemInput.value.trim();

    if (itemText !== "") {
        const li = document.createElement('li');
        li.textContent = itemText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';

        deleteBtn.addEventListener('click', function() {
            shoppingList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        shoppingList.appendChild(li);
        itemInput.value = '';
    }
});

themeBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-theme');
    if (bodyElement.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Switch to Light Mode';
    } else {
        themeBtn.textContent = 'Switch to Dark Mode';
    }
});

// =========================================================================
// SECTION 2: LIVE API FETCH LOGIC (Activity 3.4)
// =========================================================================
const fetchBtn = document.getElementById('fetch-btn');
const errorBtn = document.getElementById('error-btn');
const apiStatus = document.getElementById('api-status');
const userCard = document.getElementById('user-card');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userCompany = document.getElementById('user-company');

async function loadUserData(url) {
    // Show a loading message and clear previous states
    apiStatus.textContent = "Loading user data from API...";
    apiStatus.className = "status-msg";
    userCard.style.display = "none";

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const data = await response.json();

        // Clear status text on success
        apiStatus.textContent = "";

        // Populate fields cleanly
        userName.textContent = data.name;
        userEmail.textContent = data.email;
        userCompany.textContent = data.company.name;
        
        // Show the completed card
        userCard.style.display = "block";

    } catch (error) {
        // Display the error alert to the user gracefully
        apiStatus.textContent = `Failed to get data: ${error.message}`;
        apiStatus.className = "status-msg error";
        userCard.style.display = "none";
    }
}

// Event Listeners for Buttons
fetchBtn.addEventListener('click', function() {
    const randomId = Math.floor(Math.random() * 10) + 1;
    // Uses the complete, working sandbox endpoint URL
    loadUserData(`https://typicode.com{randomId}`);
});

errorBtn.addEventListener('click', function() {
    // Intentionally uses an invalid path to trigger the catch block cleanly
    loadUserData('https://typicode.com');
});
