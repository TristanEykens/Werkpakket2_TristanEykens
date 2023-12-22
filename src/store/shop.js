import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
    state: () => ({
        products: [],
        cart: [],
    }),
    getters: {

    },
    actions: {
        async fetchProducts() {
            try {
                const response = await fetch('src/assets/products.json');
                const data = await response.json();
                this.setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },

        setProducts(products) {
            this.products = products;
        },

        addToCart(product) {
            // Logic to add product to the cart for both logged-in and non-logged-in users
            const isProductInCart = this.cart.some(item => item.id === product.id);

            if (isProductInCart) {
                const existingProduct = this.cart.find(item => item.id === product.id);
                existingProduct.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
        },
        removeItemFromCart(productId) {
            const index = this.cart.findIndex(item => item.id === productId);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
        incrementItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementItemQuantity(productId) {
            const product = this.cart.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
    },})


