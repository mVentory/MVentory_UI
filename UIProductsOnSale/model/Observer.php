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
 * Event observers
 *
 * @package MVentory/UIProductsOnSale
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */

class MVentory_UIProductsOnSale_Model_Observer
{
  /**
   * Applies on discount filter to category's product collection if it's allowed
   *
   * @param Varien_Event_Observer $observer
   *   Observer object
   *
   * @return MVentory_UIProductsOnSale_Model_Observer
   *   Instance of this class
   */
  public function listOnSaleOnly ($observer) {
    Mage::log(get_class($observer));
    $helper = Mage::helper('uiproductsonsale');

    if (!$helper->isOnDiscountFilter())
      return $this;

    $helper->applyOnDiscountFilter($observer->getCollection());

    return $this;
  }
}