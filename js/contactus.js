function sendEmail() {
			Email.send({
				Host: "smtp.gmail.com",
				Username : "<sender’s email address>",
				Password : "<email password>",
				To : '<recipient’s email address>',
				From : "<sender’s email address>",
				Subject : "<email subject>",
				Body : "<email body>",
			})
			.then(function(message){
				alert("mail sent successfully")
			});
		}
function myFunction() {
  alert("I will get back to you as soon as possible.");
}