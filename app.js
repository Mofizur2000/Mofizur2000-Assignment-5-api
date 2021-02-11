const searchFood = () => {
    const searchText = document.getElementById('inputBox').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))

}

const displayFood = food => {
    const foodGallry = document.getElementById('foodGallry')
    foodGallry.innerHTML = '';
    food.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'foodItem';
        foodDiv.innerHTML = `
        <div class="foodDetals">
            <h3 class="foodName">${food.strMeal}</h3>
            <p class="foodAbout">${food.strArea}</p>
            <button onclick="getIngredient('${food.idMeal}')" class="button">Detals</button>
        </div>
        `;
        foodGallry.appendChild(foodDiv);
    })
}

const getIngredient = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetals(data.meals))
}


const showDetals = detals => {
    const moreAbout = document.getElementById('moreAbout');
    moreAbout.innerHTML = '';
    const allDetals = document.createElement('div')
    allDetals.innerHTML = `
        <img src="${detals[0].strMealThumb}">
        <ul>
            <li>${detals[0].strIngredient1}</li>
            <li>${detals[0].strIngredient2}</li>
            <li>${detals[0].strIngredient3}</li>
            <li>${detals[0].strIngredient4}</li>
            <li>${detals[0].strIngredient4}</li>
            <li>${detals[0].strIngredient5}</li>
            <li>${detals[0].strIngredient6}</li>
            <li>${detals[0].strIngredient7}</li>
            <li>${detals[0].strIngredient8}</li>
            <li>${detals[0].strIngredient9}</li>
            <li>${detals[0].strIngredient10}</li>
        </ul>
        `
    moreAbout.appendChild(allDetals);
}
