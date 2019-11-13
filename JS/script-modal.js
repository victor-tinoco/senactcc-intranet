$('#modalequip').on('shown.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	var idEquip = $('#idEquip').val(button.data('id'));
	var modal = $(this)
	var api = ApiEquipamento();

	api.Consultar(idEquip, function (equip) {
		modal.find('#equipName').text(equip.Nome)
		modal.find('#equipDescricao').text(equip.Descricao)

		let imageElementSource = equip.SrcImagem
		if (imageElementSource == null || imageElementSource == "")
			imageElementSource = "IMG/defaultequip.png"
		else
			imageElementSource = "data:image/png;base64, " + equip.SrcImagem;
		modal.find('.img-modal').css('background-image', 'url(\'' + imageElementSource + '\')');

	}, function (equip) {
		window.alert("Ocorreu um erro.")
	})
})

$('input[type="checkbox"]').change(function () {
	const api = ApiAgendamento();

	var dia = $('.datepicker-modal').val();

	var cbManha = $('#check-manha').is(':checked');
	var cbTarde = $('#check-tarde').is(':checked');
	var cbNoite = $('#check-noite').is(':checked');
	
	if (cbManha)
		horaRetirada = '07:00';
	else
		if (cbTarde)
			horaRetirada = '13:00';
		else
			horaRetirada = (cbNoite) ? '19:00' : null;
	if (cbNoite)
		horaDevolucao = '22:30'
	else
		if (cbTarde)
			horaDevolucao = '18:00'
		else
			horaDevolucao = (cbManha) ? '12:00' : null;

	// Para não quebrar a hora de entrega temos essa regra de negócio, onde o usuario não pode não pode 
	// alugar num mesmo agendamento somente os horários manhã e noite.
	if (cbManha && cbNoite && !cbTarde) {
		window.alert('Para esses horários faça um agendamento de cada vez*')
		$('#check-manha').prop('checked', false);
		$('#check-tarde').prop('checked', false);
		$('#check-noite').prop('checked', false);
	}

	var id = $('#idEquip').val()

	console.log(dia, horaRetirada, horaDevolucao, id)

	// api.ConsultarDisponibilidade(dia, horaRetirada, horaDevolucao, id, function(data) {
		
	// }, function(data) {

	// }, function(data) {

	// },function(){ window.alert('Ocorreu um erro.') })
});

