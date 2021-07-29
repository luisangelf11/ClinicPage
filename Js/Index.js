import scrollUp from "./modules/btn_up.js";
import callWhatsapp from "./modules/call_now.js";
import darkTheme from "./modules/dark_theme.js";
import openMenu from "./modules/menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    scrollUp(".btn-up");
    callWhatsapp("btn-whatsapp");
    openMenu("lblMenu", "menuCheck");
    animacionScroll();
});

darkTheme(".btn-theme", "dark-theme");