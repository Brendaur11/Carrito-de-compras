/* //defino el constructor de los objetos
const Alquiler = function(ciudad,precio,disponibilidad){
    this.ciudad= ciudad,
    this.precio = precio,
    this. disponibilidad = disponibilidad
}

//creo los objetos
let alquiler1= new Alquiler ("notebook lenovo", 480000, 20)
let alquiler2= new Alquiler ("lenovo pad", 45500, 26)
let alquiler3= new Alquiler ("notebook apple macbook", 700000, 45)
let alquiler4= new Alquiler ("apple pad", 350000, 23)
let alquiler5= new Alquiler ("apple smartwatch", 150000, 10)
let alquiler6= new Alquiler ("samsung smartwatch", 17000, 30)
let alquiler7= new Alquiler ("samsung smarttv", 120000, 1)
let alquiler8= new Alquiler ("samsung galaxy s23", 320000, 7)


//meto los productos en una lista
let lista = [alquiler1,alquiler2,alquiler3,alquiler4,alquiler5,alquiler6,alquiler7,alquiler8] */


// Constructor para objetos Hotel
const Hotel = function(nombre, precio, ubicacion, estrellas) {
    this.nombre = nombre;
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
}

// Crear objetos Hotel
let hotel1 = new Hotel("Hotel A", 150, "Ciudad A", 4);
let hotel2 = new Hotel("Hotel B", 120, "Ciudad B", 3);
let hotel3 = new Hotel("Hotel C", 200, "Ciudad C", 5);

// Crear una lista de hoteles
let listaHoteles = [hotel1, hotel2, hotel3];

// Enlazar botones con el HTML (asegúrate de que los IDs coincidan)
const buscarBtn = document.getElementById("btn-buscar");
buscarBtn.addEventListener("click", () => { buscarHoteles(); });

// Función para buscar hoteles
function buscarHoteles() {
    const input = document.getElementById('buscador').value.trim().toUpperCase();
    const resultado = listaHoteles.filter((hotel) => 
        hotel.ubicacion.toUpperCase().includes(input)
    );

    if (resultado.length > 0) {
        const container = document.createElement('div');
        container.classList.add('hotel-container'); // Agrega clases de CSS

        resultado.forEach((hotel) => {
            const card = document.createElement('div');
            card.classList.add('hotel-card'); // Agrega clases de CSS

            const nombre = document.createElement('h2');
            nombre.textContent = hotel.nombre;
            card.appendChild(nombre);

            const precio = document.createElement('p');
            precio.textContent = `Precio: ${hotel.precio}`;
            card.appendChild(precio);

            const ubicacion = document.createElement('p');
            ubicacion.textContent = `Ubicación: ${hotel.ubicacion}`;
            card.appendChild(ubicacion);

            const estrellas = document.createElement('p');
            estrellas.textContent = `Estrellas: ${hotel.estrellas}`;
            card.appendChild(estrellas);

            container.appendChild(card);
        });

        // Agregar el contenedor al body (o a la ubicación deseada en tu HTML)
        const body = document.querySelector('body');
        body.appendChild(container);
    } else {
        alert('No se encontraron hoteles en la ciudad especificada.');
    }
}


