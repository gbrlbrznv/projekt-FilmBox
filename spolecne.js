/* 3 */
const menuTlacitko = document.querySelector("#menu-tlacitko")
const menuPolozky = document.querySelector("#menu-polozky")
const menuIkona = document.querySelector("#menu-tlacitko")

menuTlacitko.addEventListener("click", () => {
    menuPolozky.classList.toggle("show")

    if(menuPolozky.classList.contains("show")) {
        menuIkona.classList.remove("fa-bars")
        menuIkona.classList.add("fa-xmark")
    } else {
        menuIkona.classList.remove("fa-xmark")
        menuIkona.classList.add("fa-bars")
    }
})