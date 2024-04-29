import kaboom from "kaboom";

export const k  = kaboom({
    global: false,
    touchToMouse: true, // works on mobile
    canvas: document.getElementById("game"),
    
})