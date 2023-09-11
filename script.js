// Sélectionner les éléments du DOM
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const removeButtons = document.querySelectorAll('.remove-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const quantityElements = document.querySelectorAll('.quantity');
const totalPriceElement = document.getElementById('total-price');
const checkoutButton = document.getElementById('checkout-btn');

// Ajouter des écouteurs d'événements pour les boutons de décrementation
decrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    }
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons d'incrémentation
incrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);

    quantity++;
    quantityElement.textContent = quantity;
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons de suppression
removeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    item.remove();
    calculateTotalPrice();
  });
});

// Ajouter des écouteurs d'événements pour les boutons "J'aime"
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

// Calculer le prix total du panier
function calculateTotalPrice() {
  let totalPrice = 0;

  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    const quantityElement = item.querySelector('.quantity');
    const priceElement = item.querySelector('p');
    const quantity = parseInt(quantityElement.textContent);
    const price = parseFloat(priceElement.textContent.match(/\d+/)[0]);
    totalPrice += quantity * price;
  });

  totalPriceElement.textContent = `Prix total : ${totalPrice} DT`;
}

// Ajouter un écouteur d'événement pour le bouton de validation de commande
checkoutButton.addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  const itemNames = [];

  items.forEach((item) => {
    const itemName = item.querySelector('h3').textContent;
    itemNames.push(itemName);
  });

  alert(`Vous avez commandé : ${itemNames.join(', ')}`);
});

// Calculer le prix total initial
calculateTotalPrice();