// Booking Form Elements
const bookingForm = document.getElementById('booking-form');
const bookingMessage = document.getElementById('booking-message');

// Optional: Section to display confirmed bookings
let bookingsList = document.getElementById('bookings-list');

// Create a container below the message if not present
if (!bookingsList) {
    bookingsList = document.createElement('div');
    bookingsList.id = 'bookings-list';
    bookingsList.className = 'mt-4';
    bookingForm.parentElement.appendChild(bookingsList);
}

// Function to create a booking item card
function createBookingCard({ name, email, date, packageType }) {
    const card = document.createElement('div');
    card.className = 'card mb-3 shadow-sm';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = `${packageType}`;

    const info = document.createElement('p');
    info.className = 'card-text';
    info.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Date:</strong> ${date}
    `;

    cardBody.appendChild(title);
    cardBody.appendChild(info);
    card.appendChild(cardBody);

    return card;
}

// Handle form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const packageType = document.getElementById('package').value;

    if (!name || !email || !date || !packageType) {
        alert('Please fill in all required fields.');
        return;
    }

    // Show success message
    bookingMessage.style.display = 'block';

    // Create and display booking card
    const bookingData = { name, email, date, packageType };
    const bookingCard = createBookingCard(bookingData);
    bookingsList.appendChild(bookingCard);

    // Reset form after 3 seconds
    setTimeout(() => {
        bookingForm.reset();
        bookingMessage.style.display = 'none';
    }, 3000);
});
