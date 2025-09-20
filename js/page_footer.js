
function genFooter(){

    const footer = document.createElement("footer");

    footer.classList.add("footer", "bg-dark", "justify-content-center")
    footer.innerHTML = `
    <div class = "container-fluid  text-white-50 text-center py-3">@ 2025 Pink Cinema. All rights reserved.
    </br>Thank you to all of our kind benefactors.</div>
    `
    return footer;


}