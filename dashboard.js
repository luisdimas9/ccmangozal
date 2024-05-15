$(document).ready(function(){
  $('.sidenav').sidenav();
	$('#sidebar-1').sidenav({ edge: 'left' });
	$('.fixed-action-btn').floatingActionButton();
	$('.modal').modal();
	$("#main-user, #main-register, #main-acta").hide();
	$("#menu-user").click(function(){
        $("#main-user").show(); // Mostrar el elemento 1
        $("#main, #main-register, #main-acta").hide(); // Ocultar los otros elementos
		mostrarDatosGuardados();
    });

    // Manejar el clic en el botón para mostrar el elemento 2
    $("#menu-register").click(function(){
        $("#main-register").show(); // Mostrar el elemento 2
        $("#main, #main-user, #main-acta").hide(); // Ocultar los otros elementos
        mostrarDatosRegistro();
    });

    // Manejar el clic en el botón para mostrar el elemento 3
    $("#menu-acta").click(function(){
        $("#main-acta").show(); // Mostrar el elemento 3
        $("#main, #main-user, #main-register").hide(); // Ocultar los otros elementos
        listarDatosRegistro();
    });

	$("#user-save").click(function(){
        
        // Obtener los valores de los campos
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var usuario = $("#usuario").val();
        var password = $("#password").val();

        // Recuperar datos guardados previamente, si los hay
        var datosGuardados = localStorage.getItem("usuarios");
        var datos = datosGuardados ? JSON.parse(datosGuardados) : [];

        // Agregar los nuevos datos al arreglo
        datos.push({
            nombre: nombre,
            apellido: apellido,
            usuario: usuario,
            password: password
        });

        // Guardar los datos actualizados en localStorage
        localStorage.setItem("usuarios", JSON.stringify(datos));

        // Limpiar los campos del formulario
        $("#nombre").val("");
        $("#apellido").val("");
        $("#usuario").val("");
        $("#password").val("");

        // Mostrar los datos actualizados
        mostrarDatosGuardados();
    });

    $("#register-save").click(function(){
        
       // Obtener los valores de los campos
       var comite = $("#comite").val();
       var nombre = $("#nombre1").val();
       var cedula = $("#cedula").val();
       var voto = $("#voto").val();

       // Recuperar datos guardados previamente, si los hay
       var datosGuardados = localStorage.getItem("comites");
       var datos = datosGuardados ? JSON.parse(datosGuardados) : [];

       // Agregar los nuevos datos al arreglo
       datos.push({
           comite: comite,
           nombre: nombre,
           cedula: cedula,
           voto: voto
       });

       // Guardar los datos actualizados en localStorage
       localStorage.setItem("comites", JSON.stringify(datos));

       // Limpiar los campos del formulario
       $("#comite").val("");
       $("#nombre1").val("");
       $("#cedula").val("");
       $("#voto").val("");

        // Mostrar los datos actualizados
        mostrarDatosRegistro();
    });

});

function mostrarDatosGuardados() {
    // Limpiar el contenido del contenedor
	$("#user-container").empty();
   // Recuperar los datos del localStorage
   var datosGuardados = localStorage.getItem("usuarios");

   // Verificar si hay datos guardados
   if (datosGuardados) {
	   // Convertir los datos JSON a un arreglo de objetos
	   var datos = JSON.parse(datosGuardados);

	   // Recorrer los datos y mostrarlos en cards
	   datos.forEach(function(item) {
		   // Crear una card con los datos
		   var cardHTML = `		  
			   
					<div class="col s12 l6">
						<div class="card">
							<div class="card-image">
								<img src="https://image.slidesharecdn.com/rutadelpoderpopulardigital-240302050736-23825ace/85/RUTA-DEL-PODER-POPULAR-7-T-Digital-pdf-28-320.jpg">
								<span class="card-title">${item.nombre} ${item.apellido}</span>
							</div>
							<div class="card-action">
								<a href="#">Eliminar</a>
								<a href="#">Editar</a>
							</div>
						</div>
					</div>
				
		   `;
		   // Agregar la card al contenedor
		   $("#user-container").append(cardHTML);
	   });
   }
}

function mostrarDatosRegistro() {
    // Limpiar el contenido del contenedor
	$("#register-container").empty();
   // Recuperar los datos del localStorage
   var datosGuardados = localStorage.getItem("comites");

   // Verificar si hay datos guardados
   if (datosGuardados) {
	   // Convertir los datos JSON a un arreglo de objetos
	   var datos = JSON.parse(datosGuardados);

	   // Recorrer los datos y mostrarlos en cards
	   datos.forEach(function(item) {
		   // Crear una card con los datos
		   var cardHTML = `			  
			   
					<div class="col s12 l6">
						<div class="card">
							<div class="card-content">
								<span class="card-title">Comite: ${item.comite} </span>
                                <span class="card-title">Nombre:${item.nombre} </span>
                                <span class="card-title">Cedula: ${item.cedula} </span>
                                <span class="card-title">Votos:${item.voto} </span>
							</div>
							<div class="card-action">
								<a href="#">Eliminar</a>
								<a href="#">Editar</a>
							</div>
						</div>
					</div>
				
		   `;
		   // Agregar la card al contenedor
		   $("#register-container").append(cardHTML);
	   });
   }
}

function listarDatosRegistro() {
    // Limpiar el contenido del contenedor
	$("#voceros-container").empty();
   // Recuperar los datos del localStorage
   var datosGuardados = localStorage.getItem("comites");

   // Verificar si hay datos guardados
   if (datosGuardados) {
	   // Convertir los datos JSON a un arreglo de objetos
	   var datos = JSON.parse(datosGuardados);

	   // Recorrer los datos y mostrarlos en cards
	   datos.forEach(function(item) {
		   // Crear una card con los datos
		   var cardHTML = `			  
			   <span class="card-title">Comite: ${item.comite} | ${item.nombre} | ${item.cedula} | ${item.voto}</span>				
		   `;
		   // Agregar la card al contenedor
		   $("#voceros-container").append(cardHTML);
	   });
   }
}