const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
  productos.forEach(producto => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.classList = "tarjeta-producto"
    nuevoProducto.innerHTML = `
      <img src="./img/productos/${producto.id}.png" alt="Producto 1">
      <h4>${producto.nombre}</h4>
      <p class="precio">$${producto.precio}</p>
      <button>Agregar al carrito</button>`

    contenedorTarjetas.appendChild(nuevoProducto);

    // Agregar evento de clic al botón "Agregar al carrito"
    nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => {
      // Lógica para agregar al carrito
      agregarAlCarrito(producto);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Producto agregado!"
      });
    });
  });
}

crearTarjetasProductosInicio(productosApple);
