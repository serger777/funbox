class Cart {
    constructor(el) {
        this.el = el;
        this.init();
        this.flag = false;
        this.about = this.el.querySelector(".cart-about");
        this.promo = this.el.querySelector(".cart__text-promo");
    }

    init() {
        this.cartSelect();
        this.cartClickHref();
    }

    cartSelect() {

        const selectClick = this.el.querySelector(".cart");
        let selectOut = false;
        const checkSelect = () => {
            if (!this.flag) {
                this.cartOn();
            } else if (this.flag) {
                this.cartOff();
                selectOut = false;
                this.cartOut()
            }
        };

        selectClick.addEventListener("click", (e) => {
            e.preventDefault();
            checkSelect();
        });
        selectClick.addEventListener("mouseover", (e) => {
            if (selectOut && this.flag) {
                this.cartHover()
            }
        });
        selectClick.addEventListener("mouseleave", (e) => {
            if (this.flag) {
                selectOut = true;
                this.cartOut()
            }
        });

    }
    cartOn() {
        this.el.classList.add("selected");
        this.flag = true;
        this.about.innerHTML = ` Головы щучьи с чесноком да свежайшая сёмгушка.`;
    }

    cartOff() {
        this.el.classList.remove("selected");
        this.flag = false;
        this.about.innerHTML = `Чего сидишь? Порадуй котэ, <a class="js-selected" href="">купи.</a>`;
        this.cartClickHref();

    }

    cartDisabled() {
        this.el.classList.add("disabled");
        this.flag = false;
        this.about.innerHTML = `Печалька, с курой закончился.`;
    }

    cartHover() {
        this.promo.innerHTML = `Котэ не одобряет?`;
        this.promo.style= `color:#e62e7a`;
    }

    cartOut() {
        this.promo.innerHTML = `Сказочное заморское яство`;
        this.promo.style= ``;
    }

    cartClickHref() {
        const jsClick = this.el.querySelector(".js-selected");
        if (jsClick) {
            jsClick.addEventListener("click", (e) => {
                e.preventDefault();
                this.cartOn();
            })
        }
    }
}

export default Cart;