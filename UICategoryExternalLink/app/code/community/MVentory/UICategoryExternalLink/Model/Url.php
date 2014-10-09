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
class MVentory_UICategoryExternalLink_Model_Url extends Mage_Catalog_Model_Url {
  
  /**
   * Get unique category request path
   *
   * @param Varien_Object $category
   * @param string $parentPath
   * @return string
   */
  public function getCategoryRequestPath($category, $parentPath)
  {
      $storeId = $category->getStoreId();
      $idPath  = $this->generatePath('id', null, $category);
      $suffix  = $this->getCategoryUrlSuffix($storeId);
  
      if (isset($this->_rewrites[$idPath])) {
          $this->_rewrite = $this->_rewrites[$idPath];
          $existingRequestPath = $this->_rewrites[$idPath]->getRequestPath();
      }
  
      if ($category->getUrlKey() == '') {
          $urlKey = $this->getCategoryModel()->formatUrlKey($category->getName());
      }
      else {
          $urlKey = $this->getCategoryModel()->formatUrlKey($category->getUrlKey());
      }
  
      $categoryUrlSuffix = $this->getCategoryUrlSuffix($category->getStoreId());
      if (null === $parentPath) {
          $parentPath = $this->getResource()->getCategoryParentPath($category);
      }
      elseif ($parentPath == '/') {
          $parentPath = '';
      }
      $parentPath = Mage::helper('catalog/category')->getCategoryUrlPath($parentPath,
                                                                         true, $category->getStoreId());
      
      
      

      /******* if link begins with http or with / then do not append suffix ******/
      if(substr($urlKey, 0, 4) == "http"){
          $requestPath = $urlKey;
      }else if(substr($urlKey, 0, 1) == "/"){
          
          $requestPath = $urlKey;
      }else{
          $requestPath = $parentPath . $urlKey . $categoryUrlSuffix;
      }
      /****/
  
  
      if (isset($existingRequestPath) && $existingRequestPath == $requestPath . $suffix) {
          return $existingRequestPath;
      }
  
      if ($this->_deleteOldTargetPath($requestPath, $idPath, $storeId)) {
          return $requestPath;
      }
  
      return $this->getUnusedPath($category->getStoreId(), $requestPath,
                                  $this->generatePath('id', null, $category)
      );
  }
  
  
  
  
  
  
}