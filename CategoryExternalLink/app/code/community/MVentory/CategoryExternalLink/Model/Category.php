<?php

class MVentory_CategoryExternalLink_Model_Category extends Mage_Catalog_Model_Category {


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