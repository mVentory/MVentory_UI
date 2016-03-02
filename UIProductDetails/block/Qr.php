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
 * @package MVentory/UIProductDetails
 * @copyright Copyright (c) 2016 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Product attributes block
 *
 * @package MVentory/UIProductDetails
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */
class MVentory_UIProductDetails_Block_Qr
  extends Mage_Core_Block_Template {

  protected function _construct () {
    $this->setData('cache_lifetime', 86400);
  }

  public function getCacheKeyInfo () {
    $key = parent::getCacheKeyInfo();

    $key[] = Mage::helper('core/url')->getCurrentUrl();

    return $key;
  }

  protected function _beforeToHtml () {
    $url = ($product = Mage::registry('product'))
             ? $this->getUrl('', array('sku' => $product->getSku()))
               : Mage::helper('core/url')->getCurrentUrl();

    ($width = $this->getData('width')) || ($width = 100);
      ($height = $this->getData('height')) || ($height = 100);

      $url = 'https://chart.googleapis.com/chart?cht=qr&chld=M|1&chs='
             . $width
             . 'x'
             . $height
             . '&chl='
             . urlencode(substr($url, 0, -1));

      $this->setData('qr_url', $url);

    return parent::_beforeToHtml();
  }
}
