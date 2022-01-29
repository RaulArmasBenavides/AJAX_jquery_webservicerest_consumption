require('jquery');

const URL_DOGS = "https://dog.ceo/api/breeds/list/all";
const URL_FISHES = "https://www.fishwatch.gov/api/species";
const URL_IMG_CATS = "https://api.thecatapi.com/v1/images/search";



//métodos javascripts 

//función síncrona que devuelve la rutas (URLs públicas) de las imágenes de un API de gatos
let ShowImagesCats = function() {
     var result = "";
     var scriptUrl = URL_IMG_CATS;
     $.ajax({
        url: scriptUrl,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(data) {
            result = data[0]['url'];
            console.log(result);
        } 
     });
     return result;
}



//función asíncrona que devuelve una lista de arreglos (familias y razas de perros )
let ListallBreedsDogs = (familia) => {
 
  let lista_aux = []; // nueva instancia
  $.get(URL_DOGS, function(data) {
      lista_aux.push(data.message[familia]);
    });

    return lista_aux;
}


let ListAllSpeciesFishes = () => {
 
    let lista_aux = []; // nueva instancia
    $.get(URL_FISHES, function(data) {
        //lista_aux.push(data.message);
        //console.log(data);
      });

      return lista_aux;
}




//se exportan los métodos 
export{
    ListallBreedsDogs,
    ShowImagesCats,
    ListAllSpeciesFishes,
   
}