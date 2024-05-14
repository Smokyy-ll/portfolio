$(function () {
	const form = $('#form');
	const answer = $('#answer');
	
	form.validate({
	  rules: {
		 name: { required: true },
		 email: { required: true, email: true },
		 message: { required: true }
	  },
	  messages: {
		 name: { required: 'The field cannot be empty' },
		 email: { required: 'Enter your email', email: 'The symbol is missing @' },
		 message: { required: 'The field cannot be empty' }
	  },
	  submitHandler: ajaxFormSubmit
	});
 
	function ajaxFormSubmit() {
	  const string = form.serialize();
 
	  $.ajax({
		 type: 'POST',
		 url: '../php/mail.php',
		 data: string,
		 success: function (html) {
			form.slideUp(800);
			answer.html(html);
		 }
	  });
 
	  return false;
	}
 });