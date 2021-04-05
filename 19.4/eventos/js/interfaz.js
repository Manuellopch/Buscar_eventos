class Interfaz{
     constructor(){
          //inicializa la app al instanciar
          this.init();

          this.eventos = document.getElementById('resultado-eventos');

     }
     //metodo para cuando inicialice la app
     
     init(){

          //llamamos a imprimir categorias

          this.imprimirCategorias();

     }

     imprimirCategorias(){

          const ListaCategorias =  eventbrite.obtenerCategorias()

           .then( categorias =>{

               const cats = categorias.categorias.categories;
               //llenar categorias
               const SelCatego = document.getElementById('listado-categorias');

               //recorre categorias y las agrega al html
               cats.forEach(cat =>{

                 const opcion = document.createElement('option');
                 opcion.value = cat.id;
                 opcion.appendChild(document.createTextNode(cat.name_localized));
                 SelCatego.appendChild(opcion);

               })
          })

     }

     //lee la respuesta de la api e imprime el resultado

     mostrarEventos(eventos){
          const listaEventos = eventos.events;
          listaEventos.forEach( evento => {
               this.eventos.innerHTML += `
               <div class="col-md-4 mb-4">
                    <div class="card">
                         <img class="img-fluid mb-2" src="${evento.log !== null ? evento.log.url : ''}"> 
                    <div class="card-body">
                         <div class="card-text>
                         <h2 class="text-center">${evento.name.text}</h2>
                         <p class="lead text-info">Informacion del evento</p>
                         <p>${evento.description.text.substring(0,280)}...</p>

                         <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                         <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                         <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar boletos</a>
                         </div>
                       </div>
                    </div>
               </div>
               ` 
          })

     }

     //Limpia los resultados previos

     LimpiarResultados(){

          this.eventos.innerHTML = '';

     }

     //imprimir mensajes

     MostrarMensaje(mensajes, clases){

          const div = document.createElement('div');
          div.classList = clases;
          div.appendChild(document.createTextNode(mensajes));

          //buscar un padre

          const buscarDiv = document.querySelector('#buscador');
          buscarDiv.appendChild(div)
          
          setTimeout(()=>{

               this.limpiarMensaje();

          },3000);

     }
     limpiarMensaje(){
          const alert = document.querySelector('.alert');
          if(alert){
               alert.remove();
          }
     }

}