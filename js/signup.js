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
			app.validateNames(form);
		},

		validateForm: function(form){
			var inputs = form.find('input');
			$.each(inputs, function(index,val) {
				var input = $(val),
					val = input.val(),
					formGroup = input.parents('.form-group'),
					span = formGroup.find('span');

				if (val.length === 0) { 
					formGroup.addClass('has-error')
					span.text("Это поле должно быть заполнено")
				}
				else{ formGroup.removeClass('has-error')
				span.text("")}
			});
		},
		validateNames: function(form){
			var validNames = true,
				inputName = document.getElementById('inputName'),
				inputSurname = document.getElementById('inputSurname'),
				formGroupName = $(inputName).parents('.form-group')
				formGroupSurname = $(inputSurname).parents('.form-group')
				nameSpan = formGroupName.find('span')
				surnameSpan = formGroupSurname.find('span')
				re = new RegExp(/^[A-Za-zА-ЯЁа-яё\s]+$/);

			if (re.test(inputName.value)) {
				formGroupName.removeClass('has-error')
				nameSpan.text("")
				validNames == true
			}
			else if (inputName.value.length != 0) { formGroupName.addClass('has-error')
				nameSpan.text("Имя должно содержать только буквы")
				validNames == false
			}
			if (re.test(inputSurname.value)) {
				formGroupSurname.removeClass('has-error')
				surnameSpan.text("")
				validNames == true
			}
			else if (inputSurname.value.length != 0) { formGroupSurname.addClass('has-error')
				surnameSpan.text("Фамилия должно содержать только буквы")
				validNames == false
			}
			return validNames
		}	
		
	}

	app.initialize();

}());