$(function () {
	$(".datejs").datepicker({
		monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
		dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
		dateFormat: "dd/mm/yy",

	});
	document.querySelector("#datepicker1 ").value = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

	document.querySelector("#datepicker2 ").value = (new Date().getDate() + 1) + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

	document.querySelector("#datepicker3 ").value = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

	document.querySelector("#datepicker4 ").value = (new Date().getDate() + 1) + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();

});