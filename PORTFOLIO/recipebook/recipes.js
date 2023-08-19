const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const reicpeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipesListEl.innerHTML = "";
    recipes.forEach((recipe) => 
        const recipeItemEl = document.createElement("li");
        recipeImageEl.classList.add("recipe-item");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEl = document.createElement("h2");
        recipeTitle.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = 
            ingredients ${recipe.extendedIngredients
            .map((ingrient) => ingredient.original)
            .join(", ")};

        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceURL;
        recipeLinkel.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeItemEl.appendChild(recipeItemEl);
    )
}

async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}` 
    );

    const data = await response.json();

    return data.recipes;
}

async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();