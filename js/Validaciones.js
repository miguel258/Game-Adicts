$(document).ready(function(){
	$('#BotonSend').on('click', function () {
		var nombre = $('.Formulario-name').val();

		alertify.alert(nombre)

	})
});

// function ValidarFormReg(){
//
// 	var Nom      = document.FormReg.nombre.value;
// 	var Apellido = document.FormReg.apellido.value;
// 	var Fnac   	 = document.FormReg.fnac.value;
// 	var EMail		 = document.FormReg.email.value;
// 	var Pass		 = document.FormReg.pass.value;
//
// 	if(Nom === "" || Apellido === "" || Fnac === "" || EMail === "" || Pass === "") {
// 		$(document).ready(function(){
// 			alert("faltan campos");
// 		});
//
// 	} else {
// 		document.FormReg.submit();
// 	}
// }
