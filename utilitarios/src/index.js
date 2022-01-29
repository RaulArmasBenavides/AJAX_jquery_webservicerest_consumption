import { createSelectPicker } from "./js/utils";
import {ListallBreedsDogs,APIImgsCats} from "./js/objeto_lit";

let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);

//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);

let _listtbreeds = ListallBreedsDogs('australian');

// let _listspeciesfish = ListAllSpeciesFishes();
// console.log(_listspeciesfish);
let aux = APIImgsCats();



 
console.log("ruta es " + aux);


// var contenedor = document.getElementById('contenedorcats');
// var img=document.createElement('img'); 
// img.setAttribute("src",_listcats.prototype.values(0)); 
// //luegos metes img en el contenedor
// console.log(img);
// contenedor.appendChild(img);