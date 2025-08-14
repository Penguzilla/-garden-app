//input a season to get an answer

// Variable to hold gardening advice
let advice = "";

/*input a season 
Determine advice based on season input
*/

function season() {
      let season = document.getElementById("season").value.toLowerCase();
      if (season === "summer") {
        advice += "Water your plants regularly and provide some shade.\n";
      } else if (season === "winter") {
        advice += "Protect your plants from frost with covers.\n";
      } else {
        advice += "No advice for this season.\n";
      }
      console.log(advice);
    }

/*input a flower type
Determine advice based on type of plant input
*/

 function plant() {
      let plantType = document.getElementById("plant").value.toLowerCase();
      if (plantType === "flower") {
        advice += "Use fertiliser to encourage blooms.\n";
      } else if (plantType === "vegetable") {
        advice += "Keep an eye out for pests!\n";
      } else {
        advice += "No advice for this type of plant.\n";
      }
      console.log(advice);
    }

// Listen for Enter Key

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("season").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      season();
    }
  });

  document.getElementById("plant").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      plant();
    }
  });
});


// TODO: Examples of possible features to add:
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.