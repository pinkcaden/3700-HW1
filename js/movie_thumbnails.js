
function genThumbnail(movieObject) {
    const link = "../movie_details.html?id=" + Object.keys(movieObject)[0].toString();
    console.log(movieObject);
    console.log(link);
    return `
    <div class="card">
        <div class="card-body border-1">
            <div class = "card-title">${movieObject["title"]} (${movieObject["year"]})</div>
            <div class = "card-text">
                ${movieObject["description"]}
                </br><b>Box Office: </b> ${movieObject["boxOffice"]}
            </div>
            <a href = ${link} class = "thumbnsilLinkbutton">View Details</a>
        </div>
    </div>
    
    `
}


function genThumbnails(moviesSet) {

    let thumbnailList = ``
    moviesSet.forEach( (movieObject) => {
        thumbnailList = thumbnailList + genThumbnail(movieObject);
    })
    return thumbnailList;
}


