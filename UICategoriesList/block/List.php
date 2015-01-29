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
 * @package MVentory/UICategoriesList
 * @copyright Copyright (c) 2015 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Block for displaying categories
 *
 * @package MVentory/UICategoriesList
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */
class MVentory_UICategoriesList_Block_List
  extends Mage_Core_Block_Template
{
  /**
   * Constructor
   */
  protected function _construct () {
    parent::_construct();

    $this->_imageBaseUrl = Mage::getBaseUrl('media') . 'catalog/category/';

    $this->addData(array(
      'cache_lifetime' => 86400,
      'cache_tags' => array(Mage_Catalog_Model_Category::CACHE_TAG),
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
      'CATALOG_CATEGORIES_LIST',
      Mage::app()->getStore()->getId(),
      Mage::getDesign()->getPackageName(),
      Mage::getDesign()->getTheme('template'),
      Mage::getSingleton('customer/session')->getCustomerGroupId(),
      'template' => $this->getTemplate(),
    );
  }

  /**
   * Get prepared product collection
   *
   * @return Mage_Catalog_Model_Resource_Product_Collection
   *   Prepared collection
   */
  public function getCategoriesCollection () {
    $collection = $this->getData('categories_collection');

    if ($collection)
      return $collection;

    $this->setData('categories_collection', false);

    if (!$id = (int) $this->getCategoryId())
      return false;

    $category = Mage::getModel('catalog/category')->load($id);

    if (!$category)
      return false;

    $collection = $category
      ->getCollection()
      ->addAttributeToSelect('url_key')
      ->addAttributeToSelect('name')
      ->addAttributeToSelect('image')
      ->addAttributeToSelect('thumbnail')
      //->addAttributeToSelect('all_children')
      //->addAttributeToSelect('is_anchor')
      ->addAttributeToFilter('is_active', 1)
      ->addAttributeToFilter('parent_id', $id)
      ->setOrder('position', Varien_Db_Select::SQL_ASC)
      ->joinUrlRewrite();

    $this
      ->setData('category', $category)
      ->setData('categories_collection', $collection);

    return $collection;
  }

  protected function _getImageUrl ($image) {
    return $this->_imageBaseUrl . $image;
  }
}
