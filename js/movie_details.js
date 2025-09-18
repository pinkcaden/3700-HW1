function genMovieBanner(movieObject) {
    const banner = document.createElement("div");
    banner.classList.add("container")



    return banner;


}

function genMovieInformation(movieObject) {
    const container = document.createElement("div");
    container.classList.add("card")
    container.innerHTML = `<div class="card-body border-1">
        <div class = "card-title fw-bold"> Movie Information </div>
        <ul class = "list-group">
            <li class = "list-group-item"><b>Director: </b>${movieObject["director"]}</li>
            <li class = "list-group-item"><b>Budget: </b>${movieObject["budget"]}</li>
            <li class = "list-group-item"><b>Box Office: </b>${movieObject["boxOffice"]}</li>
        </ul>
    </div>
    `
    return container;
}

function genCastAndCrew(movieObject) {
    const container = document.createElement("div");
    container.classList.add("card")
    const body = document.createElement("div");
    container.append(body);

    body.classList.add("card-body", "border-1")
    body.innerHTML = `
        <div class = "card-title fw-bold"> Cast & Crew </div>
        <div class = "card-text"> Main Cast:</div>
    `
    body.appendChild(genNameRoleCards(movieObject));

    return container;

}


function genNameRoleCards(movieObject){
    const cards = document.createElement("div");
    cards.classList.add("card");
    movieObject["actors"].forEach( (actor) => {
        const card = genNameRoleCard(actor["name"], actor["role"])
        card.classList.add("col")
        cards.appendChild(card);
    })
    return cards;
}


function genNameRoleCard(name, role){
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class = "card-text fw-bold">${name}</div>
        <div class = "card-text">${role}</div>
    `
    return card;
}