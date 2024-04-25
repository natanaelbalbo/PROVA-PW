const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const ulElement = document.querySelector('ul');

ulElement.innerHTML = '';


favorites.forEach((municipality) => {
    const liElement = document.createElement('li');
    liElement.textContent = municipality;
    ulElement.appendChild(liElement);
});