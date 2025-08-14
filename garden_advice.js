//Storing advice in objects to simplfy the code

//advice on seasons
const seasonAdvice = {
  summer: "Water your plants regularly and provide some shade.\n",
  winter: "Protect your plants from frost with covers.\n"
};

//advice on thriving plants
const thrivingPlant = {
    summer: "Flowers thrive best in this season. \n", 
    winter: "Vegetables thrive best in this season. \n"
};

//advice on plants
const plantAdvice = {
  flower: "Use fertiliser to encourage blooms.\n",
  vegetable: "Keep an eye out for pests!\n"
};

// Variable to hold gardening advice
let advice = "";

//function for the input

/*input a season 
Determine advice based on season input, gives back seasonal advice as well as thriving plants
*/

function getSeasonAdvice() {
  let season = document.getElementById("season").value.toLowerCase();
  let advice = seasonAdvice[season] || "No advice for this season.\n";

  if(thrivingPlant[season]){
    advice += thrivingPlant [season];
  }
  console.log(advice);
}

/*input a flower type
Determine advice based on type of plant input
*/

function getPlantAdvice() {
  let plantType = document.getElementById("plant").value.toLowerCase();
  let advice = plantAdvice[plantType] || "No advice for this type of plant.\n";
  console.log(advice);
}

// Listen for Enter Key

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("season").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getSeasonAdvice();
    }
  });

  document.getElementById("plant").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getPlantAdvice();
    }
  });
});
