$(function(){
    const api = ApiEquipamento();
    let equipQuantity;
    let quantPages;
    api.Paginacao(function(dados){
        equipQuantity = (dados != 0) ? dados : 1;
        quantPages = Math.ceil(equipQuantity / 12);

    }, function(dados){
        window.alert('Ocorreu um erro.')
    })

    // Criar uma função que recebe o total de pages e qual foi clicada, que retorna um objeto que contem o back, main, second, third, next e preencher
    
    const containerPagination = '<div class="col d-flex justify-content-center">' +
                                    '<ul class="p-0 m-0 mt-2 d-flex" style="list-style-type: none;">' +
                                        '<li class="page-links back"><</li>' +
                                        '<li class="page-links main only">1</li>' +
                                        '<li class="page-links second ">2</li>' +
                                        '<li class="page-links third">3</li>' +
                                        '<li class="page-links next">></li>' +
                                    '</ul>' +
                                '</div>';

    $('.pagination-js').html(containerPagination);
})

