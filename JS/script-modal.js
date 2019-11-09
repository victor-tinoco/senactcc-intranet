$('#modalequip').on('shown.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var idEquip = button.data('id')
	var modal = $(this)
	var api = ApiEquipamento();

	api.Consultar(idEquip, function (equip) {
		modal.find('#equipName').text(equip.Nome)
		modal.find('#equipDescricao').text(equip.Descricao)
		modal.find('.img-modal').css('background-image', 'url(data:image/png;base64, ' +  +')')


		// let imageElementSource = equip.SrcImagem
        // if (imageElementSource == null || imageElementSource == "")
        //     imageElementSource = "IMG/defaultequip.png"
        // else
        //     imageElementSource = "data:image/png;base64, " + equip.SrcImagem;

        // var html = '<div class="col-lg-3 col-md-3 col-sm-4 col-6 mb-4"> <div class="equip card-link pt-2 pl-2 pr-2 " data-id="' + equip.Id + '" data-toggle="modal" data-target="#modalequip">' +
        //     '<div style="background-image: url(\'' + imageElementSource + '\')" class="imgEquip"></div>' +
        //     '<div class=" equip-title d-flex align-items-center">' + equip.Nome + '</div>' +
        //     '</div> </div>';
        // text += html;
		
		console.log(equip)
	}, function (equip) {
		window.alert("Ocorreu um erro.")
	})
})




