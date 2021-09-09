const url = "https://api.punkapi.com/v2/beers/";
const resultsContainer = document.querySelector(".resultsContainer");


async function getBeers() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            const name = results[i].name;
            const tagline = results[i].tagline;
            const image = results[i].image_url;

            if (i === 10) {
                break;
            }

            resultsContainer.innerHTML += `<a href="/details.html?id=${results[i].id}" class="beer">
                                                <div class="beer-image" style="background-image: url('${image}')"></div>
                                                <h2>${name}</h2>
                                                <p>${tagline}</p>
                                        </a>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = errorMessage();
    }

}

getBeers();