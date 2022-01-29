import * as actions from './constants'

//aquí se centralizará las peticiones 
const  obtenerChiste = async() => 
{
    const resp = await fetch(actions.URL_JOKES);

    if(!resp.ok) throw alert('No se pudo realizar la petición');
    
    const chiste = await resp.json();

    return chiste;   
}

export{
    obtenerChiste
}