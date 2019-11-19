$(function(){

    var api = ApiEquipamento();
    var equipQuantity;
    var quantPages;
    api.Paginacao(function(dados){
        equipQuantity = dados;
        quantPages = Math.ceil(equipQuantity / 12);


        console.log(quantPages, equipQuantity);
    }, function(dados){
        window.alert('Ocorreu um erro.')
    })

    $('.pagination-js').html(
        '<div class="col d-flex justify-content-center">' +
            '<ul class="p-0 m-0 mt-2 d-flex" style="list-style-type: none;">' +
                '<li class="page-links back only-disabled"><</li>' +
                '<li class="page-links main only">1</li>' +
                '<li class="page-links next ">2</li>' +
                '<li class="page-links next-2">3</li>' +
                '<li class="page-links next">></li>' +
            '</ul>' +
        '</div>'
    )
})

