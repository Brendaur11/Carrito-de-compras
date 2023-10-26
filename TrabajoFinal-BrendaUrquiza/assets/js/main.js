const Hotel = function(nombre, precio, ubicacion, estrellas) {
    this.nombre = nombre;
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.estrellas = estrellas;
}

// Crear objetos Hotel
let hotel1 = new Hotel("Lafayette Hotel", 36.228, "Buenos Aires Provincia, Argentina", 4);
let hotel2 = new Hotel("Suipacha Suites", 19.602, "Buenos Aires Provincia, Argentina", 4);
let hotel3 = new Hotel("Babel Alto", 17.328, "Buenos Aires Provincia, Argentina", 3);
let hotel4 = new Hotel("Claridge Hotel", 28.926, "Buenos Aires Provincia, Argentina", 5);
let hotel5 = new Hotel("NH Córdoba Urbano", 98.585, "Cordoba Provincia, Argentina", 4);
let hotel6 = new Hotel("Olmos Suites", 26.952, "Cordoba Provincia, Argentina", 4);
let hotel7 = new Hotel("Kube Apartments Express", 33.253, "Cordoba Provincia, Argentina", 3);
let hotel8 = new Hotel("Le Montreal Apart Hotel", 41.653, "Mendoza Provincia, Argentina", 3);
let hotel9 = new Hotel("Mod Hotels Mendoza", 68.865, "Mendoza Provincia, Argentina", 4);
let hotel10 = new Hotel("Hotel Portal Plaza Suites", 85.626, "Mendoza Provincia, Argentina", 4);

// Crear una lista de hoteles
let listaHoteles = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, ];

localStorage.setItem("hoteles", JSON.stringify(listaHoteles));

if (localStorage.getItem("hoteles")) {  //anda al localstorage y traeme la key productos
    listaHoteles = JSON.parse(localStorage.getItem("hoteles")); //parseame todo y metelo en la lista
    } else {
    listaHoteles = listaHoteles  //si no hay nada, la lista es igual a la lista de siempre
}



// Enlazar botones con el HTML (asegúrate de que los IDs coincidan)
const buscarBtn = document.getElementById("btn-buscar");
buscarBtn.addEventListener("click", () => { buscarHoteles(); });

// creo nuevos div donde van a estar contenidos las cards
const hotelesSection = document.getElementById("hoteles");

const box = document.createElement('div');
box.classList.add('box');

const container = document.createElement('div');
container.classList.add('hotel-container');    

// Función para buscar hoteles
function buscarHoteles() {
    const input = document.getElementById('buscador').value.trim().toLowerCase();
    
    const resultado = listaHoteles.filter((hotel) =>
        hotel.ubicacion.toLowerCase().includes(input)
    );

    // Eliminar los resultados anteriores si los hay
    const resultadosAnteriores = document.querySelectorAll('.hotel-container');
    resultadosAnteriores.forEach((resultado) => {
        resultado.innerHTML = '';
    });

    if (resultado.length > 0) {

        resultado.forEach((hotel) => {
            const card = document.createElement('div');
            card.classList.add('hotel-card');

            const nombre = document.createElement('h2');
            nombre.textContent = hotel.nombre;
            card.appendChild(nombre);

            const precio = document.createElement('p');
            precio.textContent = `Precio: $${hotel.precio} /Dia`;
            card.appendChild(precio);

            const ubicacion = document.createElement('p');
            ubicacion.textContent = `Ubicación: ${hotel.ubicacion}`;
            card.appendChild(ubicacion);

            const estrellas = document.createElement('p');
            estrellas.textContent = `Estrellas: ${hotel.estrellas}`;
            card.appendChild(estrellas);

            container.appendChild(card);
        });

        hotelesSection.appendChild(box);
        box.appendChild(container);

        const body = document.querySelector('body');
        body.appendChild(hotelesSection);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No se han encontrado resultados',
            text: 'Intenta en otro momento.',
          })
    }
}




