$(function(){
    expandCardEvent();
})

function expandCardEvent() {
	const headerCard = $('.header-card');

	headerCard.click(function (e) {
		const bodyCard = $(this).parent().find('.body-card');
		const expandIcon = $(this).find('.expand');

		if (bodyCard.hasClass('d-none')) {
			bodyCard.removeClass('d-none');
			expandIcon.removeClass('fa-chevron-down');
			expandIcon.addClass('fa-chevron-up');
		}
		else {
			bodyCard.addClass('d-none');
			expandIcon.removeClass('fa-chevron-up');
			expandIcon.addClass('fa-chevron-down');
		}
	})
}