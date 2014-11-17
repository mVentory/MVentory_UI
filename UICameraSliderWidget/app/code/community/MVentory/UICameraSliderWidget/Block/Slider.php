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
* @author bogdan@mventory.com
* @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
* @license http://creativecommons.org/licenses/by-nc-nd/4.0/
* 
*/

class MVentory_UICameraSliderWidget_Block_Slider extends Mage_Core_Block_Abstract
  implements Mage_Widget_Block_Interface {

  /**
  * Produces html
  * @return string
  */
  protected function _toHtml() {

    $enabled = Mage::getStoreConfig('camerasliderwidget/group1/isenabled');
    $apiKey = Mage::getStoreConfig('camerasliderwidget/group1/flickr_key');

    $userId = $this->getUserId();
    $photosetId = $this->getPhotosetId();
    ///html id of the slides element
    $slidesId =   $this->getSlidesId();
    if (empty($enabled)) {
      return;
    }

    ///parameters for camerajs
    $cameraparams = trim($this->getparamsstring(),", ");
    $cameraparams = explode(",", $cameraparams);
    $paramsstr ="";
    $title="";
    $description="";
    foreach ($cameraparams as $_param) {
      $pair = explode(":",$_param);
      if (trim($pair[0]," '")=="title") {
        $title = true;
        continue;
      }
      if (trim($pair[0]," '")=="description") {
        $description = true;
        continue;
      }
      $paramsstr.= trim($_param) .",";
    }
    $paramsstr = trim($paramsstr,",");

    if (empty($userId) && empty($photosetId)) {
      return;
    }


    if (empty($slidesId)) {
      $slidesId = 'slides';
      $html = '<div id="'.$slidesId.'" class=""></div>';
    } else {
      ///the html element was already placed. For example in the cms page.
      $html ="";
    }



    ///lazy load camera.js
    $html .='<script type="text/javascript">//<![CDATA[
      document.observe("dom:loaded", function() {

        ///in case there is a newer jQ version already loaded
        if (jQuery.fn.jquery && (parseVersionString(jQuery.fn.jquery).minor >="9") && !jQuery.fn.camera) {

              loadjscssfile("'.Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS).'camera/jquery.easing.1.3.js","js");
              loadjscssfile("'.Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS).'camera/camera.forjq19.min.js","js");
        }

        if (!jQuery.fn.camera) {
              //console.log("lazy load camerajs.", "'.Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS).'" );
              loadjscssfile("'.Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS).'camera/jquery.easing.1.3.js","js");
              loadjscssfile("'.Mage::getBaseUrl(Mage_Core_Model_Store::URL_TYPE_JS).'camera/camera.min.js","js");
        }

      });

      function parseVersionString (str) {
        if (typeof(str) != "string") { return false; }
        var x = str.split(".");
        // parse from string or default to 0 if cant parse
        var maj = parseInt(x[0]) || 0;
        var min = parseInt(x[1]) || 0;
        var pat = parseInt(x[2]) || 0;
        return {
            major: maj,
            minor: min,
            patch: pat
        }
      }

      function loadjscssfile(filename, filetype) {
        if (filetype=="js") { //if filename is a external JavaScript file
           var fileref=document.createElement("script");
           fileref.setAttribute("type","text/javascript");
           fileref.setAttribute("src", filename);
        }
        else if (filetype=="css") { //if filename is an external CSS file
           var fileref=document.createElement("link");
           fileref.setAttribute("rel", "stylesheet");
           fileref.setAttribute("type", "text/css");
           fileref.setAttribute("href", filename);
        }
        if (typeof fileref!="undefined") {
           document.getElementsByTagName("head")[0].appendChild(fileref);
        }
      }
      //]]></script>';
    ///


    $html .='
      <script type="text/javascript">// <![CDATA[

      var API_KEY = \''. $apiKey .'\';
      var userId = \''.$userId.'\';
      var photosetId = \''. $photosetId .'\';
      var $slides = jQuery("#'.$slidesId.'");
      var showtitle='.(!empty($title)?'true;':"false").';
      var showdesc='.(!empty($description)?'true;':"false").';
      var request = {};

      if (photosetId) {
        request = {method: "flickr.photosets.getPhotos",
                   api_key: API_KEY,
                   photoset_id: photosetId,
                   extras: "url_o, description",
                   format: "json"
                   };
      }else{
        ////fallback to search by user
        request = {method: "flickr.photos.search",
                   api_key: API_KEY,
                   user_id: userId,
                   content_type: 1,
                   extras: "url_o, description",
                   format: "json"
                   };
      }

      jQuery.ajax({type: "GET",url: "https://api.flickr.com/services/rest/?jsoncallback=?",
                      dataType: "json",
                      async: false,
                      data: request,
            })
            .done(function(data) {

                      if (photosetId) {
                        photos = data.photoset.photo;
                      } else {
                        photos = data.photos.photo;
                      }

                      jQuery.each(photos, function(i,_photo) {

                              getFlickrFotoByPhotoId( _photo, $slides.width(), API_KEY, $slides );
                      });
            });



      jQuery(window).load(function() {

        $slides.camera({
           alignmen: "topCenter",
           height: "56.5656%",
           //height: "66.6144%",
           minHeight: "134px",
           loader : false,
           pagination: true,
           fx: "simpleFade",
           navigationHover: true,
           navigation: true,
           pagination:false,
           thumbnails: false,
           playPause: false,
           '.$paramsstr.'
         });

      });
      // ]]></script>
    ';

    return $html;
  }

}
