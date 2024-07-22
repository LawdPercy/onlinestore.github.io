let cart = [];
let totalPrice = 0;

function addToCart(buttonElement) {
    const productListing = buttonElement.closest('.product-listing');
    const productId = productListing.getAttribute('data-product-id');
    const productPrice = parseFloat(productListing.getAttribute('data-product-price'));
    const productName = productListing.querySelector('h2').innerText;
    const productQuantity = parseInt(productListing.querySelector('.quantity-value').innerText);
    const productTotalPrice = productPrice * productQuantity;

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += productQuantity;
        existingProduct.price = productPrice; // Update price in case it has changed
        totalPrice += productTotalPrice;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: productQuantity });
        totalPrice += productTotalPrice;
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (x${item.quantity}) - R${(item.price * item.quantity).toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    totalPriceDisplay.textContent = `R${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
}

function checkout() {
    alert(`Checking out with total price: R${totalPrice.toFixed(2)}`);
    clearCart();
}

function increaseQuantity(buttonElement) {
    const productListing = buttonElement.closest('.product-listing');
    const quantityElement = productListing.querySelector('.quantity-value');
    let quantity = parseInt(quantityElement.innerText);
    quantity += 1;
    quantityElement.innerText = quantity;
    updateProductPrice(productListing);
}

function decreaseQuantity(buttonElement) {
    const productListing = buttonElement.closest('.product-listing');
    const quantityElement = productListing.querySelector('.quantity-value');
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantity -= 1;
        quantityElement.innerText = quantity;
        updateProductPrice(productListing);
    }
}

function updateProductPrice(productListing) {
    const productPrice = parseFloat(productListing.getAttribute('data-product-price'));
    const quantity = parseInt(productListing.querySelector('.quantity-value').innerText);
    const productPriceElement = productListing.querySelector('.product-price');
    productPriceElement.innerText = `R${(productPrice * quantity).toFixed(2)}`;
}
