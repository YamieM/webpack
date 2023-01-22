import './about_product.css';

const about_productMain = document.querySelector(".about_product-main");
const about_product = document.createElement("h1");
about_product.innerHTML = "About_product";
about_product.classList.add("h1_about_product");
about_productMain?.appendChild(about_product);
