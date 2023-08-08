// Obtener todas las imágenes con la clase "Autos_1"
const imagenesAutos = document.querySelectorAll('.Autos_1');

// Inicializar el índice de la imagen actual en 0
let indiceActual = 0;

// Función para mostrar la imagen siguiente
function mostrarSiguienteImagen() {
  // Ocultar todas las imágenes
  imagenesAutos.forEach((imagen) => {
    imagen.style.display = 'none';
  });

  // Mostrar la imagen actual
  imagenesAutos[indiceActual].style.display = 'block';

  // Incrementar el índice para mostrar la siguiente imagen
  indiceActual = (indiceActual + 1) % imagenesAutos.length;
}

// Agregar evento de clic a cada imagen
imagenesAutos.forEach((imagen) => {
  imagen.addEventListener('click', mostrarSiguienteImagen);
});

// Mostrar la primera imagen al cargar la página
mostrarSiguienteImagen();