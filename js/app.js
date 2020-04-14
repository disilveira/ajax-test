$(function(){

    $('#formulario').bind('submit', function(e){
        e.preventDefault();
        var data = $(this).serialize();
        
    $.ajax({
        type: 'POST',
        url: 'ajax.php',
        data: data,
        success: function(retorno){
            $('#resultado').html('Resultado: ' + retorno);
        },
        error: function(){
            alert('Ocorreu um erro ao realizar a consulta');
        }
    });

    });

});