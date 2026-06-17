/**
 * Mujer Bonita — Lógica del carrito con localStorage
 */

const CART_STORAGE_KEY = 'mujerbonita_cart';

const Cart = {
    items: [],

    init() {
        this.load();
        this.bindEvents();
        this.render();
    },

    load() {
        try {
            const saved = localStorage.getItem(CART_STORAGE_KEY);
            this.items = saved ? JSON.parse(saved) : [];
        } catch {
            this.items = [];
        }
    },

    save() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    },

    add(product) {
        this.items.push({
            id: product.id,
            title: product.title,
            price: getCartPrice(product)
        });
        this.save();
        this.render();
        Panels.openCart();
    },

    remove(index) {
        this.items.splice(index, 1);
        this.save();
        this.render();
    },

    clear() {
        this.items = [];
        this.save();
        this.render();
    },

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    },

    getCount() {
        return this.items.length;
    },

    bindEvents() {
        const cartBtn = document.getElementById('cartToggle');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => Panels.toggleCart());
        }
    },

    render() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const cartCount = document.getElementById('cartCount');
        if (!cartItems) return;

        const total = this.getTotal();
        const count = this.getCount();

        if (cartCount) {
            cartCount.textContent = count;
            cartCount.classList.toggle('has-items', count > 0);
        }

        if (cartTotal) {
            cartTotal.textContent = total.toLocaleString('es-MX');
        }

        if (!this.items.length) {
            cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío. Explora el catálogo y agrega tus favoritos.</p>';
            return;
        }

        cartItems.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${escapeHtml(item.title)}</strong>
                    <span>$${item.price}</span>
                </div>
                <button class="btn-remove" type="button" aria-label="Quitar ${escapeHtml(item.title)}" data-index="${index}">✕</button>
            </div>
        `).join('');

        cartItems.querySelectorAll('.btn-remove').forEach((btn) => {
            btn.addEventListener('click', () => {
                this.remove(Number(btn.dataset.index));
            });
        });
    }
};

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[char]);
}
