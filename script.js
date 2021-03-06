// DOM-selectors
const filterSection = document.getElementById("filter-section")
const resultsSection = document.getElementById("result-section")
const searchInput = document.getElementById("search-input")
const search = document.getElementById("search")
const chicken = document.getElementById("chicken");
const pasta = document.getElementById("pasta");
const vegeterian = document.getElementById("vegeterian");
const lactoseFree = document.getElementById("lactose-free");

//Global Variables
const APIURL = "https://api.edamam.com/search?q=dinner&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23&from=0&to=100"



// FUNCTIONS
const recipeInfo = (json) => {
    json.hits.forEach((item) => {
        resultsSection.innerHTML += `
        <div class="recipe-container">
            <div class="image-container">
                <img src="${item.recipe.image}">
                <p class="cooking-time"><i class="fa fa-clock-o"></i> ${item.recipe.totalTime} min</p>
            </div>
            <div class="text-container">
                  <h2 class="recipe-label">${item.recipe.label}</h2>
                  <p class="source">${item.recipe.source}</p>
                  <a href="${item.recipe.url}" class="link">click here for recipe</a>
                  <p class="heart"><i class="fas fa-heart"></i></p>
            </div>
        </div>
    `
    })
}

// fetch(APIURLTHREE)
//     .then((response) => {
//         return response.json()
//     })
//     .then((json) => {
//         const time = json.recipe.totalTime;
//         console.log(time)
//     });

/*function to fetch with URL parameter*/
let callAPI = (url) => {

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            recipeInfo(json)
        })
}



/*returning the searched word into the URL to use in callAPI for new results*/
const setAPI = (event) => {
    event.preventDefault()
    let searchAPI = `https://api.edamam.com/search?q=${searchInput.value.toLowerCase()}&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23`
    resultsSection.innerHTML = " ";
    callAPI(searchAPI)
}


/* Functions for filter buttons */

const getChickenData = () => {
    const APIChicken = "https://api.edamam.com/search?q=chicken&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23&from=0&to=100"
    fetch(APIChicken)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            resultsSection.innerHTML = " "
            recipeInfo(json)
        })
}

const getPastaData = () => {
    const APIPasta = "https://api.edamam.com/search?q=pasta&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23&from=0&to=100"
    fetch(APIPasta)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            resultsSection.innerHTML = " "
            recipeInfo(json)
        })
}

const getVegetarianData = () => {
    const APIVegetarian = "https://api.edamam.com/search?q=vegan&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23&from=0&to=100"
    fetch(APIVegetarian)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            resultsSection.innerHTML = " "
            recipeInfo(json)
        })
}

const getLactoseFreeData = () => {
    const APILactoseFree = "https://api.edamam.com/search?q=lactose-free&app_id=c080c39f&app_key=8787df3b40216c9c8236909c86ac3d23&from=0&to=100"
    fetch(APILactoseFree)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            resultsSection.innerHTML = " "
            recipeInfo(json)
        })
}



/*Start*/
callAPI(APIURL)

/*EVENTLISTENERS*/
search.addEventListener("submit", setAPI)
chicken.addEventListener("click", getChickenData)
pasta.addEventListener("click", getPastaData)
vegeterian.addEventListener("click", getVegetarianData)
lactoseFree.addEventListener("click", getLactoseFreeData)