require('jquery');
import * as actions from './constants'


//función asíncrona que devuelve una lista de arreglos (familias y razas de perros )
let ListallBreedsDogs = (familia) => {
 
  let lista_aux = []; // nueva instancia
  $.get(actions.URL_DOGS, function(data) {
      lista_aux.push(data.message[familia]);

      for (const key in data.message) {
        if (data.message.hasOwnProperty(key)) {
          const option = document.createElement('option');
          option.value = key;
          option.innerHTML = key;
          
          select.appendChild(option);        
        }
      }
  
      for (const key in data.message) 
      {
          if (data.message.hasOwnProperty(key)) 
          {
              var items = "<tr><td>" + key + "</td><td>";
              $('table').append(items);
          }
      }
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