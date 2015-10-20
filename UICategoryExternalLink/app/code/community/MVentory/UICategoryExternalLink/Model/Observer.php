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
 * @copyright Copyright (c) 2015 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
*/

class MVentory_UICategoryExternalLink_Model_Observer
  extends Mage_Catalog_Model_Observer
{
  protected $isFlatCategories;
  protected $categoryModel;

  public function __construct () {
    $helper = Mage::helper('catalog/category_flat');
    $this->isFlatCategories = $helper->isEnabled() && $helper->isBuilt(true);

    $this->categoryModel = Mage::getModel('catalog/category');
  }

  /**
   * Recursively adds categories to top menu
   *
   * @param Varien_Data_Tree_Node_Collection|array $categories
   * @param Varien_Data_Tree_Node $parentCategoryNode
   * @param Mage_Page_Block_Html_Topmenu $menuBlock
   * @param bool $addTags
   */
  protected function _addCategoriesToMenu ($categories,
                                           $parentCategoryNode,
                                           $menuBlock,
                                           $addTags = false) {

    foreach ($categories as $category) {
      if (!$category->getIsActive())
        continue;

      $id = $category->getId();

      if ($addTags)
        $menuBlock->addModelTags($this->categoryModel->setId($id));

      //Set URL to external one
      $externalUrl = $category['external_url'];
      if ($externalUrl) {
          $category->setData(
            'url',
            $externalUrl[0] === '/'
              ? Mage::app()->getStore()->getBaseUrl() . substr($externalUrl, 1)
              : $externalUrl
          );
      }

      $categoryNode = new Varien_Data_Tree_Node(
        [
          'name' => $category->getName(),
          'id' => 'category-node-' . $id,
          'url' => Mage::helper('catalog/category')->getCategoryUrl($category),
          'is_active' => $this->_isActiveMenuCategory($category)
        ],
        'id',
        $parentCategoryNode->getTree(),
        $parentCategoryNode
      );

      $parentCategoryNode->addChild($categoryNode);

      $this->_addCategoriesToMenu(
        $this->isFlatCategories
          ? (array) $category->getChildrenNodes()
          : $category->getChildren(),
        $categoryNode,
        $menuBlock,
        $addTags
      );
    }
  }
}
