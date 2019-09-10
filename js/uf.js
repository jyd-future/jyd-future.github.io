$(function() {
    $.getJSON('https://www.mindicador.cl/api', function(data) {
        var indicador = data;

        $('#uf-casa-index').html('UF: ' + +Math.round(330000 / indicador.uf.valor))
        $('#uf-dpto-index').html('UF: ' + +Math.round(205000000 / indicador.uf.valor))
        $('#uf-terr-index').html('UF: ' + +Math.round(170000000 / indicador.uf.valor))
        $('#uf').html('UF: ' + +Math.round(330000 / indicador.uf.valor))

    });
});