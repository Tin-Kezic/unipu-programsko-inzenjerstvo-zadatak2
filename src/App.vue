<script setup lang="ts">
import { ref } from 'vue'
import Card from './components/Card.vue';
const like = {
    "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
    "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
    "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
    "Kruh": "https://www.svgrepo.com/show/530223/bread.svg",
}
const proizvodi = [
    { naziv: "Jabuka", cijena: 0.25 },
    { naziv: "Mrkva", cijena: 0.12 },
    { naziv: "Kruh", cijena: 2.00 },
    { naziv: "Sir", cijena: 4.48 }
]
const korisnik = {
    jeAdmin: true,
    osobni_podaci: {
        ime: "Marko",
        prezime: "Krivić",
        adresa: {
            grad: "Pula",
            ulica: "Veruda",
            broj: 32
        },
        broj_telefona: "+091-123-456"
    },
    kosarica: [
        { naziv: "Jabuka", količina: 4 },
        { naziv: "Mrkva", količina: 12 },
        { naziv: "Kruh", količina: 3 },
        { naziv: "Sir", količina: 1 },
    ]
}
var count = ref(0);
var isAdmin = ref(true)
</script>

<template>
  <main>
    <div :class="isAdmin ? 'text-blue-900' : 'text-black'">
        <p class="text-2xl">Korisnički podaci</p>
        <hr>
        <p>ime: {{ korisnik.osobni_podaci.ime }}</p>
        <p>Adresa: {{ korisnik.osobni_podaci.adresa.ulica }} {{korisnik.osobni_podaci.adresa.broj }}, {{korisnik.osobni_podaci.adresa.grad }}</p>
        <p>Telefon: {{ korisnik.osobni_podaci.broj_telefona }}</p>
    </div>
    <div class="pt-10">
        <p class="text-2xl">Košarica</p>
        <Card :image="like.Jabuka" :name="proizvodi[0].naziv" :price="proizvodi[0].cijena" :quantity="korisnik.kosarica[0].količina"/>
        <Card :image="like.Mrkva" :name="proizvodi[1].naziv" :price="proizvodi[1].cijena" :quantity="korisnik.kosarica[1].količina"/>
        <Card :image="like.Kruh" :name="proizvodi[2].naziv" :price="proizvodi[2].cijena" :quantity="korisnik.kosarica[2].količina"/>
        <Card :image="like.Sir" :name="proizvodi[3].naziv" :price="proizvodi[3].cijena" :quantity="korisnik.kosarica[3].količina"/>
    </div>
  </main>
</template>

<style scoped>
@import 'tailwindcss';
</style>
