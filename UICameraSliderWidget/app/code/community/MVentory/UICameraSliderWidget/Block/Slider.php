<?php
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

class MVentory_UICameraSliderWidget_Block_Slider extends Mage_Core_Block_Abstract
                                             implements Mage_Widget_Block_Interface{

  /**
  * Produces html
  * @return string
  */
  protected function _toHtml()
  {
        
      $enabled = Mage::getStoreConfig('camerasliderwidget/group1/isenabled');
      $apiKey = Mage::getStoreConfig('camerasliderwidget/group1/flickr_key');
      $photosetId = $this->getPhotosetId();
        #Mage::log($apiKey);
        
      if(empty($enabled)){
          return;
      }
        
      $html ='<div id="slides" class="" ></div>

              <script type="text/javascript">// <![CDATA[

              var API_KEY = \''. $apiKey .'\';
              var $slides = jQuery("#slides");
                           
              jQuery.ajax({type: "GET",url: "https://api.flickr.com/services/rest/?jsoncallback=?",
                              dataType: "json",
                              async: false,
                              data: {
                                    method: "flickr.photosets.getPhotos",
                                    api_key: API_KEY,
                                    photoset_id: \''. $photosetId .'\',
                                    extras: "url_o",
                                    format: "json"
                              },
                    })
                    .done(function(data){             
                              photos = data.photoset.photo;
                              jQuery.each(photos, function(i,_photo) {
                                    
                                      getFlickrFotoByPhotoId( _photo.id, $slides.width(), API_KEY, $slides );
                              });
                    });
                
                            
              jQuery(window).load(function(){
                  
                    $slides.camera({
                      alignmen: "topCenter",
                      height: "36.34%",
                      minHeight: "281px",
                      loader : false,
                      pagination: false,
                      fx: "simpleFade",
                      navigationHover:false,
                      navigation: true,
                      thumbnails: false,
                      playPause: false
                    });
              });
                           
              // ]]></script>
    ';
    
    return $html;
  }

} 