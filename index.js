function showHideMenu() {
    const barMenu = document.getElementById("barmenu"),
    menu = document.getElementById("links-list");
    barMenu.addEventListener('click', () => {
        if(barMenu.children[0].className === "fa fa-bars") {
            menu.style.height ="auto";
            barMenu.children[0].className = "fa fa-times";
        } else {
            menu.style.height ="0";
            barMenu.children[0].className = "fa fa-bars";
        }
    })
}
showHideMenu();