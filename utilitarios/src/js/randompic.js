require('jquery');
import * as actions from './constants'
 

 
//API dogs 
let ShowRandomImagesDogs = function() {
    var result = "";
    var scriptUrl = actions.URL_IMG_DOGS;
    $.ajax({
       url: scriptUrl,
       type: 'get',
       dataType: 'json',
       async: false,
       success: function(data) {
           result = data.url;
           console.log(data);
       } 
    });
    return result;
}


//API cats 
let ShowRandomImagesCats = function() {
    var result = "";
    var scriptUrl = actions.URL_IMG_CATS;
    $.ajax({
       url: scriptUrl,
       type: 'get',
       dataType: 'json',
       async: false,
       success: function(data) {
           result = data[0]['url'];
           console.log(result);
       } 
    });
    return result;
}


export{
    ShowRandomImagesDogs,
    ShowRandomImagesCats,
}