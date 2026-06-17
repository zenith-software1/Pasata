/**
 * Mujer Bonita — Generador de mensaje de pedido por WhatsApp
 */

const WhatsApp = {
    phone: '524773148040',
    address: 'Calle Zinapécuaro #1604, Colonia Hidalgo',

    init() {
        const btn = document.getElementById('whatsappBtn');
        if (btn) {
            btn.addEventListener('click', () => this.sendOrder());
        }
    },

    sendOrder() {
        if (!Cart.items.length) {
            alert('Tu carrito está vacío. Agrega productos antes de enviar tu pedido.');
            return;
        }

        const customerName = prompt('Por favor escribe tu nombre para recoger el pedido:');
        if (!customerName || !customerName.trim()) {
            alert('Debes escribir tu nombre para continuar.');
            return;
        }

        const message = this.buildMessage(customerName.trim());
        const url = `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener');
    },

    buildMessage(name) {
        const total = Cart.getTotal();
        let msg = `✨ *Pedido Mujer Bonita Beauty & Style*\n\n`;
        msg += `👤 *Nombre:* ${name}\n\n`;
        msg += `🛍️ *Productos:*\n`;

        Cart.items.forEach((item) => {
            msg += `  • ${item.title} — $${item.price}\n`;
        });

        msg += `\n💰 *Total:* $${total}\n\n`;
        msg += `📍 *Recoger en:*\n${this.address}\n\n`;
        msg += `_Gracias por tu preferencia 💛_`;

        return msg;
    }
};

const Panels = {
    init() {
        const menuBtn = document.getElementById('menuToggle');
        const overlay = document.querySelector('.overlay');
        const closeBtns = document.querySelectorAll('[data-close]');

        if (menuBtn) menuBtn.addEventListener('click', () => this.toggleMenu());
        if (overlay) overlay.addEventListener('click', () => this.closeAll());

        closeBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.close;
                if (target === 'menu') this.toggleMenu(false);
                if (target === 'cart') this.toggleCart(false);
            });
        });

        document.querySelectorAll('.nav-links a').forEach((link) => {
            link.addEventListener('click', () => this.toggleMenu(false));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAll();
        });
    },

    toggleMenu(force) {
        const open = typeof force === 'boolean' ? force : !document.body.classList.contains('menu-open');
        document.body.classList.toggle('menu-open', open);
        if (open) document.body.classList.remove('cart-open');
    },

    toggleCart(force) {
        const open = typeof force === 'boolean' ? force : !document.body.classList.contains('cart-open');
        document.body.classList.toggle('cart-open', open);
        if (open) document.body.classList.remove('menu-open');
    },

    openCart() {
        this.toggleCart(true);
    },

    closeAll() {
        document.body.classList.remove('menu-open', 'cart-open');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Panels.init();
    Cart.init();
    Filters.init();
    WhatsApp.init();
    ScrollReveal.init();
    Particles.init();
    Ripple.bindAll();
    NavbarScroll.init();
});
