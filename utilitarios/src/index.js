import { createSelectPicker } from "./js/utils";
import {ListallBreedsDogs,ShowImagesCats} from "./js/restmethods";
//import {aux} from './js/objeto_lit';
let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);

//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);

let _listtbreeds = ListallBreedsDogs('australian');






let _pathimgcat = ShowImagesCats();
console.log("Este es el url de donde sale la foto del gato", _pathimgcat);
var contenedor = document.getElementById('contenedorcats');
var img=document.createElement('img'); 
img.setAttribute("src",_pathimgcat); 
contenedor.appendChild(img);
