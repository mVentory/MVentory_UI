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

$installer->startSetup();

$this->addAttribute(
  Mage_Catalog_Model_Category::ENTITY,
  'mventory_external_link',
  array(
    'group' => 'General Information',
    'input' => 'text',
    'type' => 'varchar',
    'label' => 'External Link',
    'backend' => '',
    'visible' => true,
    'required' => false,
    'visible_on_front' => true,
    'global' => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_STORE,
  )
);

$installer->endSetup();
