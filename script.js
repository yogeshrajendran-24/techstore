// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 85.99,
        description: 'Premium noise-canceling headphones',
        icon: '🎧'
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 189.99,
        description: 'Fitness tracking smartwatch',
        icon: '⌚'
    },
    {
        id: 3,
        name: 'USB-C Cable',
        price: 12.99,
        description: 'Fast charging cable',
        icon: '🔌'
    },
    {
        id: 4,
        name: 'Phone Case',
        price: 24.99,
        description: 'Durable protective case',
        icon: '📱'
    },
    {
        id: 5,
        name: 'Screen Protector',
        price: 9.99,
        description: 'Tempered glass protector',
        icon: '🛡️'
    },
    {
        id: 6,
        name: 'Power Bank',
        price: 34.99,
        description: '20000mAh portable charger',
        icon: '🔋'
    }
];

// Cart Storage
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize
function init() {
    renderProducts();
    setupEventListeners();
}

// Render Products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div>Quantity: ${item.quantity}</div>
                </div>
                <div>
                    <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Order placed! Total: $${total.toFixed(2)}\n\nThank you for your purchase!`);
            cart = [];
            updateCart();
            cartModal.style.display = 'none';
        }
    });
}

// Start the app
init();