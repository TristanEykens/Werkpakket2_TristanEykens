<script>
import { computed } from 'vue';
import { useShopStore } from '@/store/shop.js';
import router from "@/router";

export default {
  setup() {
    const shopStore = useShopStore();

    const cartItems = computed(() => shopStore.cart);

    const totalPriceNoTax = computed(() => {
      return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    });

    const totalPriceWithTax = computed(() => {
      return cartItems.value.reduce((acc, item) => acc + (item.price * item.quantity) + (item.price * item.btw * item.quantity), 0).toFixed(2);
    });

    const address = localStorage.getItem('userAddress') || 'Address not provided';

    const clearCartAndGoHome = () => {
      shopStore.cart = [];
      localStorage.removeItem('userAddress');
      router.push('/');
    };

    return { cartItems, totalPriceNoTax, totalPriceWithTax, address, clearCartAndGoHome };
  },
};
</script>


<template>
  <main class="thank-you-page">
    <h1>Thank you for your order!</h1>
    <p>Your order has been placed successfully.</p>
    <div>
      <h2>Order Summary:</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.title }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
      <p>Total Price Without Tax: ${{ totalPriceNoTax }}</p>
      <p>Total Price With Tax: ${{ totalPriceWithTax }}</p>
      <p>Shipping Address: {{ address }}</p>
    </div>
    <button @click="clearCartAndGoHome">Continue Shopping</button>
  </main>
</template>

<style scoped>
.thank-you-page {
  text-align: center;
  padding: 50px;
  background-color: #DE9E48;
  box-shadow: 0 15px 35px rgba(0,0,0,9);
}
.thank-you-page li {
  list-style-type: none;
  padding: 20px;
}
.thank-you-page p {
  padding: 10px 0 10px 0;
}
.thank-you-page h1 {
  margin-bottom: 20px;
}

.thank-you-page button {
  padding: 10px 20px;
  background-color: #1d130e;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}

.thank-you-page button:hover {
  background-color: white;
  color: #1d130e;
}
</style>
