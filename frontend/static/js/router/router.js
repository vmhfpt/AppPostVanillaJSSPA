import Home from "../views/Home.js";
import Product from "../views/Product.js";
import Cart from "../views/Cart.js";
import ProductView from "../views/productView.js";

export var  routes = [
        { path: "/", view: Home },
        { path: "/product", view: Product },
        { path: "/product/:id", view: ProductView },
        { path: "/cart", view: Cart }  
    ];