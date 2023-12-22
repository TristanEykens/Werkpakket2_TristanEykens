<script setup>

</script>

<template>
  <header class="header">
    <div class="logo">
    <router-link to="/">Rock'it</router-link>
    </div>

    <nav class="navbar">
      <router-link to="/overzicht">All products</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/login">Login</router-link>
    </nav>

  </header>
</template>

<style scoped>

.header {
  position: fixed;
  background-color: #372C2E;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.logo a{
  color: white;
  text-decoration: none;
}
.logo a:hover {
  color: #cc9e7b;
}
.header .logo {
  font-size: 32px;
  color: white;
  text-decoration: none;
  font-weight: 700;

}

.navbar a {
  position: relative;
  font-size: 18px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  margin-left: 40px;
}

.navbar a:hover, .logo:hover {
  color: #cc9e7b;
}

</style>