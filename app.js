function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Cart() {
    this.items = [];
}

Cart.prototype.updateUI = function () {
    const cartList = document.getElementById('card-items');
    const totalEl = document.getElementById('total-amount');

    if (!cartList || !totalEl) return;

    cartList.innerHTML = '';
    let total = 0;

    this.items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toLocaleString()} so'm`;
        cartList.appendChild(li);
        total += item.price;
    });

    totalEl.textContent = `Umumiy summa: ${total.toLocaleString()} so'm`;
};

const shopCart = new Cart();

function renderProducts(products) {
    const grid = document.getElementById('products-list');
    if (!grid) return;

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.price.toLocaleString()} so'm</p>
            <button onclick="addToCart('${p.name}', ${p.price})">Savatchaga qo'shish</button>
        `;
        grid.appendChild(card);
    });
}

window.addToCart = function(name, price) {
    const newProduct = new Product(name, price);
    shopCart.items.push(newProduct);
    shopCart.updateUI();
};

const data = [
    new Product("Kitob", 45000),
    new Product("Naushnik", 250000),
    new Product("Sichqoncha", 120000),
    new Product("Klavyatura", 420000),
    new Product("Monitor", 1000000),
    new Product("Chexol", 50000),
];

renderProducts(data);