// Sample bag products
const products = [
  {
    id: 1,
    name: "Clem portable Bag",
    price: 120,
    image: "../image/clem-onojeghuo-9VzlRHy6VQY-unsplash.jpg",
    description: "Elegant and spacious leather tote for everyday use."
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: 75,
    image: "../image/nadi-spasibenko-LF63Ab5KCvc-unsplash.jpg",
    description: "Durable canvas backpack, perfect for travel and school."
  },
  {
    id: 3,
    name: "Laura-chouette Bag",
    price: 205,
    image: "../image/laura-chouette--8djg_d-u-M-unsplash.jpg",
    description: "Compact crossbody bag for essentials on the go."
  },
  {
    id: 4,
    name: "Pender Bag",
    price: 70,
    image: "../image/pendar-shopping-p_IDoaPu2j8-unsplash.jpg",
    description: "Chic clutch for evening outings and parties."
  }
];
// Render all products to the page
function renderProducts() {
  const productList = document.getElementById('product-list');
  if (!productList) {
    console.error('No element with id "product-list" found.');
    return;
  }
  productList.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='../image/placeholder.png';">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">$${product.price}</div>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}
document.addEventListener('DOMContentLoaded', renderProducts);



