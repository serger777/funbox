import Cart from "./component/Cart";

document.addEventListener("DOMContentLoaded", () => {
    const itemCart = document.querySelectorAll(".wrap-cart");
    Array.from(itemCart).forEach(item => {
        if (!item.classList.contains("disable")) {
            new Cart(item);
        }
    })
});