function Validar() {

	var User = document.F1.User.value;
	var Pass = document.F1.Pass.value;
	// var Cel=document.Form1.TxtCelular.value;
	 var Div = document.getElementById("Resultado");
	// var Ec=document.Form1.TxtEstado.value;

	if(User === '' || Pass === '') {
		alert("faltan datos");

  } else {
		document.F1.submit();
	}
}

function ValidarFormReg(){

	var Nom      = document.FormReg.nombre.value;
	var Apellido = document.FormReg.apellido.value;
	var Fnac   	 = document.FormReg.fnac.value;
	var EMail		 = document.FormReg.email.value;
	var Pass		 = document.FormReg.pass.value;

	if(Nom === "" || Apellido === "" || Fnac === "" || EMail === "" || Pass === "") {
		$(document).ready(function(){
			alert("faltan campos");
		});

	} else {
		document.FormReg.submit();
	}
}
