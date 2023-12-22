<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import FooterGeneral from './components/footer.vue';
import NavGeneral from './components/navbar.vue';

const route = useRoute();


const showHeader = computed(() => route.name !== 'thankyou');
const showFooter = computed(() => route.name !== 'thankyou' && route.name !== 'login');
</script>
<template>
  <NavGeneral v-if="showHeader" />

  <router-view />

  <FooterGeneral v-if="showFooter" />
</template>


