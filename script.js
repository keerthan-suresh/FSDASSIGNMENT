// script.js

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const product = event.target.parentNode;
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p').textContent;

  const cartItem = document.createElement('li');
  cartItem.innerHTML = `
    <span>${productName}</span>
    <span>${productPrice}</span>
    <button class="remove-from-cart">Remove</button>
  `;

  cartItems.appendChild(cartItem);

  updateTotalPrice();
}

// Remove from Cart Functionality
cartItems.addEventListener('click', removeFromCart);

function removeFromCart(event) {
  if (event.target.classList.contains('remove-from-cart')) {
    const cartItem = event.target.parentNode;
    cartItem.remove();

    updateTotalPrice();
  }
}

// Update Total Price
function updateTotalPrice() {
  const cartItemPrices = Array.from(cartItems.querySelectorAll('span:nth-child(2)'));
  const prices = cartItemPrices.map(price => parseFloat(price.textContent.slice(1)));
  const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Array to store products
    let products = [];

    // Function to add a product to the array
    function addProduct() {
        // Get input values
        const productImage = document.getElementById("productImage").value;
        const productName = document.getElementById("productName").value;
        const productPrice = document.getElementById("productPrice").value;

        // Create a new product object
        const newProduct = {
            image: productImage,
            name: productName,
            price: productPrice
        };

        // Add the new product to the array
        products.push(newProduct);

        // Optional: Clear input fields after adding the product
        document.getElementById("productImage").value = "";
        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";

        // Optional: Log the current list of products
        console.log(products);
    }

    // Add click event listener to the "Add Product" button
    document.getElementById("addProductButton").addEventListener("click", addProduct);
});
