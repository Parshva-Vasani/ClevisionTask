const products = [
  { name: "Laptop", price: 65000, inStock: true, category: "electronics" },
  { name: "Shirt", price: 1200, inStock: false, category: "clothing" },
  { name: "Phone", price: 25000, inStock: true, category: "electronics" },
  { name: "Shoes", price: 3500, inStock: true, category: "clothing" },
  { name: "Tablet", price: 18000, inStock: false, category: "electronics" },
  { name: "Watch", price: 8000, inStock: true, category: "accessories" },
  { name: "Bag", price: 2200, inStock: true, category: "accessories" },
  { name: "Headphones", price: 3000, inStock: true, category: "electronics" },
];

const filteredProducts = products.filter(
  (product) => product.inStock && product.price < 10000,
);

console.log("Filtered Products:", filteredProducts);

const groupedProducts = filteredProducts.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category].push({
    name: product.name,
    price: product.price,
  });

  return acc;
}, {});

console.log("Grouped Products:", groupedProducts);

// Calculate total value
const totalValue = filteredProducts.reduce(
  (sum, product) => sum + product.price,
  0,
);

console.log("Total Value:", totalValue);

// Display all in-stock products
let displayedProducts = products.filter((product) => product.inStock);

const productGrid = document.getElementById("productGrid");
const sortButton = document.getElementById("sortButton");

let ascending = true;

function renderProducts(productList) {
  productGrid.innerHTML = "";

  productList.forEach((product) => {
    const card = document.createElement("div");

    card.innerHTML = `
            <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 h-full">

                <h3 class="text-xl font-semibold text-gray-800 mb-3">
                    ${product.name}
                </h3>

                <p class="text-lg font-bold text-green-600 mb-4">
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

                <span class="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full capitalize">
                    ${product.category}
                </span>

            </div>
        `;

    productGrid.appendChild(card);
  });
}

renderProducts(displayedProducts);

// Sort button functionality
sortButton.addEventListener("click", () => {
  displayedProducts.sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });

  ascending = !ascending;

  sortButton.textContent = ascending
    ? "Sort by Price (Ascending)"
    : "Sort by Price (Descending)";

  renderProducts(displayedProducts);
});
