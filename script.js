window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showButtonWhatsappOnScroll()
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}
