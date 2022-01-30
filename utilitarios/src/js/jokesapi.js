const URL_JOKES = "https://api.chucknorris.io/jokes/random";

// export const saludar = ( nombre ) => {

//     console.log('Creando etiqueta h1, en el HTML!');

//     const h1 = document.createElement('h1');
//     h1.innerText = `Hola, ${ nombre }`;

//     document.body.append( h1 );

// }
const body = document.body;
let btnOtro, olList;
//crea el html de manera dinámica
const crearChistesHtml = () =>
{
    const html = `
    <h1>Chistes</h1>
    <hr>
    <button class ="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    <li class ="list-group-item">...</li>
    </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);

}

const  obtenerChiste = async() => 
{
    const resp = await fetch(URL_JOKES);
    console.log(resp);
    if(!resp.ok) throw alert('No se pudo realizar la petición');
    
    const chiste = await resp.json();
    console.log(resp.json());
    return chiste;   
}


// Chiste { id, value }
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);

}


const eventos = () => {

    olList  = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnOtro.disabled = false;
    });


    
}

crearChistesHtml();
eventos();