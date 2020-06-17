function buscarAcudit() {

    $.ajax({
        url: 'http://api.icndb.com/jokes/random',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $.each(data, function (i, item) {  // snippet jqEach para leer cada item de la colección data json
                $('#acudit').html(item.joke); // jqHtmlSet para introducir los datos del item json en el #id 
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr);
            console.log(status);
            console.log(error);
        }
    });
}

$(document).ready(function () { // snippet jqDocReady
    $('#ajax').click(function (e) {  // snippet jqClick: al hacer clic en el id # del documento, se ejecutará lo de más abajo
        e.preventDefault();
        $('#acudit').html(''); // jqHtmlSet para vaciar el #id cada vez que hacemos clic 
        buscarAcudit();
    });
});