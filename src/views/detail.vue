<script>
import {useShopStore} from "@/store/shop.js";
import jsonData from "@/assets/products.json";

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  async created() {
    await this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const productId = String(this.id);
        const allProducts = jsonData;

        this.product = allProducts.find(product => String(product.id) === productId);

        if (!this.product) {
          console.error(`Product not found for id: ${productId}`);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    addToCart(product) {
      useShopStore().addToCart(product);
      alert("product toegevoegd aan winkelmandje!");

    },


  },
  watch: {},
  beforeRouteUpdate(to, from, next) {
    this.fetchProductData().then(next);
  },
  computed: {
    priceWithTax() {
      if (this.product && this.product.price && this.product.btw) {
        return (this.product.price * (1 + this.product.btw)).toFixed(2);
      }
      return 'N/A';
    }
  },
};

</script>

<script setup>
</script>

<template>
  <main>
    <section id="product-page">
      <div class="product-details">
        <div class="product-img">
          <img v-if="product.image" :src="`/${product.image}`" alt="Product Image" class="product-image" />
        </div>
        <div class="product-text">
          <h2 class="product-category">Product generation {{ product.Gen }}</h2>
          <h3>{{ product.title }}</h3>
          <span class="product-price">Price: ${{ product.price ? product.price.toFixed(2) : 'N/A' }}</span><br>
          <span class="price-with-tax">Price with Tax: ${{ priceWithTax }}</span>

          <p class="stock">Stock: {{ product.stock }}</p>
          <p>{{ product.description }}</p><br>
                   <div class="product-button">
                     <button @click="addToCart(product)" class="add-cart-btn" id="button2">Add to Cart</button>
                     <router-link :to="{ name: 'product-list' }" class="back-button">{{ button2 }}</router-link>
                 </div>
          <a href="#" class="help-btn">Need Any Help?</a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

.product-details {
  max-width: 1200px;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
}

.product-details .product-img {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.product-details .product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: flex;
}

.product-details .product-text {
  background-color: #DE9E48;
  padding: 60px;
  position: relative;
}

.product-details .product-text .product-category {
  color: #1d130e;
  font-size: 0.9rem;
}

.product-details .product-text h3 {
  color: #1d130e;
  font-size: 2.4rem;
  font-weight: 600;
  margin: 10px 0px;
}

.product-details .product-text .product-price {
  font-size: 1.6rem;
  color: white;
  font-weight: 500;
}

.product-details .product-text p {
  margin: 30px 0px;
  color: #1d130e;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.product-details .product-text . {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 30px 0px;
  margin-bottom: 20px;
  grid-gap: 20px;
}

.product-details .product-text .add-cart-btn {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  border-radius: 25px;
  border: none
}

.product-details .product-text .add-cart-btn {
  background-color: #1d130e;
  color: #F2F2F2;
}

.product-details .product-text .add-cart-btn:hover {
  background-color: #1D130e;
  color: #F2F2F2;
}

.product-details .help-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #1d130e;
  font-size: 0.9rem;
  text-decoration: underline;
  text-transform: lowercase;
}

.product-details .help-btn:hover {
  color: white;
}


</style>