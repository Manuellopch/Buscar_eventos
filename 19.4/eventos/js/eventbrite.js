class EventBrite{

     constructor(){

          this.token_auth = 'CROLFN7GD36364AY4Y3E';

          this.ordenar = 'date';
     }

     //Mostra resultado de la Busqueda

     async obtenerEventos(buscador, categoria){
          const BuscarEvents = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${buscador}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

     //esperar la respuesta del evento
     const eventos = await BuscarEvents.json();
     return{
          eventos
     }
     }

     async obtenerCategorias(){

          const RespuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

          const categorias = await RespuestaCategorias.json();

          return{

               categorias

          }
     }
}