document.addEventListener('DOMContentLoaded', function () {
  function ocultarTodasLasImagenes(contenedor) {
    const imagenes = contenedor.querySelectorAll('img');
    imagenes.forEach((imagen) => {
      imagen.style.display = 'none';
    });
  }

  function mostrarImagenSiguiente(contenedor, indiceActual) {
    const imagenes = contenedor.querySelectorAll('img');
    ocultarTodasLasImagenes(contenedor);
    imagenes[indiceActual].style.display = 'block';
    return (indiceActual + 1) % imagenes.length;
  }

  const divAutos1 = document.querySelector('.Presentación .Descripción_Autos_1');
  const divAutos2 = document.querySelector('.Presentación .Descripción_Autos_2');
  const divAutos3 = document.querySelector('.Presentación .Descripción_Autos_3');

  let indiceActual1 = 0;
  let indiceActual2 = 0;
  let indiceActual3 = 0;

  divAutos1.addEventListener('click', () => {
    indiceActual1 = mostrarImagenSiguiente(divAutos1, indiceActual1);
  });

  divAutos2.addEventListener('click', () => {
    indiceActual2 = mostrarImagenSiguiente(divAutos2, indiceActual2);
  });

  divAutos3.addEventListener('click', () => {
    indiceActual3 = mostrarImagenSiguiente(divAutos3, indiceActual3);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('nombre').addEventListener('input', function (event) {
      event.target.value = event.target.value.toUpperCase();
    });
  
    document.getElementById('apellido_paterno').addEventListener('input', function (event) {
      event.target.value = event.target.value.toUpperCase();
    });
  
    document.getElementById('apellido_materno').addEventListener('input', function (event) {
      event.target.value = event.target.value.toUpperCase();
    });
  
    document.getElementById('cuestionarioForm').addEventListener('submit', function (event) {
      event.preventDefault();
  
      let nombre = document.getElementById('nombre').value;
      let apellido_paterno = document.getElementById('apellido_paterno').value;
      let apellido_materno = document.getElementById('apellido_materno').value;
      const numero = document.getElementById('numero').value;
      const direccion = document.getElementById('direccion').value;
      const edad = document.getElementById('edad').value;
      const email = document.getElementById('email').value;
      const tipoVehiculo = document.getElementById('tipoVehiculo').value;
  
      
      nombre = nombre.toUpperCase();
      apellido_paterno = apellido_paterno.toUpperCase();
      apellido_materno = apellido_materno.toUpperCase();
  
      
      if (edad < 18) {
        alert('Perdón por las molestias, pero debido a que usted es aún menor de edad no puede continuar con su registro para usar nuestros servicios. Una disculpa.');
        return; 
      }
  
      console.log('Datos ingresados por el usuario:');
      console.log('Nombre:', nombre);
      console.log('Apellido Paterno:', apellido_paterno);
      console.log('Apellido Materno:', apellido_materno);
      console.log('Número de teléfono:', numero);
      console.log('Dirección:', direccion);
      console.log('Edad:', edad);
      console.log('Correo electrónico:', email);
      console.log('Tipo de vehículo:', tipoVehiculo);
    });
  });