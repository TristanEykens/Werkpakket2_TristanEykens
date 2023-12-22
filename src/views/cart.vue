<script>
import { computed } from 'vue';
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();
    const cart = computed(() => shopStore.cart);

    const totalPriceNoTax = computed(() => {
      return cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    });

    const totalPriceWithTax = computed(() => {
      return cart.value.reduce((acc, item) => acc + (item.price * item.quantity) + (item.price * item.btw * item.quantity), 0).toFixed(2);
    });

    const removeFromCart = (productId) => {
      shopStore.removeItemFromCart(productId);
    };

    const incrementQuantity = (productId) => {
      const item = shopStore.cart.find(item => item.id === productId);
      if (item && item.quantity < item.stock) {
        shopStore.incrementItemQuantity(productId);
      }
    };

    const decrementQuantity = (productId) => {
      shopStore.decrementItemQuantity(productId);
    };

    const checkout = () => {
      if (localStorage.getItem('isLoggedIn') === 'true') {
        router.push('/Confirmation');
      } else {
        sessionStorage.setItem('postLoginAction', 'Confirmation');
        router.push('/login');
      }
    };

    return {
      cart,
      totalPriceNoTax,
      totalPriceWithTax,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      checkout,
      titel: "Your shopping cart:",
      NoBTW: "Price without tax: ",
      totaalprijs: "Price with tax: ",
      hoeveelheid: "Amount: ",
      plus: "+",
      min: "-",
      button1: "Delete",
      button2: "Checkout"
    };
  },
};
</script>


<template>
  <main>
  <div class="cart-container">
    <h2>{{ titel }}</h2>
    <span>Total Price Without Tax: ${{ totalPriceNoTax }}</span><br>
    <span>Total Price With Tax: ${{ totalPriceWithTax }}</span>
    <ul class="cart-items">
      <li v-for="item in cart" :key="item.id" class="cart-item">
        <div class="cart-item-img">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
        </div>
        <div class="cart-item-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span>{{ NoBTW }} ${{ (item.price * item.quantity).toFixed(2) }}</span><br>
          <span>{{ totaalprijs }} ${{ (item.price * item.quantity + (item.price * item.btw * item.quantity)).toFixed(2) }}</span>
          <p class="item-quantity">{{ hoeveelheid }} {{ item.quantity }}</p>
          <div class="cart-item-buttons">
            <button @click="decrementQuantity(item.id)">{{ min }}</button>
            <button @click="incrementQuantity(item.id)">{{ plus }}</button>
          </div>
          <div class="bottom-button-main">
            <button @click="removeFromCart(item.id)" class="bottom-button">{{ button1 }}</button>
            <button v-if="cart.length > 0" @click="checkout" class="bottom-button">{{ button2 }}</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </main>
</template>

<style scoped>
main {
  margin-top: 100px;
  background: transparent;
}

.cart-container {
  max-width: 1200px;
  width: 90%;
  margin: 50px auto;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  max-height: 350px;
  margin-bottom: 15px;
}

.cart-item-img, .cart-item-text {
  max-height: 350px;
  overflow: hidden;
}

.cart-item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.cart-item-text {
  background-color: #DE9E48;
  padding: 30px;
  position: relative;
}

.cart-item-text h3 {
  color: #1d130e;
  font-size: 1.8rem;
  margin: 10px 0px;
}

.cart-item-text p, .cart-item-text span {
  color: #1d130e;
  margin: 10px 0px;
  font-size: 0.9rem;
}

.cart-item-buttons {
  margin: 5px 0 30px 0;
}

.cart-item-buttons button {
  width: 60px;
  border-radius: 25px;
  border: none;
  padding: 10px;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.cart-item-buttons button:hover {
  background-color: #1d130e;
  color: white;
}

.bottom-button-main {
  text-align: center;
}

.bottom-button {
  width: 100px;
  border-radius: 25px;
  border: none;
  padding: 10px;
  font-size: 0.9rem;
}

.bottom-button:hover {
  background-color: #1d130e;
  color: white;
}
</style>