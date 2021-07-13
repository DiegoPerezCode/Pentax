document.addEventListener('DOMContentLoaded', ()=> {
    $(document).ready(main);
    var contador = 1;

    function main() {
        const btn = document.querySelector('.menu-burger');
        let open = false;
        $('.menu_bar').click(function(){
            if(contador == 1) {
                $('.barra-menu').animate({
                    top: '0'
                });
                btn.classList.add('open');
                open = true;
                contador = 0;
            }else {
                btn.classList.remove('open');
                open = false;
                contador = 1;
                $('.barra-menu').animate({
                    top: '-200%'
                
                });
            }

        });
        $('.clos').click(function(){
            if(contador == 1) {
                $('.barra-menu').animate({
                    top: '0'
                });
                btn.classList.add('open');
                open = true;
                contador = 0;
            }else {
                btn.classList.remove('open');
                open = false;
                contador = 1;
                $('.barra-menu').animate({
                    top: '-100%'
                
                });
            }

        });
    };
});

document.querySelectorAll(".md-cont img").forEach(el=>{
    el.addEventListener("click", function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
    })
})
document.querySelectorAll(".md-cont").forEach(el=>{
    el.addEventListener("click", function(ev){
        this.classList.remove("active");
    })
})

$('.ir-arriba').click(function(){
    $('body, html').animate({
        scrollTop: '0px'
    }, 300);
});

$(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
    } else {
        $('.ir-arriba').slideUp(300);
    }
});



$(".btn-menu-galeria").click(function(e){
    e.preventDefault();
    var filtro = $(this).attr("data-filter");

    if (filtro == "todos") {
        $(".caja-img").show(0);
    } else {
        $(".caja-img").not("."+filtro).hide(0);
        $(".caja-img").filter("."+filtro).show(0);
    }
});

$("ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});

const typed = new Typed('.typed' , {

    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: true, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
