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
* @package MVentory/UICategoryExternalLink
* @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
* @license http://creativecommons.org/licenses/by-nc-nd/4.0/
*/
class MVentory_UICategoryExternalLink_Model_Category extends Mage_Catalog_Model_Category {


    public function formatUrlKey($str)
    {
        $str = Mage::helper('catalog/product_url')->format($str);
        ///
        ///$urlKey = preg_replace('#[^0-9a-z]+#i', '-', $str);
        ///
          $urlKey = $str;
        $urlKey = strtolower($urlKey);
        $urlKey = trim($urlKey, '-');
        return $urlKey;
    }
  
}