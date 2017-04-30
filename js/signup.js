(function() {
  
	var app = {
		
		initialize : function () {			
			this.setUpListeners();
		},
		setUpListeners: function () {
			$('form').on('submit',app.submitForm)
		},

		submitForm: function (e) {
			e.preventDefault()
			console.log("submit!!!!!!")
			var form = $(this);
			app.validateForm(form);
		},

		validateForm: function(form){
			var inputs = form.find('input');
			$.each(inputs, function(index,val) {
				var input = $(val),
					val = input.val(),
					formGroup = input.parents('.form-group')
					span = formGroup.find('span')

				if (val.length === 0) { 
					formGroup.addClass('has-error')
					span.text("Это поле должно быть заполнено")
				}
				else{ formGroup.removeClass('has-error')
				span.text("")}
			});
		}	
		
	}

	app.initialize();

}());