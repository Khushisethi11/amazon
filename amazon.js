const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

darkModeToggle.addEventListener('click', () => {
  html.classList.toggle('dark-mode');
  const isDarkMode = html.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  html.classList.add('dark-mode');
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.querySelector('.cart-items');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productId = button.getAttribute('data-product-id');
    const cartItem = document.createElement('li');
    cartItem.textContent = productName;
    cartItem.dataset.productId = productId;
    cartItemsList.appendChild(cartItem);
  });
});
