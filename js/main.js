/*-------------------ANIMACIONES IMAGENES----------------------*/ 

const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const home = document.getElementById("home");

const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            console.log("pito")
            entrada.target.classList.add("visible");
        }
    });
};

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .50
});

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(box1);
observador.observe(box2);
observador.observe(box3);
observador.observe(box4);
observador.observe(box5);
observador.observe(box6);
observador.observe(home);
/*--------------------------MENU HAMBUEGUESA-----------------*/
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});


