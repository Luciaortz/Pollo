// ===== MENSAJE DE BIENVENIDA =====

window.addEventListener("load", () => {
    console.log("Página cargada correctamente");
});

// ===== BOTÓN DE SALUDO =====

function mostrarMensaje() {
    alert("¡Bienvenido a nuestra página!");
}

// ===== MENÚ RESPONSIVO =====

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("activo");
    });
}

// ===== EFECTO SCROLL SUAVE =====

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== BOTÓN VOLVER ARRIBA =====

const btnTop = document.createElement("button");
btnTop.innerHTML = "↑";
btnTop.id = "btnTop";
document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.padding = "10px 15px";
btnTop.style.border = "none";
btnTop.style.borderRadius = "50%";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.backgroundColor = "#8b5e3c";
btnTop.style.color = "white";

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        btnTop.style.display = "block";
    }else{
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
