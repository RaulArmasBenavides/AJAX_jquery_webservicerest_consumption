require('jquery');


//DOM functions 
const createSelectPicker = (DOMObject, objectList, selectedValues, opIni) => {
    
    var codigo = "";
    if (opIni) {
        DOMObject.append("<option style=' font-size: 10px;' value='S'>" + "Seleccione..." + "</option>");
    }
    for (var key in objectList)      {
          //DOMObject.append("<option style=' font-size: 10px;' value='" + objectList[key].Codigo + "'>" + objectList[key].Codigo + "=" + objectList[key].Descripcion + "</option>");
          DOMObject.append("<option style=' font-size: 10px;' value='" + objectList[key] + "'>" + objectList[key] + "</option>");
    }
    return DOMObject;
}



//ajax 
// $.get('https://dog.ceo/api/breeds/list/all',(data) => 
// {
//     const breedNames = data.message;
//     const select = document.getElementById('select');

//     for (const key in breedNames) {
//       if (breedNames.hasOwnProperty(key)) {
//         const option = document.createElement('option');
//         option.value = key;
//         option.innerHTML = key;
        
//         select.appendChild(option);        
//       }
//     }

//     for (const key in breedNames) 
//     {
//         if (breedNames.hasOwnProperty(key)) 
//         {
//             var items = "<tr><td>" + key + "</td><td>";
//             $('table').append(items);
//         }
//     }
// });

 const Utils = (function () {
      let  _descargar = function (metodo, obj) {
           let parametros = "";
           let ruta = null;

           if (obj != null && obj != undefined) {
               obj["userID"] = USERID;
           } else {
               obj = { "userID": USERID };
           }

           for (var key in obj) {
               if (obj.hasOwnProperty(key)) {
                   parametros += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) + "&";
               }
           }

           parametros = parametros.substring(0, parametros.length - 1);
           ruta = RUTAPROYECTO + "Principal/" + metodo + (parametros != "" ? "?" + parametros : "");
           window.open(ruta, "_blank");
       },
       _formatDate = function (fecha) {
           let pos1 = fecha.indexOf('/');
           let pos2 = fecha.indexOf('/', pos1 + 1);

           let day = fecha.substring(0, pos1);
           let month = fecha.substring(pos1 + 1, pos2);
           let year = fecha.substring(pos2 + 1);

           return year + "-" + month + "-" + day;
       },
       _formatDecimal = function (valor) {
           return parseFloat(valor).toFixed(2);
       },
       _habilitar = function (componente, flag) {
           if (flag != undefined && flag != null && !flag) {
               componente.addClass("disabled");
               componente.prop("disabled", !flag);
           }
           else {
               componente.removeClass("disabled");
               componente.prop("disabled", false);
           }
       },
       _habilitarB = function (componente, flag) {
          if (flag != undefined && flag != null && !flag) {
              componente.addClass("disabledB");
              componente.prop("disabledB", !flag);
          }
          else {
              componente.removeClass("disabledB");
              componente.prop("disabledB", false);
          }
      },
       _hacerDraggable = function (modal) {
           let dialog = modal.find(".modal-dialog");
           let ancho = dialog.width();

           dialog.css({ margin: "0px" });

           modal.css({
               left: ($(document).width() - ancho) / 2,
               right: "auto",
               bottom: "auto"
           });

           modal.addClass("nofly");

           modal.draggable({ handle: ".modal-header" });
       },
       _getEtqCodValor = function (codigo, valor) {
           let etiqueta = "";

           if (codigo != null && codigo.trim() != "") {
               etiqueta = codigo;

               if (valor != null && valor.trim() != "") {
                   etiqueta += "=" + valor;
               }
           }

           return etiqueta;
       },
       _getLangDT = function () {
           return {
               "decimal": "",
               "emptyTable": "No existen registros",
               "info": "_START_ a _END_ de _TOTAL_ registros",
               "infoEmpty": "Mostrando 0 a 0 de 0 registros",
               "infoFiltered": "(filtrado de _MAX_ registros)",
               "infoPostFix": "",
               "lengthMenu": "Mostrar _MENU_ registros",
               "loadingRecords": "Cargando...",
               "processing": "Procesando...",
               "search": "Buscar: ",
               "thousands": ",",
               "zeroRecords": "Ningún registro encontrado",
               "paginate": {
                   "first": "Primero",
                   "last": "Último",
                   "next": ">",
                   "previous": "<"
               }
           };
       },
       
       _llamarAjax = function (metodo, data, exito) {
           Utils.llamarAjaxConError(metodo, data, exito, function (xhr) {
               $('#DivErrores').html(xhr.responseText);
               $('#Errores').modal('show');
           });
       },
       _llamarAjaxConError = function (metodo, data, exito, error) {
           let obj = {
               "type": "POST",
               "url": RUTAPROYECTO + "Principal/" + metodo,
               "contentType": "application/json; charset=utf-8",
               "dataType": "json",
               "success": exito,
               "error": error,
               "beforeSend": function () {
                   //Mascara.mostrarEspera();
               },
               "complete": function () {
                   //Mascara.ocultarEspera();
               },
           };

           if (data != undefined && data != null) {
               data["userID"] = USERID;
           } else {
               data = { "userID": USERID };
           }

           obj["data"] = JSON.stringify(data);

           $.ajax(obj);
       },
       _llamarAjaxPromise = function (metodo, data) {
           return new Promise(function (resolve, reject) {
               Utils.llamarAjaxConError(metodo, data, resolve, reject);
           });
       };


  return {
      //createSelectPicker: _createSelectPicker,
      descargar: _descargar,
      //esNumero: _esNumero,
      formatDate: _formatDate,
      //formatDateTime: _formatDateTime,
      formatDecimal: _formatDecimal,
      getEtqCodValor: _getEtqCodValor,
      getLangDT: _getLangDT,
      habilitar: _habilitar,
      habilitarB: _habilitarB,
      hacerDraggable: _hacerDraggable,
      llamarAjax: _llamarAjax,
      llamarAjaxConError: _llamarAjaxConError,
      llamarAjaxPromise: _llamarAjaxPromise,
      
      //LogError: _logError,
      
  };
})();



export {
    createSelectPicker
  }


 

 




 