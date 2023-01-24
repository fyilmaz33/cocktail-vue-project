<script setup lang="ts">
import { ref } from "vue";
import { gsap } from "gsap";
import router from '@/router'

</script>

<template>
    <input id="searchbar" @keyup.enter="searchDrink" v-model="searchTerm" type="text" placeholder="Search Cocktail by name.." />
</template>

<style scoped>
#searchbar {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 10px 45px;
    background: white url("@/assets/search-icon.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>

<script lang="ts">


export default {
    data() {
        return {
            searchTerm: '',
        };
    },
    methods: {
        async searchDrink() {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchTerm}`);
            const data = await response.json();
            if (data.drinks) {
                let routeData = this.$router.resolve({ name: 'search', query: { id: data.drinks[0].strDrink } });
                window.open(routeData.href, '_blank');
            } else {
                gsap.to("#searchbar", .1, { x: 5, yoyo: true, repeat: 3, ease: "none" });
                gsap.to("#searchbar", .1, { x: -5, yoyo: true, repeat: 3, ease: "none" });
            }
        },
    },
};

</script>

