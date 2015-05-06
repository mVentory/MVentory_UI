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
 * @package MVentory/UIEnquireButton
 * @copyright Copyright (c) 2015 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Helper
 *
 * @package MVentory/UIEnquireButton
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */

class MVentory_UIEnquireButton_Helper_Data extends Mage_Core_Helper_Abstract
{
  const _TPL_EMAIL_LINK = 'mailto:%s?subject=%s';

  /**
   * Return label for enquire button
   *
   * @return string
   *   Label for enquire button
   */
  public function getLabel () {
    return $this->__('Inquire now');
  }

  /**
   * Return title for enquire button
   *
   * @return string
   *   Title for enquire button
   */
  public function getTitle () {
    return $this->__('Inquire now');
  }

  /**
   * Return email link with email subject for enquire button
   *
   * @param Mage_Catalog_Model_Product $product
   *   Product model to get data for subject of email
   *
   * @return string
   *   Email link for enquire button
   */
  public function getEmailLink ($product) {
    return sprintf(
      self::_TPL_EMAIL_LINK,
      Mage::getStoreConfig('trans_email/ident_general/email'),
      rawurlencode($product->getName() . ', ' . $product->getSku())
    );
  }
}