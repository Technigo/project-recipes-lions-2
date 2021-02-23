// DOM-selectors
let filterSection = document.getElementById("filter-section")
let resultsSection = document.getElementById("result-section")
let searchInput = document.getElementById("search-input")
let search = document.getElementById("search")

//Global Variables
const APIURL = "https://api.edamam.com/search?q=pizza&app_id=c080c39f&app_key=ae4997265531140bc1aa520064a9b5e9"
const APIURLTWO = "https://api.edamam.com/search?q=pizza&app_id=cb0f1bb1&app_key=7934267ee79a519d8019904f7184f12c";
const APIURLTHREE = "https://api.edamam.com/search?q=pizza&app_id=cb0f1bb1&app_key=dd4f1f97d6e41f1e2d0be09cdd08db0e";
let APIHannah = " "

// FUNCTIONS
let recipeInfo = (json) => {
    json.hits.forEach((item) => {
        console.log(item.recipe.label)
        resultsSection.innerHTML += `
        <div class="recipe-container">
            <div class="image-container">
                <img src="${item.recipe.image}">
                <p class="cooking-time"><i class="fa fa-clock-o"></i> ${item.recipe.totalTime} min</p>
            </div>
            <div class="text-container">
                <h2>${item.recipe.label}</h2>
                <p>${item.recipe.source}</p>
                <a href="${item.recipe.url}" class="link">click here for recipe</a>
            </div>
        </div>
    `
    })
}

/*Should we use this for all of our fetches with different APIs?*/
let callAPI = (url) => {

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            recipeInfo(json)
        })
}

/*start-fetch that loads the page. Should this instead be a "callAPI"-call?*/
fetch(APIURLTWO)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
        recipeInfo(json)
    })

/*returning the searched word into the URL to use in callAPI for new results*/
let setAPI = (event) => {
    event.preventDefault()
    let searchAPI = `https://api.edamam.com/search?q=${searchInput.value}&app_id=c080c39f&app_key=ae4997265531140bc1aa520064a9b5e9`
    callAPI(searchAPI)
}


/*EVENTLISTENERS*/
search.addEventListener("submit", () => {
    resultsSection.innerHTML = '';
    setAPI()
})