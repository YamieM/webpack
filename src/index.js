import "./index.html";
import "./index.scss";
import "./index.css";

const indexMain = document.querySelector(".index-main");

const homePage = document.createElement("a");
const aboutPage = document.createElement("a");
const aboutProdPage = document.createElement("a");
const cartPage = document.createElement("a");
homePage.innerHTML = "HOME | ";
aboutPage.innerHTML = "ABOUT US | ";
aboutProdPage.innerHTML = "ABOUT PRODUCT | ";
cartPage.innerHTML = "CART";
homePage.href = "./home";
aboutPage.href = "./about";
aboutProdPage.href = "./about_product";
cartPage.href = "./cart";
[homePage, aboutPage, aboutProdPage, cartPage].forEach((elem) => {
  elem.classList.add("menu");
  indexMain?.appendChild(elem);
});

const h1 = document.createElement("h1");
h1.innerHTML = "Index";
indexMain?.appendChild(h1);
