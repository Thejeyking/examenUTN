/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre

edad (validar)

*/
function mostrar() {
  var nombre;
  var tipodecursada;
  var cantidaddematerias;
  var sexo;
  var opcsexo;
  var nota;
  var edad;
  var flagmejorpromedio;
  var mejorpromedio
  flagmejorpromedio = false;
  var promediodemateriasfemenino;
  var promediodemateriasmasculino;
  var promediodemateriasnobinario;
  var promediodematerias;
  var promediomasculino;
  var promediomasculinonota;
  var promediofemenino;
  var promediofemeninonota;
  var promedionobinario;
  var promedionobinarionota;
  var promediofinalmasculino;
  var promediofinalfemenino;
  var promediofinalnobinario;
  promediodemateriasfemenino = 0;
  promediodemateriasmasculino = 0;
  promediodemateriasnobinario = 0;
  promediodematerias = 0;
  
  var nombremasjoven;
  var edaddelmasjoven
  var flagedadmasjoven;
  flagedadmasjoven = false;



  nombre = prompt('ingrese su nombre');

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
        alert("Ingrese un sexo valido");
        break;
    }
  } while (opcsexo != sexo);
  do {
    nota = prompt('Nota (entre 0 y 10)');
  } while (nota < 0 && nota > 11);

  if (sexo != "masculino") {
    if (flagmejorpromedio == false) {
      mejorpromedio = nota;
      flagmejorpromedio = true
    } else if (mejorpromedio < nota) {
      mejorpromedio = nota;
    }
  }

  if (tipodecursada == "libre") {
    if (flagedadmasjoven == false) {
      edaddelmasjoven = edad;
      nombremasjoven = nombre;
      flagedadmasjoven = true;
    } else if (edad < edaddelmasjoven) {
      edaddelmasjoven = edad;
      nombremasjoven = nombre;
    }
  }
  if (nombre == nombregrabado) {
    if (tipodecursada == tipodecursadagrabado) {
      if (cantidaddematerias == cantidaddemateriasgrabada) {
        if (sexo == sexograbado) {
          if (nota == notagrabada) {
            if (edad == edadgrabada) {
              if (sexo == "masculino") {
                promediodemateriasmasculino = promediodemateriasmasculino + 1;
                alert("este usuario existe");
              } else if (sexo == "femenino") {
                promediodemateriasfemenino = promediodemateriasfemenino + 1;
                alert("este usuario existe");
              } else if (sexo == "no binario") {
                promediodemateriasnobinario = promediodemateriasnobinario + 1;
                alert("este usuario existe");
              }

            }
          }
        }
      }
    }
  } else {
    alert("Se esta grabando esta informacion")
  }
  switch (sexo) {
    case "masculino":
      promediomasculinonota = nota;
      promediomasculino = promediomasculino + nota;
      break;
    case "femenino":
      promediofemeninonota = nota;
      promediofemenino = promediofemenino + nota;
      break;
    case "no binario":
      promedionobinarionota = nota;
      promedionobinario = promedionobinario + nota;
      break;
  }
  promediofinalmasculino = promediomasculino % promediodemateriasfemenino;
  promediofinalfemenino = promediofemenino % promediodemateriasmasculino;
  promediofinalnobinario = promedionobinario % promediodemateriasnobinario;

  document.write("El nombre del mejor promedio que no sea masculino" + nombremasjoven + "El nombre del mas joven de los alumnos entre los que la dan libre" + nombremasjoven + "El promedio de nota por sexo" + "masculino: " + promediofinalmasculino + " femenino: " + promediofinalfemenino + "no binario: " + promediofinalnobinario + "La edad y nombre del que cursa mas materias que no sean en forma remota")


}
