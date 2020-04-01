$(document).ready(function() {
    $('#escolherEstado').hide();

    $('#informacoes-lojistas .regiao').click(function() {
        $('#escolherEstado').show();
        
        $('#regioes').find('.regiao').each(function() {
            var regiao = $(this).attr('href');

            $(regiao).find('.list-group-item').each(function() {
                var expanded = $(this).attr('aria-expanded');
    
                if(expanded == 'true') {
                    $(this).click();
                }
            });
        });        
    });
});