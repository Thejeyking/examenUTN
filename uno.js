/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),

Se debe Informar al usuario lo siguiente:
// El promedio de cantidad por tipo de producto
// El tipo de inflamable con más cantidad de unidades en total de la compra
// Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
// la marca y tipo del más caro de los productos*/
function mostrar() {
	var productos;
	var opcProductos;
	var cantidad;
	var validacionCantidad;
	var validacionCantidad = false;
	var tipoDeInflamable;
	var opcTipodeInflamable;
	var totalAlcohol;
	var totalIac;
	var totalQuat;
	var cantidadTotal;
	var cantidadAlcohol;
	var cantidadIac;
	var cantidadQuat;
	var cantidadTotal;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var mayorCantidad;
	var nombreMayorCantidad;
	var flag;
	var masCaro;
	var precio;
	var tipodelMascaro;
	var mardelmascaro;
	var marca;
	cantidadTotal = 0;
	totalAlcohol = 0;
	totalIac = 0;
	totalQuat = 0;
	cantidadAlcohol = 0;
	cantidadIac = 0;
	cantidadQuat = 0;
	var ingresos;
	ingresos = 5;
	for (var i = 0; i < ingresos; i++) {

		productos = prompt("Ingrese el producto");
		do {
			switch (productos) {
				case "ALCOHOL":
					opcProductos = productos;
					cantidadAlcohol =cantidadAlcohol + 1;
					cantidadTotal =cantidadTotal + 1;

					break;
				case "IAC":
					opcProductos = productos;
					cantidadIac =cantidadIac + 1;
					cantidadTotal =cantidadTotal + 1;

					break;
				case "QUAT":
					opcProductos = productos;
					cantidadQuat = cantidadQuat + 1;
					cantidadTotal =cantidadTotal + 1;
					break;

				default:
					alert("Ingrese un producto valido");
					productos = prompt("Ingrese el producto");
					break;

			}
		} while (productos != opcProductos);

		do {
			cantidad = prompt("Ingrese la cantidad");
			cantidad = parseInt(cantidad);
			if (cantidad < 0 && 1000 > cantidad) {
				do {
					switch (productos) {
						case "ALCOHOL":
							opcProductos = productos;
							totalAlcohol = cantidad + totalAlcohol;
							break;
						case "IAC":
							opcProductos = productos;
							totalIac = cantidad + totalIac;

							break;
						case "QUAT":
							opcProductos = productos;
							totalQuat = cantidad + totalQuat;
							break;

						default:
							alert("Ingrese un producto valido");
							productos = prompt("Ingrese el producto");
							break;

					}
				} while (productos != opcProductos);
				validacionCantidad = false;
			} else {
				alert("Ingrese una cantidad valida mayor 0 menor a 1000");
			}
		} while (validacionCantidad == true);
		marca = prompt("Ingrese el nombre de la marca");
		do {
			tipoDeInflamable = prompt("Ingrese el tipo de inflamable");
			switch (tipoDeInflamable) {
				case "ignífugo":
					opcTipodeInflamable = tipoDeInflamable;
					break;
				case "combustible":
					opcTipodeInflamable = tipoDeInflamable;
					break;
				case "explosivo":
					opcTipodeInflamable = tipoDeInflamable;
					break;

				default:
					alert("ngrese el tipo de inflamable Valido");
					tipoDeInflamable = prompt("Ingrese el tipo de inflamable Valido");
					break;
			}

		} while (tipoDeInflamable != opcTipodeInflamable);

		precio = prompt("Ingrese el Precio");
		precio = parseInt(precio);
		flag = false

		promedioAlcohol = totalAlcohol % cantidadAlcohol;

		promedioIac = totalIac % cantidadIac;

		promedioQuat = totalQuat % cantidadQuat;


		if (totalAlcohol > totalIac) {
			mayorCantidad = totalAlcohol;
			nombreMayorCantidad = "alcohol";
		} else if (totalAlcohol > totalQuat) {
			mayorCantidad = totalAlcohol;
			nombreMayorCantidad = "alcohol";
		} else if (totalIac > totalQuat) {
			mayorCantidad = totalQuat;
			nombreMayorCantidad = "Quat";
		} else {
			mayorCantidad = totalIac;
			nombreMayorCantidad = "IAC";
		}

		// Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
		var precioMenorCantIAC;
		precioMenorCantIAC = 0;
		if (productos == "IAC") {
			if (cantidad <= 200) {
				precioMenorCantIAC = precioMenorCantIAC + cantidad;
			}
		}

		// la marca y tipo del más caro de los productos

		if (flag = false) {
			flag = true
			mascaro = precio;
			tipodelMascaro = tipoDeInflamable;
			mardelmascaro = marca;
		} else if (precio > mascaro) {
			masCaro = precio;
		}


	}
	document.write("El promedio de cantidad por tipo de producto: <Br> alcohol: " + promedioAlcohol + " IAC: " + promedioIac + " QUAT" + promedioQuat + "<br> El tipo de inflamable con más cantidad de unidades en total de la compra: " + nombreMayorCantidad + " " + mayorCantidad + "<br> Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total " + precioMenorCantIAC + "<br> la marca y tipo del más caro de los productos " + mardelmascaro + ", " + tipodelMascaro + ", " + masCaro);
}
