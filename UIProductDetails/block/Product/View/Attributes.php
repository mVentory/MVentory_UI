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
 * @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
 * @license http://creativecommons.org/licenses/by-nc-nd/4.0/
 */

/**
 * Product attributes block
 *
 * @package MVentory/UIProductDetails
 * @author Anatoly A. Kazantsev <anatoly@mventory.com>
 */
class MVentory_UIProductDetails_Block_Product_View_Attributes
 extends Mage_Catalog_Block_Product_View_Attributes {

  /**
   * Outputs options of attributes with select or multiselect input type as
   * links to filters in category layered navaigation
   *
   * $excludeAttr is optional array of attribute codes to
   * exclude them from additional data array
   *
   * @param array $excludeAttr
   * @param bool $html Enable or disable links to category filters
   * @return array
   */
  public function getAdditionalData (array $exclude = array(), $html = true) {
    $helper = Mage::helper('mventory/product');

    $data = array();

    $product = $this->getProduct();

    if ($html)
      if (!$product->getData('mv_created_date'))
        $product->setData('mv_created_date', $product->getData('created_at'));

    $category = $helper->getCategory($product);
    $attributes = $product->getAttributes();

    if ($category) {
      $urlInstance = $category
        ->getUrlModel()
        ->getUrlInstance();

      //Remember query parameters to re-store them at the end
      $queryParams = $urlInstance->getQueryParams();
    }

    $title = $helper->__('View more of this type');

    foreach ($attributes as $attribute) {
      $code = $attribute->getAttributeCode();

      if (!$attribute->getIsVisibleOnFront() || in_array($code, $exclude))
        continue;

      $values = $product->getData($code);

      if ($values === null || $values === '' || strpos($values, '~') === 0)
        continue;

      $input = $attribute->getFrontendInput();
      $isSelect = $input == 'select' || $input == 'multiselect';

      if ($isSelect) {
        $values = explode(',', $values);

        $source = $attribute->getSource();

        foreach ($values as $value)
          $_values[$value] = $source->getOptionText($value);

        $values = $_values;

        unset($_values);
      } else
        $values = (array) $attribute
                            ->getFrontend()
                            ->getValue($product);

      foreach ($values as $i => $value) {
        $_value = strtolower(str_replace(' ', '', $value));

        if (!$_value || $_value == 'n/a' || $_value == 'n\a' || $_value == '~')
          unset($values[$i]);
      }

      if (!count($values))
        continue;

      if ($category
          && $attribute->getIsHtmlAllowedOnFront()
          && $isSelect
          && $html) {

        //Make a copy of original query parameters
        $params = $queryParams;

        foreach ($values as $i => &$value) {
          $params[$code] = $i;

          $urlInstance
            ->unsetData('query_params')
            ->setQueryParams($params);

          $value = '<a href="' . $category->unsetData('url')->getUrl() . '" '
                    . 'title="' . $title . '">'
                    . $value
                    . '</a>';
        }

        unset($value);
      }

      if ($input == 'price') {
        foreach ($values as $i => &$value)
          $value = Mage::app()->getStore()->convertPrice($value, true);

        unset($value);
      }

      $data[$code] = array(
        'label' => trim($attribute->getStoreLabel()),
        'value' => implode(', ', $values),
        'code'  => $code
      );
    }

    //Re-store original query parameters and reset cached generated URL
    //to produce correct URL from original query params on the next call of
    //getUrl() method from category model
    if ($category) {
      $urlInstance
        ->unsetData('query_params')
        ->setQueryParams($queryParams);

      $category->unsetData('url');
    }

    //Round value of weight attribute or unset if it's 0
    if (isset($data['weight'])) {
      if ($data['weight']['value'] == 0)
        unset($data['weight']);
      else if (is_numeric($data['weight']['value']))
        $data['weight']['value'] = round($data['weight']['value'], 2);
    }

    if ($html) {
      if (isset($data['sku'])) {
        $url = $this->getUrl('', array('sku' => $data['sku']['value']));

        $qrUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl='
                 . urlencode(substr($url, 0, -1));

        $data['sku']['value']
          = '<a href="' . $qrUrl . '">' . $data['sku']['value'] . '</a>';
      }
    }

    return $data;
  }
}
