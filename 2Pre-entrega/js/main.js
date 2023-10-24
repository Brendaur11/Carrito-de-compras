alert("Bienvenida/o a Quiet Home. Aquí podrás encontrar los mejores lugares para vacacionar de toda Argentina!");

// Variables de impuestos
let impuestoTurismo = 0.07;
let iva = 0.21;

// Ubicaciones
const ubicaciones = [
   { ubicacion: "Buenos Aires Capital", habitaciones: 1, precio: 31894 },
  { ubicacion: "Cordoba Capital", habitaciones: 2, precio: 16437 },
  { ubicacion: "Mendoza", habitaciones: 2, precio: 25930 },
  { ubicacion: "Santa Cruz, Calafate", habitaciones: 3, precio: 34230 },
  { ubicacion: "Capilla del Monte, Cordoba", habitaciones: 1, precio: 12395 }
];

// Funcion para sumar IVA al precio final
function sumarIva() {
    this.precio = this.precio * (1 + iva + impuestoTurismo);
}
  
// Aplicar el IVA a cada ubicación
ubicaciones.forEach((ubicacion) => {
    ubicacion.sumarIva = sumarIva;
    ubicacion.sumarIva();
});

// Funcion para buscar y filtrar la ubicacion dependiendo el monto ingresado por el usuario
function buscarUbicacionPorPrecio(precioMaximo) {
    const ubicacionesFiltradas = ubicaciones.filter(
      (ubicacion) => ubicacion.precio <= precioMaximo
    );
    return ubicacionesFiltradas;
}
  
// Pedir al usuario el monto máximo
const montoMaximo = parseFloat(prompt("Por favor, ingresa el monto máximo que estás dispuesto a pagar:"));
  
if (!isNaN(montoMaximo)) {
    // Llamar a la función de búsqueda y filtrado
    const ubicacionesFiltradas = buscarUbicacionPorPrecio(montoMaximo);
  
    if (ubicacionesFiltradas.length > 0) {
      console.log('Ubicaciones encontradas:');
      console.table(ubicacionesFiltradas); // Mostrar ubicaciones en formato de tabla en la consola
    } else {
      alert('No se encontraron ubicaciones que cumplan con los criterios.');
    }
} else {
    alert('Por favor, ingresa un monto válido.');
}
