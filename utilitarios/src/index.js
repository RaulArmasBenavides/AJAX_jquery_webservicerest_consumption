import { createSelectPicker } from "./js/utils";
import {ListallBreedsDogs} from "./js/restmethods";
import {ShowRandomImagesCats , ShowRandomImagesDogs} from './js/randompic';
//import {aux} from './js/objeto_lit';
let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);

//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);

let _listtbreeds = ListallBreedsDogs('australian');




let _pathimgcat = ShowRandomImagesCats();
var contenedor = document.getElementById('contenedorcats');
var img=document.createElement('img'); 
img.setAttribute("src",_pathimgcat); 
contenedor.appendChild(img);



let _pathimgdog = ShowRandomImagesDogs();
var dogsimgcontainer = document.getElementById('dogsimgcontainer');
var imgdog=document.createElement('img'); 
imgdog.setAttribute("src",_pathimgdog); 
dogsimgcontainer.appendChild(imgdog);