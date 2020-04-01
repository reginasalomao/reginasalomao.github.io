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

    CarregarLojistas();
});

function CarregarLojistas() {    
    for(let i = 0; i < lojistas.length; i++) {
        let slot1 = '';
        let slot2 = '';
        let slot3 = '';

        if(lojistas[i].Telefone != null) {
            slot1 = `<a href="tel:${lojistas[i].Telefone}">Telefone</a>`;
        }

        if(lojistas[i].Whatsapp != null) {
            let el = `<a href="https://api.whatsapp.com/send?number=${lojistas[i].Whatsapp}">Whatsapp</a>`;
            if(slot1 == '')
                slot1 = el;
            else
                slot2 = el;
        }

        if(lojistas[i].Instagram != null) {
            let el = `<a href="https://instagram.com/${lojistas[i].Instagram}" target="_blank">Instagram</a>`;

            if(slot1 == '')
                slot1 = el;
            else if (slot1 != '' && slot2 == '')
                slot2 = el;
            else
                slot3 = el;
        }

        var card = `
        <div class="card mt-4">
            <div class="card-body">
                <h3 class="card-title">${lojistas[i].Nome}</h3>
                <h4>${lojistas[i].Cidade.Descricao}</h4>
                <div class="row buttons">
                    <div class="col-sm-4">
                        ${slot1}
                    </div>
                    <div class="col-sm-4">
                        ${slot2}
                    </div>
                    <div class="col-sm-4">
                        ${slot3}
                    </div>
                </div>
            </div>
        </div>`

        $('#' + lojistas[i].Estado.Key).append(card);
    }
}