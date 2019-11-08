$('#modalequip').on('shown.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var idEquip = button.data('id')
	var modal = $(this)
	
	var api = ApiEquipamento(idEquip, function modalSuccess(equip) {
		modal.find('#equipName').val(equip.Nome)
	}, function(){
		console.log(data)
	})
})
