$(document).ready(function(){
	$('#BotonSend').on('click', function () {
		var nombre = $('.Formulario-name').val();
		var apellido=$('.Formulario-apellido').val();
		var Fnac=$('.Formulario-fnac').val();
		var Email=$('.Formulario-email').val();
		var Pass=$('.Formulario-Contraseña').val();

		if(nombre === "" || apellido === "" || Fnac === "" || Email === "" || Pass === "") {

		   alertify.alert("Recuerde llenar todos los campos");

		}
	})
});
$(document).ready(function(){
	$('#BotonLoggin').on('click',function(){
			var User=$('.FormularioLog-User').val();
			var PassLogg=$('.FormularioLog-COntrasela').val();
			var r=document.getElementById("Barra");
			var Barra="<div class="+"progress"+"><div class="+"indeterminate #64b5f6"+"></div></div>";

			if(User==='' || PassLogg===''){
				alertify.alert("Faltan campos por llenar");
				
			}else{
				r.innerHTML=Barra;
			}



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
