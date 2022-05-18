//****INICIO SCRIPT****

$(document).ready(function(){
  // Se agrega Smoth Scrolling a los enlaces señalados
$("a").on('click', function(event) {

  // Se confirma que this.hash venga con un valor
   if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
  //Usando el método animate() de jQuery para Smoth Scroll
  // *800 milisegundos para desplazarse al área señalada
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  } //Finalización de confirmación this.hash
});
});

// Función Tooltip para mostrar mensaje al pasar cursor por fotos de "Destacados"
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})