import Cart from "./component/Cart";

document.addEventListener("DOMContentLoaded", () => {
    const itemCart = document.querySelectorAll(".wrap-cart");
    Array.from(itemCart).forEach(item => {
        if (!item.classList.contains("disable")) {
            new Cart(item);
        }
    })
});
// forEach polyfill
if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = (callback, thisArg) => {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}