
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
* @param foto object
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
                        
                        if(showtitle){
                              jQuery('<div>', {'class':"slide-title-text",
                                               'style':"",
                                              'text': photo.title}).appendTo(el);
                        }                       
                        if(photo.description && photo.description._content) {
                              desc = photo.description._content;
                              if(showdesc ){
                                  
                                  var cleandesc = cleanDescription(desc);
                                  jQuery('<div>', {'class':"slide-desc-text",
                                                  'style':"",
                                                  'text': cleandesc
                                                   }).appendTo(el);
                              }
                              
                              var links = desc.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
                              
                              if(links && links[links.length-1]){
                                    el.attr('data-link',links[links.length - 1]);
                                    
                              }

                        }
                        
                        el.appendTo($slides);
                });
}


function cleanDescription(desc){
          //console.log(desc.replace(/<\/?[^>]+(>|$)/g, "") );                             
          //var cleandesc = desc.replace(/<\/?[^>]+(>|$)/g, "");
          //var cleandesc = desc.replace(/<a\b[^>]*>(.*?)<\/a>/i,"");
          var results = desc.match(/(<a\b[^>]*?>.*?<\/a>)/g);
          var last = results[results.length-1];
          var cleandesc =  desc.replace(last, "");
          cleandesc = cleandesc.replace(/<\/?[^>]+(>|$)/g, "");
          console.log(  cleandesc ); 
          return cleandesc;          
}