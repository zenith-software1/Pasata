/**
 * Mujer Bonita — Búsqueda y filtros por categoría
 */

const Filters = {
    search: '',
    category: 'todos',

    init() {
        this.bindEvents();
        this.renderCategoryButtons();
        this.renderProducts();
        this.updateTotalCount();
    },

    bindEvents() {
        const searchInput = document.getElementById('searchInput');
        const categoryButtons = document.getElementById('categoryButtons');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.search = e.target.value;
                this.renderProducts();
            });
        }

        if (categoryButtons) {
            categoryButtons.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-category]');
                if (!btn) return;
                this.category = btn.dataset.category;
                this.renderCategoryButtons();
                this.renderProducts();
            });
        }
    },

    normalizeText(value) {
        return String(value)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    },

    productMatches(product) {
        const normalizedTitle = this.normalizeText(product.title);
        const normalizedSearch = this.normalizeText(this.search);
        const category = inferCategory(product);
        const matchesSearch = !normalizedSearch || normalizedTitle.includes(normalizedSearch);
        const matchesCategory = this.category === 'todos' || category === this.category;
        return matchesSearch && matchesCategory;
    },

    renderCategoryButtons() {
        const container = document.getElementById('categoryButtons');
        if (!container) return;

        container.innerHTML = CATEGORIES.map((cat) => `
            <button
                class="category-btn ${cat.id === this.category ? 'is-active' : ''}"
                type="button"
                data-category="${cat.id}">
                ${cat.icon} ${cat.label}
            </button>
        `).join('');
    },

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        const noResults = document.getElementById('noResults');
        const visibleCount = document.getElementById('visibleCount');
        if (!grid) return;

        const filtered = PRODUCTS.filter((p) => this.productMatches(p));

        if (visibleCount) visibleCount.textContent = filtered.length;
        if (noResults) noResults.classList.toggle('is-visible', filtered.length === 0);

        grid.innerHTML = '';

        filtered.forEach((product, index) => {
            const category = getCategoryMeta(product);
            const prices = getPrices(product);
            const card = document.createElement('article');
            card.className = 'product-card';
            card.style.animationDelay = `${Math.min(index * 0.04, 0.6)}s`;

            card.innerHTML = `
                <div class="product-image-wrap">
                    <span class="product-badge">${category.icon} ${escapeHtml(category.label)}</span>
                    <img src="${escapeHtml(getImagePath(product.img))}" alt="${escapeHtml(product.title)}" loading="lazy" decoding="async">
                </div>
                <div class="product-body">
                    <h3 class="product-title">${escapeHtml(product.title)}</h3>
                    <div class="price-list">
                        ${prices.map((p) => `
                            <div class="price-row">
                                <span>${p.label}</span>
                                <span class="price-value">$${p.value}</span>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn-add-cart ripple-host" type="button" data-id="${product.id}">
                        Agregar al pedido
                    </button>
                </div>
            `;

            const img = card.querySelector('img');
            attachImageFallback(img, product);

            card.querySelector('.btn-add-cart').addEventListener('click', (e) => {
                Ripple.create(e);
                Cart.add(product);
            });

            grid.appendChild(card);
        });

    },

    updateTotalCount() {
        const el = document.getElementById('totalProducts');
        if (el) el.textContent = PRODUCTS.length;
    }
};

function attachImageFallback(img, product) {
    img.addEventListener('error', () => {
        img.classList.add('is-placeholder');
        img.alt = `Imagen de ${product.title}`;
        img.src = makePlaceholder(product);
    });
}

function makePlaceholder(product) {
    const category = getCategoryMeta(product);
    const safeTitle = escapeHtml(product.title);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700">
            <defs>
                <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stop-color="#1A1A1A"/>
                    <stop offset="50%" stop-color="#242424"/>
                    <stop offset="100%" stop-color="#1A1A1A"/>
                </linearGradient>
            </defs>
            <rect width="700" height="700" fill="url(#bg)"/>
            <rect x="40" y="40" width="620" height="620" rx="40" fill="none" stroke="#C9A96E" stroke-width="2" opacity="0.4"/>
            <text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-size="100">${category.icon}</text>
            <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="#C9A96E">Mujer Bonita</text>
            <text x="50%" y="64%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="#9A8F82">${safeTitle.slice(0, 36)}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
