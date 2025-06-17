function resizeCanvas() {
    var canvas = document.getElementById('#canvas'); // canvas padrão da Unity
    if (!canvas) {
        canvas = document.querySelector('canvas'); // fallback
    }
    if (canvas) {
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
    }
}
window.addEventListener("resize", resizeCanvas);
window.addEventListener("load", resizeCanvas);
