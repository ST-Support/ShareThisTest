var botonCorreo = document.querySelectorAll('[data-network="email"]');

botonCorreo.onclick= function emailclick(){
    window.location = "mailto:?subject=I'd like to share a link with you";
    console.log("holas");
}