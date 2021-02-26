function ingresarValores(event) {
	var cantPersonas = document.getElementById('cantidad-personas').value;
	var cantComidas =  document.getElementById('cantidad-comida').value;
	var tipoComida =  document.getElementById('tipo-comida').value;
	var diarios =  document.getElementById('diarios').value;
	var catalogos = document.getElementById('catalogos').value;
	var botVidrio = document.getElementById('botellas-vidrio').value;
	var frascoVidrio = document.getElementById('frascos-vidrio').value;
	var botPlastico = document.getElementById('botellas-plastico').value;
	var tarroPlastico = document.getElementById('tarros-plastico').value;
	var bolsas = document.getElementById('bolsas').value;
	var lataBebida = document.getElementById('latas-bebida').value;
	var latas = document.getElementById('latas').value;
	var bricks = document.getElementById('bricks').value;

	var verde = document.encuesta.verde;
	var azul = document.encuesta.azul;
	var amarillo = document.encuesta.amarillo;
	var padreVerde = verde[0].parentElement;
	var padreAzul = azul[0].parentElement;
	var padreAmarillo = amarillo[0].parentElement;

	if (azul.value && verde.value && amarillo.value) {
		padreVerde.className = "select";
		padreAzul.className = "select";
		padreAmarillo.className = "select";
		calcularPuntos(cantPersonas,cantComidas,tipoComida,diarios,catalogos,botVidrio,frascoVidrio,botPlastico,tarroPlastico,bolsas,lataBebida,latas,bricks,verde.value,azul.value,amarillo.value);
	} else {
		alert("datos incompletos");
		if (!verde.value) {
			padreVerde.className = "select select-invalid";
		}
		if (!azul.value) {
			padreAzul.className = "select select-invalid";

		}
		if (!amarillo.value) {
			padreAmarillo.className = "select select-invalid";
		}

		event.preventDefault();
	}
}

function calcularPuntos(cantPersonas,cantComidas,tipoComida,diarios,catalogos,botVidrio,frascoVidrio,botPlastico,
	tarroPlastico,bolsas,lataBebida,latas,bricks,verde,azul,amarillo){
	var divResultado = document.getElementById('resultado');
	var reciclado = (verde + azul + amarillo);
	var residuos = (diarios + catalogos + botVidrio + frascoVidrio + botPlastico + tarroPlastico + bolsas + lataBebida + latas + bricks);
	var comida = (cantComidas + tipoComida);
	var resultado = (reciclado * residuos * comida) / cantPersonas;

	var texto;
	if (resultado <= 25) {
		divResultado.innerHTML = "Nivel de ECO Friendly ALTO: ¡Estas comprometido al 100%! ¡Sigue asi!";
	} else if (resultado >= 26 && resultado < 150) {
		divResultado.innerHTML = "Nivel de ECO Friendly MEDIO: Reduce un poco tus residuos ¡Puedes mejorar!";
	} else {
		divResultado.innerHTML = "Nivel de ECO Friendly BAJO: ¡Cambia tus hábitos! ¡Tu planeta te necesita!";
	}
	divResultado.className = "divResultado";
	// divResultado.innerHTML=texto.textContent;

}