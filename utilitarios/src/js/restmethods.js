require('jquery');
import * as actions from './constants'


//función asíncrona que devuelve una lista de arreglos (familias y razas de perros )
let ListallBreedsDogs = (familia) => {
 
  let lista_aux = []; // nueva instancia
  $.get(actions.URL_DOGS, function(data) {
      lista_aux.push(data.message[familia]);
    });

    return lista_aux;
}


let ListAllSpeciesFishes = () => {
 
    let lista_aux = []; // nueva instancia
    $.get(actions.URL_FISHES, function(data) {
        //lista_aux.push(data.message);
        //console.log(data);
      });

      return lista_aux;
}




//se exportan los métodos 
export{
    ListallBreedsDogs,
    ListAllSpeciesFishes,
   
}