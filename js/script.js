// Question-1.js
// Convert the function below to an arrow function:

/* function getRemainder(a,b) {
    return a % b;
    }
 */

   const getRemainder = (a, b) => a % b;
   
   const result = getRemainder(10,100);

   console.log(result);



// Question-2.js
// Make a call to the Rawg API.


const apiKey = "0e1167ecc09048b1858f2071edb1f57c";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=0e1167ecc09048b1858f2071edb1f57c`;


const resultsContainer = document.querySelector(".results");

async function getGamesInformation() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const gameFacts = data.results;

        resultsContainer.innerHTML = "";
        

        for (let i = 0; i< gameFacts.length; i++) {
            if (i === 8) {
                break;
            }

                resultsContainer.innerHTML+= `<div class="result">
                                           <h2>${gameFacts[i].name}</h2>
                                           <h3>Rating: ${gameFacts[i].rating}</h3>
                                           <h4>Tags: ${gameFacts[i].tags.length}</h4>        
                                        </div>`;
           
        }

        

    } catch (error) {
        resultsContainer.innerHTML = ("An error occured when calling the API.");
    }

}

getGamesInformation();