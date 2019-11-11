
'Equipamentos para a vDesktop'
$(document).ready(function () {
    UpdateContent();
});

$('.searchInput').keydown(function() {
    UpdateContent('.searchInput');
})

$('#searchbar').keydown(function() {
    UpdateContent('#searchbar');
})

// função que atualiza a lista de equipamentos 
function UpdateContent(searchBarIdentity) {
    var api = ApiEquipamento();
    var filtro = $(searchBarIdentity).val();
    var categoria = '';
    var iniciopag = 0;
    var fimpag = 12;
    api.Listar(filtro, categoria, iniciopag, fimpag, LoadEquipSuccess, LoadEquipError);
}

function LoadEquipSuccess(data) {
    var text = "";
    data.forEach(equip => {
        let imageElementSource = equip.SrcImagem
        if (imageElementSource == null || imageElementSource == "")
            imageElementSource = "IMG/defaultequip.png"
        else
            imageElementSource = "data:image/png;base64, " + equip.SrcImagem;

        var html = '<div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-4"> <div class="equip card-link pt-2 pl-2 pr-2 " data-id="' + equip.Id + '" data-toggle="modal" data-target="#modalequip">' +
            '<div style="background-image: url(\'' + imageElementSource + '\')" class="imgEquip"></div>' +
            '<div class=" equip-title d-flex align-items-center">' + equip.Nome + '</div>' +
            '</div> </div>';
        text += html;
    });

    $('#equips, #equips-mobile').html(text);
    $('#equips-mobile .equip').removeAttr('data-toggle')
    $('#equips-mobile .equip').removeAttr('data-target')
    $('#equips-mobile .equip').on('click', function() { window.location.replace("mobileAgendamento.html"); })
}

function LoadEquipError(data) {
    console.log("Ocorreu um erro.")
}



// Search container 
$(document).ready(function () {

    $(".searchInput").click(function () {
        $(".searchInput").addClass("expanded");
        $("#search-icon").hide();
        $("#back-icon").show();
    })

    $(".searchInput").blur(function () {
        $(".searchInput").removeClass("expanded");
        $("#back-icon").hide();
        $("#search-icon").show();
    })

    // Não está funcionando
    $('.search-icon-container').click(function () {
        $('.searchInput').val('')
    })
});
