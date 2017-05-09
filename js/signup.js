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
			
			if (app.validateForm(form)==true && app.validateNames(form)==true && app.validateEmail(form)==true && app.validatePasswords(form) ==true) {
				document.getElementById('registrationForm').style.display = 'none'
				document.getElementById('successMessage').style.display = 'block'
			} else{
				app.validateForm(form);
			app.validateNames(form);
			app.validateEmail(form);
			app.validatePasswords(form);
			}
		},

		validateForm: function(form){
			var inputs = form.find('input');
				validForm = false
			$.each(inputs, function(index,val) {
				var input = $(val),
					val = input.val(),
					formGroup = input.parents('.form-group'),
					span = formGroup.find('span');

				if (val.length === 0) { 
					formGroup.addClass('has-error')
					span.text("Это поле должно быть заполнено")
					validForm = false
				}
				else{ formGroup.removeClass('has-error')
					span.text("")
					validForm = true
					}
			});
			return validForm;
		},
		validateNames: function(form){
			var validNames = false,
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
			else if (inputName.value.length != 0) { 
				formGroupName.addClass('has-error')
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

			return validNames;
		},


		validateEmail: function(form){
			var validEmail = false,
				inputEmail = document.getElementById('inputEmail'),
				formGroupEmail = $(inputEmail).parents('.form-group'),
				emailSpan = formGroupEmail.find('span')
				re = new RegExp(/^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/);
			
			if(re.test(inputEmail.value)){
				formGroupEmail.removeClass('has-error')
				emailSpan.text("")
				validEmail = true
			} else if (inputEmail.value.length != 0 ) {
				formGroupEmail.addClass('has-error')
				emailSpan.text("Неверный формат Email")
				validEmail == false
			}
			return validEmail;
		},

		validatePasswords: function(form){
			var validPasswords = false,
				inputPassword1 = document.getElementById('inputPassword'),
				inputPassword2 = document.getElementById('inputPassword2'),
				formGroupPassword1 = $(inputPassword1).parents('.form-group'),
				formGroupPassword2 = $(inputPassword2).parents('.form-group'),
				passwordSpan1 = formGroupPassword1.find('span'),
				passwordSpan2 = formGroupPassword2.find('span');


				if (inputPassword1.value == inputPassword2.value) {
					if (inputPassword1.value.length > 4 ) {
						formGroupPassword1.removeClass('has-error')
					formGroupPassword2.removeClass('has-error')
					passwordSpan1.text("")
					passwordSpan2.text("")
					validPasswords = true
					console.log("Пароли совпадают")
					} else if (inputPassword1.value.length != 0 && inputPassword2.value.length != 0){
						formGroupPassword1.addClass('has-error')
					    formGroupPassword2.addClass('has-error')
					    passwordSpan1.text("Ненадежный пароль")
					    passwordSpan2.text("Ненадежный пароль")
					    validPasswords == false
				}
				} else if (inputPassword1.value.length != 0 && inputPassword2.value.length != 0) {
					formGroupPassword1.addClass('has-error')
					formGroupPassword2.addClass('has-error')
					passwordSpan1.text("Пароли должны совпадать")
					passwordSpan2.text("Пароли должны совпадать")
					console.log("пароли не совпадают")
					validPasswords == false
				}
				return validPasswords;
		}	
		
	}

	app.initialize();

}());