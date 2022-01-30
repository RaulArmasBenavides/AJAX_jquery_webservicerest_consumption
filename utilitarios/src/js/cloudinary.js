import * as actions from './constants'
const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `

        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografía: </label>
        <input type="file" accept="image/png, image/jpeg"/>

        <br>
        <img id="foto" class="img-thumbnail" src="">
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');

}



// ArchivoSubir :: File
const subirImagen = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', actions.cloudPreset );
    formData.append('file', archivoSubir );

    try { 
        
        const resp = await fetch( actions.URL_CLOUDINARY, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url; 
        } else {
            throw await resp.json();
        }

    } catch( err ) {
        throw err;
    }

}


const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0];
        // console.log(file);
        subirImagen( file ).then( url => imgFoto.src = url );

    });

}



// export const init = () => {
//     crearInputFileHtml();
//     eventos();
// }

export {
    crearInputFileHtml,
    eventos
}