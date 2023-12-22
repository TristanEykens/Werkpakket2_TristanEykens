<script>
import { ref, computed, onMounted } from 'vue';
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

    const address = ref('');
    const showBillingInfo = ref(false);
    const billingAddress = ref('');

    onMounted(() => {
      const storedAddress = localStorage.getItem('userAddress');
      if (storedAddress) {
        address.value = storedAddress;
      }
    });

    const confirmOrder = () => {
      // Handle order confirmation logic
      alert("Order confirmed with address: " + address.value);
      if (showBillingInfo.value) {
        alert("Billing address: " + billingAddress.value);
      }
      router.push('/thankyou');
    };

    return {
      cart,
      totalPriceNoTax,
      totalPriceWithTax,
      address,
      confirmOrder,
      showBillingInfo,
      billingAddress
    };
  },
};
</script>


<template>
  <main>
    <div class="confirmation-container">
      <h2>Order Confirmation</h2>
      <div class="order-details">
        <h3>Order Details:</h3>
        <p>Total Price Without Tax: ${{ totalPriceNoTax }}</p>
        <p>Total Price With Tax: ${{ totalPriceWithTax }}</p>
        <ul>
          <li v-for="item in cart" :key="item.id">
            {{ item.title }} - Quantity: {{ item.quantity }}
          </li>
        </ul>
      </div>

      <div class="address-form">
        <div class="txt_field">
          <input type="text" class="adresss" v-model="address" placeholder="Shipping Address">
          <span></span>
          <label>Enter shipping adress</label>
        </div>
        <label>
        <input type="checkbox" v-model="showBillingInfo">
        Use a different billing address
        </label>
        <div v-if="showBillingInfo" class="billing-info">
          <div class="txt_field">
            <input type="text" v-model="billingAddress" placeholder="Billing Address">
            <span></span>
            <label>Enter billing address</label>
          </div>
        </div><br>
        <button @click="confirmOrder">Confirm Order</button>
      </div>

    </div>
  </main>
</template>




<style scoped>
.confirmation-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #DE9E48;
  box-shadow: 0 15px 35px rgba(0,0,0,9);
}
h2 {
  margin: 20px 0 20px 0;
}
h3 {
  margin: 10px 0 10px 0;
}
.order-details, .address-form {
  margin-bottom: 20px;
}


ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.address-form .txt_field {
  position: relative;
  border-bottom: 2px solid gray;
  margin: 30px 0;
}

.address-form .txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.address-form .txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: grey;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}

.address-form .txt_field span::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 0;
  width: 0;
  height: 2px;
  background: white;
  transition: 0.5s;
}

.address-form .txt_field input:focus ~ label,
.address-form .txt_field input:valid ~ label {
  top: -5px;
  color: white;
}

.address-form .txt_field input:focus ~ span::before,
.address-form .txt_field input:valid ~ span::before {
  width: 100%;
}

button {
  width: 150px;
  border-radius: 25px;
  border: none;
  padding: 10px;
  font-size: 0.9rem;
  background-color: #1d130e;
  color: white;
  margin: 30px 0 30px 0;
}
button:hover {
  background-color: white;
  color: #1d130e;
}
</style>
