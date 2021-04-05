const eventbrite = new EventBrite();
const interfaz = new Interfaz();

//Listener para el boton buscar 
document.getElementById('buscarBtn').addEventListener('click', (e) => {

     e.preventDefault();

     //leer el texto del input Buscar

     const TextoBuscador = document.getElementById('evento').value;

     //Leer el select

     const CategoF = document.getElementById('listado-categorias');
     const SelectCa = CategoF.options[CategoF.selectedIndex].value;

     //Revisar que hay algo escrito en el buscador
     if(TextoBuscador !== ''){

          eventbrite.obtenerEventos(TextoBuscador, SelectCa)
          .then(eventos => {
               if(eventos.eventos.events.length > 0){

                    //si hay eventos mostrar resultados
                     ui.LimpiarResultados();
                    interfaz.mostrarEventos(eventos.eventos);

               }else{

                    //no hay eventos mostrar una alerta 

                    interfaz.MostrarMensaje('No hay resultados',  'alert alert-danger mt-4')

               }
          })

     }else{

          interfaz.MostrarMensaje('Llene todos los campo', 'alert alert-danger mt-4');

     }

});

