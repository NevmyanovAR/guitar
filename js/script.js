
jQuery(document).ready(function () {
	// Открытие модального окна
	$("#demoModalStart").on("click", function () {
		$("#demoModalShadow").css({ "display": "flex" });
	});
	// Закрытие модального окна
	$("#demoModalClose").on("click", function () {
		$("#demoModalShadow").css({ "display": "none" });
	});


	$(".phone").mask("+7 (999) 999-99-99");


	jQuery('.send-form').click(function () {
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			// form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					form.html(data);
					form.css('opacity', '1');
					alert("Форма отправлена цспешно!")
					$("#demoModalShadow").css({ "display": "none" });
					//$('#myModal').modal('show') // для бутстрапа
				},
				error: function () {
					alert('Серверная ошибка!')
					// $("#demoModalShadow").css({ "display": "none" });

				}
			});
		}
	});

});

