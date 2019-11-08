
function equipMobile() {
    window.location.replace("mobileAgendamento.html");
}

'Equipamentos para a vDesktop'
$(document).ready(function () {
    var api = ApiEquipamento();
    var filtro = $("#searchInput").val();
    var categoria = '';
    var iniciopag = 0
    var fimpag = 12
    api.Listar(filtro, categoria, iniciopag, fimpag, LoadEquipSuccess, LoadEquipError);
});


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
    document.getElementById("equips").innerHTML = text;
}

function LoadEquipError(data) {
    console.log("Ocorreu um erro.")
}


$(document).ready(function () {

    $(".searchInput").click(function () {
        $(".searchInput").addClass("expanded");
    });

    $(".searchInput").blur(function () {
        $(".searchInput").removeClass("expanded");
    });

});

$(document).ready(function () {

    $(".searchInput").click(function () {
        $("#search-icon").hide();
        $("#back-icon").show();
    });

    $(".searchInput").blur(function () {
        $("#back-icon").hide();
        $("#search-icon").show();
    });
});

function reset() {
    document.getElementById("searchInput").value = "";
    document.getElementById("title").focus();
}


// 'Equipamentos para a vMobile'
// $(document).ready(function () {
//     var equipamentos = consultarEquips();
//     var text = "";
//     equipamentos.forEach(element => {
//         var html =  '<div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 mb-4">' +
//                     '    <button onclick="equipMobile()" class="equip card-link pt-2 pl-2 pr-2 border-0" style="outline: none" >' + 
//                     '       <img src="' + element.Image + '" alt="Imagem do Equipamento">' +
//                     '       <br>' +
//                     '       <div class=" equip-title d-flex align-items-center">' + element.Name + '</div>' +
//                     '    </button>' +
//                     '</div>' 
//         text += html;
//     });
//     document.getElementById("equips-mobile").innerHTML = text;
// });