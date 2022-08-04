const searchBtn = document.querySelector("#searchBtn");
const boxInput = document.querySelector("#boxInput");
const imgDiv = document.querySelector(".apiShow");
const recipe = document.querySelector('.recpie');

imgDiv.textContent = ""
recipe.textContent = ""
const randomNum = Math.floor(Math.random() * 19) + 1

imgDiv.innerHTML += `<img src="https://foodish-api.herokuapp.com/images/burger/burger${randomNum}.jpg" alt="" class="img">`
let recipeUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=burger`

fetch(recipeUrl, (obj) => {
  recipe.innerHTML += `<text>
                ${obj.meals[0].strInstructions}
    </text>`
})

searchBtn.addEventListener("click", (event) => {

 
    event.preventDefault();
    const inputValue = boxInput.value;
    
    imgDiv.textContent = ""
    recipe.textContent = ""
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    imgDiv.innerHTML += `<img src="https://foodish-api.herokuapp.com/images/${inputValue}/${inputValue}${randomNum2}.jpg" alt="${inputValue}" class="img">`
    recipeUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`

    fetch(recipeUrl, (obj) => {
      recipe.innerHTML += `<text>
                    ${obj.meals[0].strInstructions}
        </text>`
    })
    
  }

)
