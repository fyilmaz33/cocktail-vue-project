<script setup lang="ts">
import { gsap } from "gsap";

</script>

<template>

    <div style="margin-top:30px" class="container">
        <div class="row">
            <!-- row1 -->
            <div class="col">
                <img :src="drink.strDrinkThumb" :alt="drink.strDrink">
            </div>

            <div class="col-8">

                <h5><span v-bind:class="[drink.strAlcoholic]" class="type">{{ drink.strAlcoholic }}</span></h5>
                <h1><b>{{ drink.strDrink }}</b> <small>ID:{{ drink.idDrink }}</small></h1>

                <h5><b>Category</b></h5>
                <h5>{{ drink.strCategory }}</h5>
                <br>
                <h5><b>Glass</b></h5>
                <h5>{{ drink.strGlass }}</h5>
                <br>
                <h5><b>Instructions</b></h5>
                <h5>{{ drink.strInstructions }}</h5>
                <br>
                <h5><b>Ingredients</b></h5>
                
                <h5 class="listitem">{{ drink.strMeasure1 }} {{ drink.strIngredient1 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure2 }} {{ drink.strIngredient2 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure3 }} {{ drink.strIngredient3 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure4 }} {{ drink.strIngredient4 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure5 }} {{ drink.strIngredient5 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure6 }} {{ drink.strIngredient6 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure7 }} {{ drink.strIngredient7 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure8 }} {{ drink.strIngredient8 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure9 }} {{ drink.strIngredient9 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure10 }} {{ drink.strIngredient10 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure11 }} {{ drink.strIngredient11 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure12 }} {{ drink.strIngredient12 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure13 }} {{ drink.strIngredient13 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure14 }} {{ drink.strIngredient14 }}</h5>
                <h5 class="listitem">{{ drink.strMeasure15 }} {{ drink.strIngredient15 }}</h5>
                

            </div>


        </div>
    </div>

</template>

<style scoped>
h1 {
    margin-top: -6px;
}

img {
    width: 400px;
}

small {
    font-size: 10px;
}

.listitem {
    content: "Joe's Task: ";
    padding: 0px 0px 3px 0px;
}

.type {
    padding: 2px 5px;
    color: #fff;
    background-color: #a1a1a1;
}

.Alcoholic {
    padding: 2px 5px;
    background-color: purple !important;
    color: #fff !important;
}
</style>



<script lang="ts">


// COCKTAILS API
export default {
    data() {
        return {
            drink: {} as IDrink,
        }
    },
    created() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.$route.query.id}`)
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
    strIBA: string,
    strInstructions: string,
    strAlcoholic: string,
    strIngredient1?: string,
    strIngredient2?: string,
    strIngredient3?: string,
    strIngredient4?: string,
    strIngredient5?: string,
    strIngredient6?: string,
    strIngredient7?: string,
    strIngredient8?: string,
    strIngredient9?: string,
    strIngredient10?: string,
    strIngredient11?: string,
    strIngredient12?: string,
    strIngredient13?: string,
    strIngredient14?: string,
    strIngredient15?: string,
    strMeasure1?: string,
    strMeasure2?: string,
    strMeasure3?: string,
    strMeasure4?: string,
    strMeasure5?: string,
    strMeasure6?: string,
    strMeasure7?: string,
    strMeasure8?: string,
    strMeasure9?: string,
    strMeasure10?: string,
    strMeasure11?: string,
    strMeasure12?: string,
    strMeasure13?: string,
    strMeasure14?: string,
    strMeasure15?: string,
}





</script>