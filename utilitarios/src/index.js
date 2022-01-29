import { createSelectPicker } from "./js/utils";
import {ListAllSpecies,ListallBreedsDogs} from "./js/objeto_lit";


    

let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);

//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);

let _listbreeds = ListallBreedsDogs('australian');
console.log(_listbreeds);
let _listspeciesfish = ListAllSpecies();
console.log(_listspeciesfish);