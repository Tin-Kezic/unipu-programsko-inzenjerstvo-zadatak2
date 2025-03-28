<script setup lang="ts">
import Card from './components/Card.vue';
import { like, proizvodi, korisnik, isAdmin, dohvatiCijenu, sveukupnaCijena} from './main'
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
        <Card :image="like.Jabuka" :name="proizvodi[0].naziv" :price="dohvatiCijenu('Jabuka')" :quantity="korisnik.kosarica[0].količina"/>
        <Card :image="like.Mrkva" :name="proizvodi[1].naziv" :price="dohvatiCijenu('Mrkva')" :quantity="korisnik.kosarica[1].količina"/>
        <Card :image="like.Kruh" :name="proizvodi[2].naziv" :price="dohvatiCijenu('Kruh')" :quantity="korisnik.kosarica[2].količina"/>
        <Card :image="like.Sir" :name="proizvodi[3].naziv" :price="dohvatiCijenu('Sir')" :quantity="korisnik.kosarica[3].količina"/>
    </div>
    <p class="text-2xl">Ukupna cijena: €{{ sveukupnaCijena }}</p>
  </main>
</template>

<style scoped>
@import 'tailwindcss';
</style>
