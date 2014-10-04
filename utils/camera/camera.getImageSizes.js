




       

             
              



/**
* Call flickr api and get me a url of a smaller image
* based on a photo id and current slider dimension. Some images are big
* and we want a quick load time.
*
* @param approtimateWidth integer of slider width
* 
*/
function getFlickrFotoByPhotoId(fotoId, approximateWidth, API_KEY, $slides){
          
          
          jQuery.ajax({type: "GET",url: "https://api.flickr.com/services/rest/?jsoncallback=?",
                  dataType: "json",
                  async: false,
                  data: {
                        method: "flickr.photos.getSizes",
                        api_key: API_KEY,
                        photo_id: fotoId ,
                        format: "json"
                      }
                })
                .done(function(data){
                        var url = "";
                        jQuery.each(data.sizes.size,function(i,size){
                            if(!size){
                              return false;
                            }
                            
                            if(approximateWidth <= 500 ){
                               if(size.label == "Medium") {
                                  url = size.source;
                                  return false;
                               }
                            }else if(approximateWidth > 500 && approximateWidth <= 800 ){
                              if(size.label == "Medium 800"){
                                  url = size.source;
                                  return false;
                               }
                            }else{
                               if(size.label == "Original"){
                                  url = size.source;
                                  return false;
                               }
                            }
                        });
                        
                        /// do something with $url !! 
                        jQuery('<div>', { 'data-src': url }).appendTo($slides);
                });
}



