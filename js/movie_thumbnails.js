function sessionStoreMovie(movieId) {
}


function genThumbnail(movieKey, movieObject) {
    const link = "./movie_details.html?id=" + movieKey

    const movieThumbnail = document.createElement('div');
    movieThumbnail.className = "card";
    movieThumbnail.innerHTML =
        `<div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div>
            <a href = ${link} >View Details</a>
        </div>`
    movieThumbnail.addEventListener("click", function () {
        sessionStorage.setItem(movieKey, JSON.stringify(movieObject));
    });

    return movieThumbnail;





}


function genThumbnails(moviesSet) {

    let thumbnailList = document.createElement("div");
    Object.keys(moviesSet).forEach((movieKey) => {
        thumbnailList.appendChild( genThumbnail(movieKey, moviesSet[movieKey]));
    })
    return thumbnailList
}


