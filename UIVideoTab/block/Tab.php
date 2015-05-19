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
 * @package MVentory/UIVideoTab
 * @copyright Copyright (c) 2015 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Product video block
 *
 * @package MVentory/UIVideoTab
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */

class MVentory_UIVideoTab_Block_Tab extends Mage_Core_Block_Template
{
  /**
   * Current product
   *
   * @var Mage_Catalog_Model_Product
   */
  protected $_product = null;

  /**
   * Return current product
   *
   * @return Mage_Catalog_Model_Product
   *   Current product
   */
  protected function _getProduct () {
    if ($this->_product)
      return $this->_product;

    return $this->_product = Mage::registry('product');
  }

  /**
   * Return value of video attribute in current product
   *
   * @return string|null
   *   Value of video attribute
   */
  protected function _getVideo () {
    if (!$attr = $this['video_attr'])
      return;

    return trim(
      $this
        ->_getProduct()
        ->getData($attr)
    );
  }

  /**
   * Add self to the specified group of parent block
   *
   * This method is redefined to ommit video tabs for products which don;t have
   * value in video attribute
   *
   * @param string $groupName
   *   Name of group
   *
   * @return MVentory_UIVideoTab_Block_Tab
   *   Instance of this class
   */
  public function addToParentGroup ($groupName) {
    if ($this->_getVideo())
      parent::addToParentGroup($groupName);

    return $this;
  }
}