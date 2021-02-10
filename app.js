// const btn = document.getElementById('btn').addEventListener('click', function getTheValueOfinput(input) {
//     let inputValue = document.getElementsById('inputBox');
//     let valueOfIneput = inputValue.value;
//     return valueOfIneput;
// })
const btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    const srcName = document.getElementById('inputBox').value;
    return srcName;
}) 



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srcName}`;
    fetch(url)
    .then(res = res.json())
    .then(data => displayMeals(data.meals))



// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${valueOfIneput}')
// .then(res => res.json())
// .then(data => displayMeals(data.meals))

const displayMeals = meals => {
    const mainDiv = document.getElementById('foodGallry');
    for (let i = 0; i < meals.length; i++) {
        const mealsDetals = meals[i];
        const foodDiv =  document.createElement('div');
        // const mealsName = mealsDetals.strMeal;
        foodInfo = `
        <div>
        <h3>${mealsDetals.strMeal}</h3>
        </div>
        `
        foodDiv.innerHTML = foodInfo;
        mainDiv.appendChild(foodDiv);
        console.log(foodInfo);

    }
}
