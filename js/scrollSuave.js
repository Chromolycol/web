$(document).ready(function () {
    // mostrar y ocultar

    var btnVolverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function () {

        var proyectosOffsetTop = $('#productos').offset().top;
    
        if ($(window).scrollTop() >= proyectosOffsetTop) {
    
          btnVolverArriba.css('margin-right', 0);
    
        }else if ($(window).scrollTop() <= proyectosOffsetTop/2) {
    
          btnVolverArriba.css('margin-right', '-60px');
        }
    })

    // movimiento suave de scroll para inicio

    $('a.volver-arriba').on('click', function (e) {
      e.preventDefault();

      if ($(window).scrollTop() != 0) {
        $('html,body').animate({scrollTop: 0}, 1000);
      }

    })

    // movimiento suave de scroll de los demas items del menu pricipal
    $('a.scroll-suave').on('click', function (e) {
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top
      $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });    

    $('a.scroll-acercaDe').on('click', function (e) {
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top - 122
      $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });    

    $('a.scroll-equipo').on('click', function (e) {
      e.preventDefault();
      var seccionOffsetTop = $($(this).attr('href')).offset().top - 68
      $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
    });    
});