import "./index.html";
import "./index.css";
import "./index1.scss";

// import "./about.js";
// import "./home.js";
// import "./about_product.js";
// import "./cart.js";

const indexMain = document.querySelector(".index-main");

const homePage = document.createElement("a");
const aboutPage = document.createElement("a");
const aboutProdPage = document.createElement("a");
const cartPage = document.createElement("a");
homePage.innerHTML = "HOME | ";
aboutPage.innerHTML = "ABOUT US | ";
aboutProdPage.innerHTML = "ABOUT PRODUCT | ";
cartPage.innerHTML = "CART";
homePage.href = "./home.html";
aboutPage.href = "./about.html";
aboutProdPage.href = "./about_product.html";
cartPage.href = "./cart.html";
[homePage, aboutPage, aboutProdPage, cartPage].forEach((elem) => {
  elem.classList.add("menu");
  indexMain?.appendChild(elem);
});

const h1 = document.createElement("h1");
h1.innerHTML = "Index";
indexMain?.appendChild(h1);
