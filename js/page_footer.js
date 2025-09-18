
function genFooter(){

    const footer = document.createElement("div");

    footer.classList.add("navbar")
    footer.innerHTML = `
    <div class = "navbar-text">@ 2025 Pink Cinema. All rights reserved.
    </br>Thank you to all of our kind benefactors.</div>
    `
    return footer;


}