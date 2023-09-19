const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("para")
const apikey = "CoWBMZcFtFNdBkg5n0KUgQ==EtxXZca4REdISsHw"
const options = {
    method: 'GET',
    headers:
{
    "X-Api-Key": apikey,
},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getJoke(){
    try {
        jokeEl.innerText = "Updating....";
        btnEl.disable = true;
        btnEl.innerText = "Loading...."
        const response = await fetch(apiURL, options);
        const data = await response.json();
        
        btnEl.disable = false;
        btnEl.innerText = "TELL ME A JOKE";
        jokeEl.innerText = data[0].joke;    
    } catch (error) {
        jokeEl.innerText = "An Error Ocuured, Try Again Later";
        console.log("Error");
        btnEl.innerText = "TELL ME A JOKE";
    }

};
btnEl.addEventListener("click", getJoke);
