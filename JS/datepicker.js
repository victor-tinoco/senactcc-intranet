Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

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

	if ($('.thisMonthFirstDay') !== undefined)
		$('.thisMonthFirstDay').val(new Date().addDays(-7).getDate() + "/" + (new Date().addDays(-7).getMonth() + 1) + "/" + new Date().addDays(-7).getFullYear());

	if ($('.thisMonthLastDay') !== undefined)
		$('.thisMonthLastDay').val(new Date().addDays(7).getDate() + "/" + (new Date().addDays(7).getMonth() + 1) + "/" + new Date().addDays(7).getFullYear());


});