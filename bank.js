eventListerners();

function eventListerners() {

    let ui = new UI()
    //navbar button
    document.querySelector('.nav_hamburguer').addEventListener('click', function () {
        ui.navbarClick()
    })
}

function UI() { };
//UI methods
UI.prototype.navbarClick = function () {
    console.log('entro')

    let value = document.querySelector('.nav_hamburguer')
    let navbar = document.querySelector('.nav_links')
    let container = document.querySelector('.container')

    if (value.classList.contains("change")) {
        console.log('contiene')
        value.classList.remove("change");
        navbar.classList.remove("nav_links--show");
        container.classList.remove("container-mobile")
    } else {
        value.classList.add("change");
        navbar.classList.add("nav_links--show");
        container.classList.add("container-mobile");
    }
}