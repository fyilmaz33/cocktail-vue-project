<script setup lang="ts">


</script>

<template>

    <div class="item">

        <figure v-bind:class="drink && drink.strCategory ? [drink.strCategory.toLowerCase()] : 'card card__normal'" class="card card__normal">

            <div v-bind:id="drink.strDrink" class="clickArea"></div>

            <div class="card__image-container">
                <img class="card__image" :src="drink.strDrinkThumb" :alt="drink.strDrink">
            </div>

            <figcaption class="card__caption">
                <h4 class="card__name">{{ drink.strDrink }}</h4>

                <h3 v-bind:class="[drink.strAlcoholic]" class="card__type">{{ drink.strAlcoholic }}</h3>

                <div class="card__specs">
                    <h6 class="card__info">
                        <span class="card__label">Category</span>
                        {{ drink.strCategory }}
                    </h6>
                    <h6 class="card__info">
                        <span class="card__label">Glass Type</span>
                        {{ drink.strGlass }}
                    </h6>
                </div>

                <p class="card__id">ID: {{ drink.idDrink }}</p>
            </figcaption>
        </figure>

        
    </div>


</template>

<style scoped>
/* card */

.clickArea {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    cursor: pointer;
    z-index: 999;
}

.card {
    display: inline-block;
    background-color: #d5d5e3;
    width: 238px;
    height: 332px;
    padding: 1em;
    border-radius: 15px;
    margin: 10px;
    text-align: left;
    box-shadow: 0px 5px 20px -10px #111;
    position: relative;
    transition: 0.4s;
}

.card__caption {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1em;
    height: 132px;
    position: relative;
    border-radius: 0 0 3px 3px;
}

.card__image-container {
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 3px 3px 0 0;
    overflow: hidden;
    height: 170px;
}

.card__image {
    width: 100%;
    height: auto;
}

.card__type {
    font-size: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translateY(-50%);
    color: #fff;
    background-color: #a1a1a1;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 2px;
}

.card__label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
    display: block;
    margin-bottom: 3px;
}

.card__name {
    text-align: left;
    line-height: 18px;
    font-weight: bolder;
}

.card__id {
    position: absolute;
    bottom: 5px;
    text-align: left;
    font-weight: bold;
    font-size: 8px;
}

.card__stats {
    margin: 1em 0;
    width: 100%;
}

.card__stats th {
    text-align: right;
    font-weight: 300;
}

.card__stats th,
.card__stats td {
    width: 50%;
    padding: 0.25em 0.5em 0;
}

.card__specs {
    display: flex;
    justify-content: space-between;
    line-height: 10px;
}

.card__info {
    line-height: 12px;
    margin-top: 1em;
    flex: 1 0;
}

.cocktail {
    background: linear-gradient(90deg,#e60000,#f48c00) !important;
}

.shot {
    background: linear-gradient(90deg,#090979,#00d4ff) !important;
}

.card__normal {
    box-shadow: 0px 5px 20px -10px #6c6c6c;
}


.Alcoholic {
    background-color: purple !important;
}

/* card END */
</style>



<script lang="ts">

// COCKTAILS API RANDOM
export default {
    data() {
        return {
            drink: {} as IDrink,
        }
    },
    created() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                this.drink = data.drinks[0];
            })
    }
}

// INTERFACES
interface IDrink {
    strDrink: string,
    idDrink: string,
    strDrinkThumb: string,
    strCategory: string,
    strGlass: string,
    strAlcoholic: string,
    strInstructions: string
}





</script>