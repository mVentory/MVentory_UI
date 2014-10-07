<?php

class MVentory_CategoryExternalLink_Model_Category_Url extends Mage_Catalog_Model_Category_Url {

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