function genThumbnail(movieObject) {
    console.log(movieObject);
    return `
    <div class="card">
        <div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div>
            <a href = "https://google.com" class = "button">View Details</a>
        </div>
    </div>
    
    `
}



function genThumbnails(moviesList) {
    console.log(moviesList);

    let thumbnailList = ``
    moviesList.forEach((movieObject) => {
        alert('hi')

        console.log(movieObject);
            thumbnailList = thumbnailList + genThumbnail(movieObject);
    })
    return thumbnailList;
}


