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
 * @package MVentory/UIProductsOnSale
 * @copyright Copyright (c) 2015 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Block for displaying products on sale
 *
 * @package MVentory/UIProductsOnSale
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */
class MVentory_UIProductsOnSale_Block_List
  extends Mage_Catalog_Block_Product_Abstract
{
  protected $_productsCount = null;

  const DEFAULT_PRODUCTS_COUNT = 6;

  /**
   * Initialise block's cache
   */
  protected function _construct () {
    parent::_construct();

    $this
      ->addColumnCountLayoutDepend('two_columns_left', 3)
      ->addColumnCountLayoutDepend('two_columns_right', 3);

    $this->addData(array(
      'cache_lifetime' => 86400,
      'cache_tags' => array(Mage_Catalog_Model_Product::CACHE_TAG),
    ));
  }

  /**
   * Get key pieces for caching block content
   *
   * @return array
   *   Key pieces for caching
   */
  public function getCacheKeyInfo () {
    return array(
      'CATALOG_PRODUCT_ON_SALE',
      Mage::app()->getStore()->getId(),
      Mage::getDesign()->getPackageName(),
      Mage::getDesign()->getTheme('template'),
      Mage::getSingleton('customer/session')->getCustomerGroupId(),
      'template' => $this->getTemplate(),
      $this->getProductsCount()
    );
  }

  /**
   * Get prepared product collection
   *
   * @return Mage_Catalog_Model_Resource_Product_Collection
   *   Prepared collection
   */
  public function getProductCollection () {
    $collection = $this->getData('product_collection');

    if ($collection)
      return $collection;

    $collection = Mage::getResourceModel('catalog/product_collection');
    $collection = $this
      ->_addProductAttributesAndPrices($collection)
      ->addAttributeToFilter(
          'small_image',
          array('nin' => array('no_selection', ''))
        )
      ->setVisibility(
          Mage::getSingleton('catalog/product_visibility')
            ->getVisibleInCatalogIds()
        )
      ->addStoreFilter()
      ->addAttributeToSort('entity_id', 'desc')
      ->setPageSize($this->getProductsCount())
      ->setCurPage(1);

    Mage::helper('uiproductsonsale')->applyOnDiscountFilter($collection);

    $this->setData('product_collection', $collection);

    return $collection;
  }

  /**
   * Set number of products to be displayed at once.
   *
   * @param int $count
   *   Number of products to be displayed at once
   *
   * @return MVentory_UIProductsOnSale_Block_Product_Latest
   *   Instance of this class
   */
  public function setProductsCount ($count) {
    $this->_productsCount = (int) $count;

    return $this;
  }

  /**
   * Get number of products to be displayed at once.
   *
   * @return int
   *   Number of products to be displayed at once
   */
  public function getProductsCount () {
    if (null === $this->_productsCount)
      $this->_productsCount = self::DEFAULT_PRODUCTS_COUNT;

    return $this->_productsCount;
  }
}
