<script setup lang="ts">
import GetRandomCocktail from './GetRandomCocktail.vue'

</script>

<template>

    <div class="container">
        <div class="row">
            <!-- row1 -->
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>

            <!-- row2 -->
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>

            <!-- row3 -->
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
            <div class="col">
                <GetRandomCocktail @click="onCocktailClick"></GetRandomCocktail>
            </div>
        </div>
    </div>

    <footer>
        <div class="container text-center">
            <div class="row">
                <div class="col-12">

                </div>
            </div>
        </div>
    </footer>

    <div style="opacity:0">Hello Vitest</div>

</template>

<style scoped>

</style>

<script lang="ts">
import { gsap } from "gsap";

// FUNCTIONS
function onCocktailClick(event: any) {
    if (!event.target.id)
        return;

    window.open('/search?id=' + event.target.id, '_blank');
}

// ANIMATIONS
setTimeout(() => {
    gsap.from(".item", 1, { y: 10, opacity: 0, stagger: .1, ease: "sine.out" });
}, 10);


</script>

