import './cart.html';
import './cart.scss';
import './cart.css';

const cartMain = document.querySelector('.cart-main');
const cart = document.createElement('h1');
cart.innerHTML = "Cart";
cart.classList.add('h1_cart');
cartMain?.appendChild(cart);