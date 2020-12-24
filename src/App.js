import React, {useState, useEffect} from "react";
// import Products from "./components/products/Products";
// import Navbar from "./components/Navbar/Navbar"

import {
    Products,
    Navbar,
    Cart
} from "./components"

// commerce
import {commerce} from "./lib/commerce"

const App = () => {
    // product
    const [products, setProducts] = useState([]);

    // cart
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    // handle cart
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId , quantity);

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    },[]);

    console.log("CART COUNTER",cart);

    return(
        <div>
                <Navbar totalItems = {cart.total_items} />
                { /* <Products products={products} onAddToCart={handleAddToCart} /> */}   
                <Cart cart={cart} />     
        </div>
    )
}

export default App