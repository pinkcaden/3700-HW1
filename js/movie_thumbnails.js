function genThumbnail(movieKey, movieObject) {
    const link = "./movie_details.html?id=" + movieKey

    const movieThumbnail = document.createElement('div');
    movieThumbnail.classList.add("card", "rounded-3", "m-3", "p-1", "card-sm");
    movieThumbnail.innerHTML =
        `<div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text my-1">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div >
            <a href = ${link} class = "btn btn-primary m-1" >View Details</a>

        </div>`
    movieThumbnail.addEventListener("click", function () {
        sessionStorage.setItem(movieKey, JSON.stringify(movieObject));
    });

    return movieThumbnail;

}


function genThumbnailSet(moviesSet) {
    console.log(moviesSet);

    let thumbnailList = document.createElement("div");
    Object.keys(moviesSet).forEach((movieKey) => {
        console.log(movieKey)
        thumbnailList.appendChild(genThumbnail(movieKey, moviesSet[movieKey]));
    })
    return thumbnailList
}


