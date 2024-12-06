$(document).ready(function () {
   
    $('.imagen-producto').on('click', function () {

        var rutaImagen = $(this).attr('src');
        var modal = '<div class="modal" id="modal"><img src="' + rutaImagen +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa-solid fa-circle-xmark"></i></div></div>'

        $('#productos').after(modal);

        $('#btnCerrar').on('click', function() {
            $('#modal').remove();
        })
    })

    $(document).on('keyup', function (e) {
        if (e.which==27) {
            $('#modal').remove();
        }
    })
});