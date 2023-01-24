<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// App 
// ├─ HomeView
// │  └─ SearchbarCocktail
// │  └─ RandomListCocktails
// └─ SearchResult

</script>

<template>
    <header>
        <div id="logo">
            <div v-on:click="onLogoClick" id="clickAreaLogo"></div>
            <img alt="Cocktail logo" src="@/assets/logo.svg" width="125" height="125" />
            <h1 id="title">COCKTAIL</h1>
            <small>Database</small>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
header {
    margin-top: 30px;
    text-align: center;
}

#logo {
    display: inline-block;
    height: auto;
    cursor: pointer;
}

#clickAreaLogo {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
}

#title {
    top: -40px;
    left: -20px;
    display: inline;
    font-weight: 600;
    font-family: 'Mali', cursive;
}

small {
    font-size: 8px;
    font-weight: normal;
    left: -57px;
    top: -29px;
}
</style>


<script lang="ts">

// FUNCTIONS
function onLogoClick(event: any) {
    if (!event.target.id)
        return;
        window.open("/","_self")
}

</script>