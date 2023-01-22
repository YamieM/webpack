import './home.html';
import './home.scss';
import './home.css';
const homeMain = document.querySelector(".home-main");
const home = document.createElement("h1");
home.innerHTML = "Home";
home.classList.add("h1_home");
homeMain?.appendChild(home);
