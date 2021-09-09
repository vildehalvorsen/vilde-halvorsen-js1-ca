function errorMessage(message = "Oh no, something happened with our beers!") {
    const html = `<div class="error">${message}</div>`;

    return html;
}