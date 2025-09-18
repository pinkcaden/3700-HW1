// Will be eliminated after JSON query is written
let navItemsContent = {
    "home": [
        {
            fw: "fw-bold",
            href: "moviesHW.html",
            text: "Home"
        }, {
            fw: "fw-normal",
            href: "https://www.imdb.com/chart/top/",
            text: "Top Rated"
        }, {
            fw: "fw-normal",
            href: "https://www.fandango.com/movies-in-theaters",
            text: "Latest"
        }],
    "details": [
        {
            fw: "fw-normal",
            href: "moviesHW.html",
            text: "Home"
        }, {
            fw: "fw-bold",
            href: "https://www.reddit.com/r/movies/comments/kiivkc/how_would_one_begin_to_learn_about_movies/",
            text: "Movie Details"
        }, {
            fw: "fw-normal",
            href: "https://www.fandango.com/movies-in-theaters",
            text: "Latest"
        }
    ]
}

function getNavItemsContent(){
    // Will be replaced by JSON file query
    return navItemsContent
}

function genNavbar(pageType) {
    const navBar = document.createElement("div");
    navBar.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-light", "text-black");
    navBar.innerHTML =`
        <div class = "container-fluid" >
            ${genBrand()}
            ${genNavLinks(pageType)}
        </div>`
    // return `
    // <nav class = "navbar navbar-expand-lg navbar-dark bg-light text-black">
    //     <div class = "container-fluid" >
    //         ${genBrand()}
    //         ${genNavLinks(pageType)}
    //     </div>
    // </nav>`
    return navBar
}

function genBrand() {
    return ` <a class = "navbar-brand text-black" href = "#"> 
            Pink Cinema 
            <img src = "../imgs/rose.png" width = "100" height = "100" alt = "rose logo " class="d-inline-block align-top"> 
        </a>`
}

function genNavLinks(pageType) {

    let itemStr = ``;
    const items = getNavItemsContent()[pageType];

    for (const item of items) {
        itemStr = itemStr + `<li class = "${item.fw} nav-item text-black border border-dark m-1 p-1" ><a href = ${item.href} class = "nav-link active text-black " >${item.text}</a></li>`
    }

    return `
    <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav  "> 
            ${itemStr} 
        </ul>
    </div>`
}
