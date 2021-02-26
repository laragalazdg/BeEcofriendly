function verificarDatos(event){
	var nombre = document.getElementById('nombre');
	var apellido = document.getElementById('apellido');
	var email = document.getElementById('email');
	var dia = document.getElementById('dia');
	var anio = document.getElementById('anio');
	var mes = document.getElementById('mes');
	var validez = true;
	var validezFecha = true;
	nombre.className = "";
	apellido.className = "";
	email.className = "";
	anio.className = "";
	mes.className = "";
	dia.className = "";


	if (!nombre.value) {
		validez = false;
		marcarError(nombre, "nombre incompleto");
	}

	if (!apellido.value) {
		validez = false;
		marcarError(apellido, "apellido incompleto");
	}

	if (!email.value || !validarEmail(email)) {
		validez = false;
		marcarError(email, "email incompleto o invalido");
	}

	if (!anio.value || !validarAnio(anio)) {
		validez = false;
		validezFecha = false;
		marcarError(anio, "año incompleto o invalido");
	}

	if (!mes.value || !validarMes(mes)) {
		validez = false;
		validezFecha = false;
		marcarError(mes, "mes incompleto o invalido");
	}

	if (!dia.value || !validarDia(dia)) {
		validez = false;
		validezFecha = false;
		marcarError(dia, "día incompleto o invalido");
	}

	if (validezFecha && !validarFecha(dia,mes,anio)) {
		validez = false;
		dia.className = "incompleto";
		mes.className = "incompleto";
		anio.className = "incompleto";
		alert("fecha invalida");
	}

	if (validez) {
		var respuesta = document.getElementById('respuesta');
		respuesta.innerHTML = "Su informacion fue registrada correctamente";
		respuesta.className = "registrarse";
		document.getElementById('form').reset();
	}
	event.preventDefault();
}

function marcarError(campo, txt){
	alert(txt);
	campo.className = "incompleto";
}

// dia
function validarDia(dia) {
	return (dia.value > 0 && dia.value < 32);
}
// mes
function validarMes(mes) {
	return ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"].includes(mes.value);
}
//anio
function validarAnio(anio) {
 return (anio.value > 1900 && anio.value < parseInt((new Date).getFullYear()));
}
//fecha
function validarFecha(dia, mes, anio) {
	var validez = true;
	if (["abril", "junio","noviembre"].includes(mes.value) && dia.value > 30) {
		validez = false;
	} else if (["diciembre", "octubre", "agosto", "julio", "marzo", "enero"].includes(mes.value) && dia.value > 31) {
		validez = false;
	} else if (mes.value=="febrero" && dia.value > 28 && !((anio.value % 4 == 0 && anio.value % 100 != 0) || anio.value % 400 == 0)) {
	 	validez = false;
	}
	return validez;
}

function validarEmail(email) {
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return expr.test(email.value);
}
