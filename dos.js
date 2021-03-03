/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre

edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar() {
  var nombre;
  var tipodecursada;
  var cantidaddematerias;
  var sexo;
  var opcsexo;
  var nota;
  var edad;
  nombre = prompt('ingrese su nombre');

  sexo = prompt('Sexo ( femenino , masculino , no binario)');
  nota = prompt('Nota (entre 0 y 10)');
  nota = parseInt(nota);
  edad = prompt('Ingrese la edad');
  edad = parseInt(edad);
  var opctipodecursada;
  do {
    tipodecursada = prompt('Ingrese un tipo de cursada "libre";"presencial";"remota"');
    switch (tipodecursada) {
      case "libre":
        opctipodecursada = tipodecursada;
        break;
      case "presencial":
        opctipodecursada = tipodecursada;
        break;
      case "remota":
        opctipodecursada = tipodecursada;
        break;
      default:
        alert("Ingrese un tipo de cursada Valida");
        break;
    }
  } while (tipodecursada != opctipodecursada);
  do {
    cantidaddematerias = prompt('cantidad de materias( mas de cero y menos de 8)');
    cantidaddematerias = parseInt(cantidaddematerias);
  } while (cantidaddematerias < 0 && cantidaddematerias > 8);
  do {
    sexo = prompt('Sexo ( femenino , masculino , no binario)');
    switch (sexo) {
      case "femenino":
        opcsexo = sexo;
        break;
      case "masculino":
        opcsexo = sexo;
        break;

      case "no binario":
        opcsexo = sexo;
        break;

      default:
        alert("Ingrese un sexo valido";)
        break;
    }
  } while (opcsexo != sexo);










  if (nombre == nombregrabado) {
    if (tipodecursada == tipodecursadagrabado) {
      if (cantidaddematerias == cantidaddemateriasgrabada) {
        if (sexo == sexograbado) {
          if (nota == notagrabada) {
            if (edad == edadgrabada) {
              alert("Existe ya este dato");
            }
          }
        }
      }
    }
  } else {
    alert("Se esta grabando esta informacion")
  }


}
