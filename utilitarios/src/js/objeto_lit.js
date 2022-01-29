const URL_DOGS = "https://dog.ceo/api/breeds/list/all";
const URL_FISHES = "https://www.fishwatch.gov/api/species";
const URL_IMG_CATS = "https://api.thecatapi.com/v1/images/search";


// let APIImgsCats = () => {
//      let ruta = [];
//      $.get(URL_IMG_CATS, function(data) {
//          ruta = data[0].url;
//         console.log("la ruta esa " + ruta);
//         return ruta;
//       });
// }

export const APIImgsCats = () => {

    let ruta = "";
    $.get(URL_IMG_CATS, function(data) {
       ruta = data[0].url;
       console.log("la ruta esa " + ruta);
       return ruta;
     });
}



let ListAllSpeciesFishes = () => {
 
    let lista_aux = []; // nueva instancia
    $.get(URL_FISHES, function(data) {
        //lista_aux.push(data.message);
        //console.log(data);
      });

      return lista_aux;
}


//consumo de un servicio rest de una lista de arreglos 
let ListallBreedsDogs = (familia) => {
 
    let lista_aux = []; // nueva instancia
    $.get("https://dog.ceo/api/breeds/list/all", function(data) {
        lista_aux.push(data.message[familia]);
      });

      return lista_aux;
}

export{
    ListAllSpeciesFishes,
    ListallBreedsDogs,
   // APIImgsCats,
}