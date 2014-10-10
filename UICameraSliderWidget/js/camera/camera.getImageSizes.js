
/**
* NOTICE OF LICENSE
*
* This source file is subject to the Creative Commons License BY-NC-ND.
* NonCommercial — You may not use the material for commercial purposes.
* NoDerivatives — If you remix, transform, or build upon the material,
* you may not distribute the modified material.
* See the full license at http://creativecommons.org/licenses/by-nc-nd/4.0/
*
* See http://mventory.com/legal/licensing/ for other licensing options.
*
* @package MVentory/UICameraSliderWidget
* @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
* @license http://creativecommons.org/licenses/by-nc-nd/4.0/
* 
*/


/**
* Call flickr api and get me a url of a smaller image
* based on a photo id and current slider dimension. Some images are big
* and we want a quick load time.
*
* @param fotoId integer 
* @param approtimateWidth integer of slider width
* @param API_KEY 
* @param $slides element
*/
function getFlickrFotoByPhotoId(photo, approximateWidth, API_KEY, $slides){
          
          
          jQuery.ajax({type: "GET",url: "https://api.flickr.com/services/rest/?jsoncallback=?",
                  dataType: "json",
                  async: false,
                  data: {
                        method: "flickr.photos.getSizes",
                        api_key: API_KEY,
                        photo_id: photo.id ,
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
                        
                        /// populate
                        el= jQuery('<div>', { 'data-src': url,
                                        });//.appendTo($slides);
                        
                        if(showdesc && photo.description && photo.description._content) {
                              
                              desc = photo.description._content;
                              var links = desc.match(/\b(http|https)?(:\/\/)?(\S*)\.(\w{2,4})\b/ig);
                              if(links && links[0]){
                                    el.attr('data-link',links[0] );
                              }
                              jQuery('<div>', {'class':"slide-desc-text",
                                        'style':"",
                                        'text': desc}).appendTo(el);
                        }     
                        
                        if(showtitle){
                              title=jQuery('<div>', {'class':"slide-title-text",
                                               'style':"",
                                              'text': photo.title}).appendTo(el);
                        }
                        
                        el.appendTo($slides);
                });
}



