document.getElementById('price-range').addEventListener('input', function () {
    document.getElementById('price-range-value').innerText = this.value;
});

document.getElementById('searchBtn').addEventListener('click', function () {
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('price-range').value;
    const bedrooms = document.getElementById('bedrooms').value;

    alert(`Searching for houses in ${location} with a price up to ₹${priceRange} and ${bedrooms} bedroom(s).`);
    
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}

window.addEventListener('load', function () {
    showNotification('New property listed in your favorite location!');
    showNotification('Price dropped for a house in your wishlist!');
});

document.querySelector('.scroll-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
