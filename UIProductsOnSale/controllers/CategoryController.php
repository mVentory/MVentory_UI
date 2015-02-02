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
 * Category controller
 *
 * @package MVentory/UIProductsOnSale
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */

class MVentory_UIProductsOnSale_CategoryController
	extends Mage_Core_Controller_Front_Action
{
  /**
   * All action
   *
   * @return MVentory_UIProductsOnSale_CategoryController
   *   INstance of this class
   */
  public function allAction () {
    $params = array(
      'id' => Mage::app()->getStore()->getRootCategoryId(),
      'on-discount' => 1
    );

    $this->_forward('view', 'category', 'catalog', $params);

    return $this;
  }
}