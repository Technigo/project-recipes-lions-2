// DOM-selectors
let filterSection = document.getElementById("filter-section")
let resultsSection = document.getElementById("result-section")
let searchInput = document.getElementById("search-input")
let search = document.getElementById("search")

//Global Variables
const APISTART = "https://api.edamam.com/search?q=recipe&app_id=c080c39f&app_key=ae4997265531140bc1aa520064a9b5e9&from=0&to=100"
const APIURLTWO = "https://api.edamam.com/search?q=pizza&app_id=cb0f1bb1&app_key=7934267ee79a519d8019904f7184f12c";
const APIURLTHREE = "https://api.edamam.com/search?q=pizza&app_id=cb0f1bb1&app_key=dd4f1f97d6e41f1e2d0be09cdd08db0e";

// FUNCTIONS
let recipeInfo = (json) => {
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

// const getCookingTime = (json) => {
//     const time = json.hits.recipe.totalTime;
//     time.filter(time > 20)
//     if (time > 20) {

//     }
//     const filterTime = json.hits.recipe.filter(item => item.totalTime);
//     filteredForecast.forEach((forecastItem) => {

//         const icon = `https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png`;
//         forecast.innerHTML += `
//       <div>
//         <p>${loopOverWeek}</p>
//         <div>   
//           <img class="small-icons" src="${icon}">
//           <p>${loopOverTemp} °C</p>
//         </div>
//       </div>`
//     });
// };

fetch(APISTART)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        const time = json.recipe.totalTime;
        console.log(time)
        // console.log(recipeInfo(time))
        const getCookingTime = time.map((cookingTime) => {
        if (time < 20) {
            return cookingTime
            recipeInfo(cookingTime)
        } else {
            console.log("")
        }

    })
});
            
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
let setAPI = (event) => {
    event.preventDefault()
    let searchAPI = `https://api.edamam.com/search?q=${searchInput.value.toLowerCase()}&app_id=c080c39f&app_key=ae4997265531140bc1aa520064a9b5e9`
    resultsSection.innerHTML = " ";
    callAPI(searchAPI)
}



/*Start*/
callAPI(APISTART)

/*EVENTLISTENERS*/
search.addEventListener("submit", setAPI)


/* 
ID c080c39f KEY ae4997265531140bc1aa520064a9b5e9
ID cb0f1bb1 KEY 7934267ee79a519d8019904f7184f12c
ID cb0f1bb1 KEY dd4f1f97d6e41f1e2d0be09cdd08db0e */