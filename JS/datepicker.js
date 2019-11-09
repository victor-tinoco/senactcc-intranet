$(function () {
	$(".datejs").datepicker({
		monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
		dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
		dateFormat: "dd/mm/yy",
	});

	if ($('.today') !== undefined)
		$('.today').val(new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear())
	
	if ($('.tomorrow') !== undefined)
		$('.tomorrow').val((new Date().getDate() + 1) + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear())
});