import { createSelectPicker } from "./js/utils";
import {ListallBreedsDogs} from "./js/restmethods";
import {ShowRandomImagesCats , ShowRandomImagesDogs} from './js/randompic';
//import {aux} from './js/objeto_lit';
let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);

//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);

ListallBreedsDogs('australian');
ShowRandomImagesCats();
ShowRandomImagesDogs();