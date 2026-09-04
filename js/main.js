import { products } from "./products.js";

import {
searchProducts,
filterProductsByCategory,
calculateTotalInventoryValue,
countLowStockProducts,
countOutOfStockProducts
} from "./inventoryUtils.js";

import {
displayProducts,
displayTotalInventoryValue,
displayLowStockCount,
displayOutOfStockCount
} from "./display.js";

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const searchBtn =
document.getElementById("searchBtn");

const resetBtn =
document.getElementById("resetBtn");

function applyFilters() {

const query = searchInput.value;
const category = categoryFilter.value;

let results = searchProducts(products, query);

results = filterProductsByCategory(
    results,
    category
);

displayProducts(results);

}

function displayInitialData() {

displayProducts(products);

const totalValue =
    calculateTotalInventoryValue(products);

const lowStock =
    countLowStockProducts(products);

const outOfStock =
    countOutOfStockProducts(products);

displayTotalInventoryValue(totalValue);

displayLowStockCount(lowStock);

displayOutOfStockCount(outOfStock);

}

searchBtn.addEventListener("click", () => {
applyFilters();
});

categoryFilter.addEventListener("change", () => {
applyFilters();
});

resetBtn.addEventListener("click", () => {

searchInput.value = "";
categoryFilter.value = "All";

displayProducts(products);

});

displayInitialData();