
# cocktail-vue-project

Locale everything does work if you download and run the project:
```sh
npm run dev
```
Unfortunately the cocktail detail page does not work online. So you can not use the searchbar and click on a cocktail.
Here you have the online link to the project: https://cocktails.fyilmaz.nl/

you can see it in full action here. mov file:
https://cocktails.fyilmaz.nl/cocktail.mov

# Architectural Decisions

I chose Vue + https://vitejs.dev/ because I knew vue has good documentation and is very powerfull, and I tested a vue project before. So it was a clear choice for me.
Besides Vue i chose to work with Typescipt. It's help me to understand and see info about errors beter.

css framework = bootstrap-grid.css only

I used the API Style: Composition (Single-File Components) this looked the most familier for me
I used the setup below:

## Setup

Vue + https://vitejs.dev/ 

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```