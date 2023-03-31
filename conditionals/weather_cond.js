const select = document.querySelector("select"); /*Save reference to select element*/
const para = document.querySelector("p"); /*Save reference to p element*/

select.addEventListener("change", setWeather); /*Add event listener to select element, whent its value is changed, setWeather() runs */

function setWeather(){
    const choice = select.value; /*Store select element value */
/*Compares choice value and set a content to p element based on choice value */
    if (choice === "sunny") {
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }
    else if(choice === "rainy") {
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
    }
    else if (choice === "snowing") {
        para.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    }
    else if (choice === "overcast") {
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }
    else {
        para.textContent = "";
    }
}