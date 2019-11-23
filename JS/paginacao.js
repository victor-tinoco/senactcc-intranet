$(function () {
    getPagination(1);
})

function getPagination(pageNumber) {
    const api = ApiEquipamento();
    let equipQuantity;
    let quantPages;
    api.Paginacao(function (dados) {
        equipQuantity = (dados != 0) ? dados : 1;
        quantPages = Math.ceil(equipQuantity / 12);    
        const link = new Object;
        
        if ((pageNumber + 2) <= quantPages) {
            link.main = pageNumber;
            link.second = pageNumber + 1;
            link.third = link.second + 1;
            fillPagination(link);
            $('.main').addClass('only');
        } else {
            if ((pageNumber + 1) <= quantPages) {
                link.main = pageNumber - 1;
                link.second = pageNumber;
                link.third = pageNumber + 1;
                fillPagination(link)
                $('.second').addClass('only')
            } else if (pageNumber = quantPages) {
                link.main = pageNumber - 2;
                link.second = pageNumber - 1;
                link.third = pageNumber;
                fillPagination(link)
                $('.third').addClass('only')
            }
        }
    }, function (dados) {
        window.alert('Ocorreu um erro.')
    })
}

function fillPagination(link) {
    const containerPagination = '<div class="col d-flex justify-content-center">' +
        '<ul class="p-0 m-0 mt-2 d-flex" style="list-style-type: none;">' +
        '<li class="page-links back"><</li>' +
        '<li class="page-links main">' + link.main + '</li>' +
        '<li class="page-links second ">' + link.second + '</li>' +
        '<li class="page-links third">' + link.third + '</li>' +
        '<li class="page-links next">></li>' +
        '</ul>' +
        '</div>';

    $('.pagination-js').html(containerPagination);

    if (link.second == null)
        $('.second').addClass('d-none');

    if (link.third == null)
        $('.third').addClass('d-none');
}