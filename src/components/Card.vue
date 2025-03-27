<script setup lang="ts">
import { ref } from 'vue'
defineProps(['image', 'name', 'price', 'quantity'])
</script>

<template>
  <main class="h-20 w-70 flex justify-center items-center border-1 rounded-2xl my-2">
    <img :src="image" class="w-15 mr-5">
    <div>
    {{ name }} <br>
    Cijena: €{{ price }}| Količina:{{ quantity }} <br>
    Ukupno: €{{ (price * quantity).toFixed(2) }}
    </div>
  </main>
</template>

<style scoped>
@import 'tailwindcss';
</style>