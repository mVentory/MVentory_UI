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
 * Helper
 *
 * @package MVentory/UIProductsOnSale
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */

class MVentory_UIProductsOnSale_Helper_Data extends Mage_Core_Helper_Abstract
{
  /**
   * Check if on discount filter is enabled
   *
   * @return boolean
   *   Status of on discount filter
   */
  public function isOnDiscountFilter () {
    $param = Mage::app()
      ->getRequest()
      ->getParam('on-discount');

    return $param == 1;
  }

  /**
   * Apply on discount filter to the supplied product collection
   *
   * @param Mage_Catalog_Model_Resource_Product_Collection $collection
   *   Product collection
   *
   * @return MVentory_UIProductsOnSale_Helper_Data
   *   Instance of this class
   */
  public function applyOnDiscountFilter ($collection) {
    $now = Mage::getModel('core/date')->date();

    $collection
      ->addAttributeToFilter('special_price', array('notnull' => true))
      ->addAttributeToFilter(
          'special_from_date',
          array(array('lteq' => $now), array('null' => true))
        )
      ->addAttributeToFilter(
          'special_to_date',
          array(array('gt' => $now), array('null' => true))
        );

    return $this;
  }
}