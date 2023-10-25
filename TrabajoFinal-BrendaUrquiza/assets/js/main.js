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

localStorage.setItem("hoteles", JSON.stringify(listaHoteles));

if (localStorage.getItem("hoteles")) {  //anda al localstorage y traeme la key productos
    listaHoteles = JSON.parse(localStorage.getItem("hoteles")); //parseame todo y metelo en la lista
    } else {
    listaHoteles = listaHoteles  //si no hay nada, la lista es igual a la lista de siempre
}

// Enlazo mi etiqueta section hoteles
const hotelesSection = document.getElementById("hoteles");

// Enlazar botones con el HTML (asegúrate de que los IDs coincidan)
const buscarBtn = document.getElementById("btn-buscar");
buscarBtn.addEventListener("click", () => { buscarHoteles(); });


// Función para buscar hoteles
function buscarHoteles() {
    // Eliminar los resultados anteriores si los hay
    const resultadosAnteriores = document.querySelectorAll('.hotel-container');
    resultadosAnteriores.forEach((resultado) => {
        resultado.remove();
    });

    const input = document.getElementById('buscador').value.trim().toUpperCase();
    const resultado = listaHoteles.filter((hotel) =>
        hotel.ubicacion.toUpperCase().includes(input)
    );

    if (resultado.length > 0) {
        const container = document.createElement('div');
        container.classList.add('hotel-container'); // Agrega clases de CSS

        // Titulo section hoteles
        // const titulo = document.createElement('h2');
        // titulo.classList.add('titulo-hotel')
        // titulo.textContent = 'Hoteles'
        // container.appendChild(titulo)

        resultado.forEach((hotel) => {
            const card = document.createElement('div');
            card.classList.add('hotel-card'); // Agrega clases de CSS

            const img = document.createElement('img');
            img.classList.add('imagen');

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

        

        hotelesSection.appendChild(container); // Agrega el contenedor a la sección "hoteles"

        // Agregar el contenedor al body (o a la ubicación deseada en tu HTML)
        const body = document.querySelector('body');
        body.appendChild(hotelesSection);
    } else {
        alert('No se encontraron hoteles en la ciudad especificada.');
    }
}



