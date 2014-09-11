var tablero;

var teclas = {
	UP: 38,
	DOWN: 40,
	RIGHT: 39,
	LEFT: 37
};

var fondo = {
	imagenURL: "fondo.png",
	imagenOK: false
};

var tifis = {
	frenteURL: "diana-frente.png",
	atrasURL: "diana-atras.png",
	derechaURL: "diana-der.png",
	izquierdaURL: "diana-izq.png",
	x: 100,
	y: 100,
	frenteOK: false,
	atrasOK: false,
	derechaOK: false,
	izquierdaOK: false,
	paso: 10
};

var liz = {
	imagenURL: "liz.png",
	x: 400,
	y: 200,
	imagenOK: false
};

function inicio()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.derecha = new Image();
	tifis.derecha.src = tifis.derechaURL;
	tifis.derecha.onload = confirmarDerecha;

	tifis.izquierda = new Image();
	tifis.izquierda.src = tifis.izquierdaURL;
	tifis.izquierda.onload = confirmarIzquierda;

	liz.imagen = new Image();
	liz.imagen.src = liz.imagenURL;
	liz.imagen.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDerecha()
{
	tifis.derechaOK = true;
	dibujar();
}

function confirmarIzquierda()
{
	tifis.izquierdaOK = true;
	dibujar();
}

function confirmarLiz()
{
	liz.imagenOK = true;
	dibujar();
}

function dibujar(direccion)
{
	if (fondo.imagenOK)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	var tifisOrientada = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.derechaOK && tifis.izquierdaOK) 
	{
		if(direccion == teclas.UP)
		{
			tifisOrientada = tifis.atras;
		}
		else if (direccion == teclas.DOWN)
		{
			tifisOrientada = tifis.frente;
		}
		else if (direccion == teclas.RIGHT)
		{
			tifisOrientada = tifis.derecha;
		}
		else if (direccion == teclas.LEFT)
		{
			tifisOrientada = tifis.izquierda;
		}
		tablero.drawImage(tifisOrientada, tifis.x, tifis.y);
	}

	
	if (liz.imagenOK)
	{
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}
}

function teclado(evento)
{
	var cod = evento.keyCode;
	if (cod == teclas.UP)
	{
		tifis.y -= tifis.paso;
		if ((tifis.y < 0) || ((tifis.y > 150) && (tifis.y < 250) && (tifis.x < 140)) || ((tifis.y < 250) && (tifis.x > 160) && (tifis.x < 240)) || ((tifis.y > 300) && (tifis.y < 400) && (tifis.x > 160)) || ((tifis.x > 370) && (tifis.x < 430) && (tifis.y > 150) && (tifis.y < 250)))
		{
			tifis.y += tifis.paso;
		}
		dibujar(teclas.UP);
	}
	else if (cod == teclas.DOWN)
	{
		tifis.y += tifis.paso;
		if ((tifis.y > 450) || (((tifis.y > 150) && (tifis.y < 250)) && (tifis.x < 140)) || (((tifis.y > 300) && (tifis.y < 400)) && (tifis.x > 110)) || ((tifis.x > 370) && (tifis.x < 430) && (tifis.y > 150) && (tifis.y < 250)))
		{
			tifis.y -= tifis.paso;
		}
		dibujar(teclas.DOWN);
	}
	else if (cod == teclas.LEFT)
	{
		tifis.x -= tifis.paso;
		if ((tifis.x < -10) || ((tifis.x < 140) && (tifis.y > 150) && (tifis.y < 250)) || ((tifis.x > 160) && (tifis.x < 240) && (tifis.y < 250)) || ((tifis.x > 370) && (tifis.x < 430) && (tifis.y > 150) && (tifis.y < 250)))
		{
			tifis.x += tifis.paso;
		}
		dibujar(teclas.LEFT);	
	}
	else if (cod == teclas.RIGHT)
	{
		tifis.x += tifis.paso;
		if ((tifis.x > 460) || ((tifis.x > 160) && (tifis.x < 240) && (tifis.y < 250)) || ((tifis.x > 110) && (tifis.y > 300) && (tifis.y < 400)) || ((tifis.x > 370) && (tifis.x < 430) && (tifis.y > 150) && (tifis.y < 250)))
		{
			tifis.x -= tifis.paso;
		}
		dibujar(teclas.RIGHT);
	}
}
