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