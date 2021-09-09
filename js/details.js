const beerQuery = document.location.search;
const params = new URLSearchParams(beerQuery);
const beerID = params.get("id")

console.log(beerID);

const headTitle = document.querySelector("title");
const headMetaText = document.querySelector("head");

const detailsContainer = document.querySelector(".detailsContainer");
const url = "https://api.punkapi.com/v2/beers/" + beerID;

async function getBeerDetail() {
    try {
        const response = await fetch(url);
        const beer = await response.json();

        console.log(beer);

        detailsContainer.innerHTML = "";

        createBeerHtml(beer);

    } catch (error) {
        console.log(error);
        detailsContainer.innerHTML = errorMessage("Oh no! Something happened with the beer.");
    }

}

getBeerDetail();

function createBeerHtml(beer) {
    headTitle.innerText = `${beer[0].name}`;
    headMetaText.innerHTML += `<meta name="description" content="${beer[0].name} - ${beer[0].tagline}">`;

    detailsContainer.innerHTML = `<h1>${beer[0].name}</h1>
                                    <div class="beer-image" style="background-image: url('${beer[0].image_url}')"></div>
                                        <div class="text-container">
                                            <h2 class="beer-tagline">${beer[0].tagline}</h2>
                                            <p class="beer-description">${beer[0].description}</p>
                                            <p class="beer-abv">Abv: ${beer[0].abv}</p>
                                        <div>`;
}