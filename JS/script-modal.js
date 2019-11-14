$('#modalequip').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)
	$('#idEquip').val(button.data('id'));
	var idEquip = $('#idEquip').val()
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

	// Limpar campos do último modal aberto
	ClearCheckbox();
	ClearSelect();
	$('.today').val(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear());
})

$('input[type="checkbox"]').change(function () {
	const api = ApiAgendamento();

	var diaInput = $('.datepicker-modal').datepicker('getDate');
	var dia = diaInput.getFullYear() + '-' + (diaInput.getMonth() + 1) + '-' + diaInput.getDate();

	var cbManha = $('#check-manha').is(':checked');
	var cbTarde = $('#check-tarde').is(':checked');
	var cbNoite = $('#check-noite').is(':checked');
	
	if (cbManha)
		horaRetirada = '07:00:00';
	else
		if (cbTarde)
			horaRetirada = '12:00:00';
		else
			horaRetirada = (cbNoite) ? '19:00:00' : null;
	if (cbNoite)
		horaDevolucao = '22:30:00'
	else
		if (cbTarde)
			horaDevolucao = '18:00:00'
		else
			horaDevolucao = (cbManha) ? '12:00:00' : null;

	// Para não quebrar a hora de entrega temos essa regra de negócio, onde o usuario não pode não pode 
	// alugar num mesmo agendamento somente os horários manhã e noite.
	if (cbManha && cbNoite && !cbTarde) {
		window.alert('Para esses horários faça um agendamento de cada vez*')
		ClearCheckbox();
		ClearSelect();
	}
	var id = $('#idEquip').val()

	api.ConsultarDisponibilidade(dia, horaRetirada, horaDevolucao, id, function(data) {
		const selectQuant = $('.select-quant');
		selectQuant.empty();
		quantidadeDisponivel = data;
		var html = '';
		for (let i = 0; i <= quantidadeDisponivel; i++) {
			var text = '<option>' + i + '</option>';
			html += text;
		}
		selectQuant.html(html);
	}, function(data) {

	}, function(data) {

	},function(){ console.log('Foi inserido uma data ou períodos nulos ou indefinidos.') })
});

function ClearCheckbox(){
	$('#check-manha').prop('checked', false);
	$('#check-tarde').prop('checked', false);
	$('#check-noite').prop('checked', false);
}

function ClearSelect(){
	var text = '<option selected>0</option>';
	$('.select-quant').html(text)
}
