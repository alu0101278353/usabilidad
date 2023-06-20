// Función para subir los apuntes
		function subirApuntes() {
			// Obtener los valores del formulario
			var nombre = document.getElementById("nombre").value;
			var titulo = document.getElementById("titulo").value;
			var apuntes = document.getElementById("apuntes").value;
			
			// Crear un nuevo elemento para los apuntes
			var nuevoApunte = document.createElement("div");
			nuevoApunte.className = "apunte";
			
			// Añadir el título del apunte como un encabezado
			var encabezado = document.createElement("h3");
			encabezado.textContent = titulo;
			nuevoApunte.appendChild(encabezado);
			
			// Añadir el nombre del usuario como un párrafo
			var parrafoNombre = document.createElement("p");
			parrafoNombre.textContent = "Por " + nombre;
			nuevoApunte.appendChild(parrafoNombre);
			
			// Añadir los apuntes como un párrafo
			var parrafoApuntes = document.createElement("p");
			parrafoApuntes.textContent = apuntes;
			nuevoApunte.appendChild(parrafoApuntes);
			
			// Añadir el nuevo apunte al contenedor de apuntes
			var contenedorApuntes = document.getElementById("contenedor-apuntes");
			contenedorApuntes.appendChild(nuevoApunte);
			
			// Limpiar el formulario
			document.getElementById("nombre").value = "";
			document.getElementById("titulo").value = "";
			document.getElementById("apuntes").value = "";
		}