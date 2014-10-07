<?php
/**
* NOTICE OF LICENSE
*
* This source file is subject to the Creative Commons License BY-NC-ND.
* NonCommercial  You may not use the material for commercial purposes.
* NoDerivatives  If you remix, transform, or build upon the material,
* you may not distribute the modified material.
* See the full license at http://creativecommons.org/licenses/by-nc-nd/4.0/
*
* See http://mventory.com/legal/licensing/ for other licensing options.
*
* @package MVentory/UICategoryExternalLink
* @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
* @license http://creativecommons.org/licenses/by-nc-nd/4.0/
*/
class MVentory_UICategoryExternalLink_Model_Category_Url extends Mage_Catalog_Model_Category_Url {

    /**
     * Returns category URL by which it can be accessed
     * @param Mage_Catalog_Model_Category $category
     * @return string
     */
    protected function _getDirectUrl(Mage_Catalog_Model_Category $category)
    {
      
      #Mage::log("reqPath:".$category->getRequestPath());
      
      ///if the request string begins with http, then do not call the core_url model methods.
      $requestPath = $category->getRequestPath();
      if(substr($requestPath, 0, 4) === "http"){
          return $requestPath;
      }
      
      ///if the request string begins with /, interpret this is a relative url.
      if(substr($requestPath, 0, 1) === "/"){
          
          return Mage::getBaseUrl().$requestPath;
      }
      
      return $this->getUrlInstance()->getDirectUrl($category->getRequestPath());
    }
    
}