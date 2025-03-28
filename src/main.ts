import './assets/main.css'

import { createApp } from 'vue'
import { computed, ref } from 'vue'
import App from './App.vue'

export const like = {
    "Jabuka": "https://www.svgrepo.com/show/530203/apple.svg",
    "Mrkva": "https://www.svgrepo.com/show/530216/carrot.svg",
    "Sir": "https://www.svgrepo.com/show/530219/cake.svg",
    "Kruh": "https://www.svgrepo.com/show/530223/bread.svg",
}
export const proizvodi = [
    { naziv: "Jabuka", cijena: 0.25 },
    { naziv: "Mrkva", cijena: 0.12 },
    { naziv: "Kruh", cijena: 2.00 },
    { naziv: "Sir", cijena: 4.48 }
]
export const korisnik = {
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
export const isAdmin = ref(true);
export const dohvatiCijenu = ref((naziv: String) => {
    const product = proizvodi.find(product => product.naziv == naziv)
    if(product !== undefined) return product.cijena;

    return 0;
});
export const sveukupnaCijena = ref(
    korisnik.kosarica[0].količina * proizvodi[0].cijena +
    korisnik.kosarica[1].količina * proizvodi[1].cijena +
    korisnik.kosarica[2].količina * proizvodi[2].cijena +
    korisnik.kosarica[3].količina * proizvodi[3].cijena
);
export const najskupljaStavka = ref(() => {
    let max: number = korisnik.kosarica[0].količina * proizvodi[0].cijena;
    Array.of(
        korisnik.kosarica[1].količina * proizvodi[1].cijena,
        korisnik.kosarica[2].količina * proizvodi[2].cijena,
        korisnik.kosarica[3].količina * proizvodi[3].cijena
    ).forEach(element => {
        if(element > max) max = element;
    });
    return max;
});

createApp(App).mount('#app')
