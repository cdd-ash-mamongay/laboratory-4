import { getStockStatus } from "./inventoryUtils.js";

export function displayProducts(products) {
const productList = document.getElementById("productList");
const noResultsMessage = document.getElementById("noResultsMessage");

productList.innerHTML = "";

if (products.length === 0) {
    noResultsMessage.style.display = "block";
    return;
}

noResultsMessage.style.display = "none";

products.forEach(product => {

    const {
        id,
        name,
        category,
        price,
        stock
    } = product;

    const status = getStockStatus(stock);

    let statusClass = "in-stock";

    if (status === "Low Stock") {
        statusClass = "low-stock";
    }

    if (status === "Out of Stock") {
        statusClass = "out-of-stock";
    }

    const productCard = document.createElement("div");

    productCard.className = "product-card";

    productCard.innerHTML = `
        <h2>${name}</h2>
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Price:</strong> ₱${price.toLocaleString()}</p>
        <p><strong>Stock:</strong> ${stock}</p>
        <span class="stock-status ${statusClass}">
            ${status}
        </span>
    `;

    productList.appendChild(productCard);
});

}

export function displayTotalInventoryValue(totalValue) {
const totalInventoryValue =
document.getElementById("totalInventoryValue");

totalInventoryValue.textContent =
    `₱${totalValue.toLocaleString()}`;

}

export function displayLowStockCount(count) {
const lowStockCount =
document.getElementById("lowStockCount");

lowStockCount.textContent = count;

}

export function displayOutOfStockCount(count) {
const outOfStockCount =
document.getElementById("outOfStockCount");

outOfStockCount.textContent = count;

}