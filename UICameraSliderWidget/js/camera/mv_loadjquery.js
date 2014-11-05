/*
* This loads camera.js taking into account 
* if jquery was already loaded in the page
*
*/
document.observe("dom:loaded", function() {
        
        
        ///in case there is a newer jQ version already loaded
        if(jQuery.fn.jquery && (parseVersionString(jQuery.fn.jquery).minor >="9") && !jQuery.fn.camera){
              console.log("camerajs for jQ >1.9.0.");
              loadjscssfile("js/camera/jquery.easing.1.3.js","js");
              loadjscssfile("js/camera/camera.forjq19.min.js","js");
        }
        
        if(!jQuery.fn.camera ){
              console.log("loading camerajs.");
              loadjscssfile("js/camera/jquery.easing.1.3.js","js");
              loadjscssfile("js/camera/camera.min.js","js");
        }
        
});


function parseVersionString (str) {
    if (typeof(str) != 'string') { return false; }
    var x = str.split('.');
    // parse from string or default to 0 if can't parse
    var maj = parseInt(x[0]) || 0;
    var min = parseInt(x[1]) || 0;
    var pat = parseInt(x[2]) || 0;
    return {
        major: maj,
        minor: min,
        patch: pat
    }
}

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
       var fileref=document.createElement('script');
       fileref.setAttribute("type","text/javascript");
       fileref.setAttribute("src", filename);
    }
    else if (filetype=="css"){ //if filename is an external CSS file
       var fileref=document.createElement("link");
       fileref.setAttribute("rel", "stylesheet");
       fileref.setAttribute("type", "text/css");
       fileref.setAttribute("href", filename);
    }
    if (typeof fileref!="undefined"){
       document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}