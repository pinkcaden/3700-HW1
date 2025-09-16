function genThumbnail(movieKey, movieObject) {
    const link = "../movie_details.html"
        //?id=" + movieKey;
    let sessionStoreMovie = function () {
        console.log('clicked');
        sessionStorage.setItem("movieKey", movieObject);
        console.log('success')
    }


    return `

    <div class="card">
        <div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div>
            <a href = ${link} class = "thumbnilLinkbutton" onclick = ${sessionStoreMovie}>View Details</a>
        </div>
    </div>
    
    `
}


function genThumbnails(moviesSet) {

    let thumbnailList = ``
    Object.keys(moviesSet).forEach((movieKey) => {
        thumbnailList += genThumbnail(movieKey, moviesSet[movieKey]);
    })
    return thumbnailList
}


