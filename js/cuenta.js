var SegundoInicio = 10000;

function actualizar() {
	document.getElementById("countdown").innerHTML = SegundoInicio;

	if (SegundoInicio == 0) {
		//Finalizo
		alert("Cuenta regresiva terminada con exito");
	}	else {
		SegundoInicio-=1;
		SegundoInicio = SegundoInicio -1;
		setTimeout(actualizar, 1E3);
	}
}

actualizar();