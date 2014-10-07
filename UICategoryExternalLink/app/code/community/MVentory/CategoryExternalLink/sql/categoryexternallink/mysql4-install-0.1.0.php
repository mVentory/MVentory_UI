<?php
 
##$installer = $this;
##$installer->startSetup();
## 
##$entityTypeId = $installer->getEntityTypeId('catalog_category');
##$attributeSetId = $installer->getDefaultAttributeSetId($entityTypeId);
##$attributeGroupId = $installer->getDefaultAttributeGroupId($entityTypeId, $attributeSetId);
## 
##
##$this->addAttribute(Mage_Catalog_Model_Category::ENTITY, 'mventory_external_link', array(
##    'group'         => 'General Information',
##    'input'         => 'text',
##    'type'          => 'varchar',
##    'label'         => 'External Link',
##    'backend'       => '',
##    'visible'       => true,
##    'required'      => false,
##    'visible_on_front' => true,
##    'global'        => Mage_Catalog_Model_Resource_Eav_Attribute::SCOPE_STORE,
##));
##
##
## 
##$installer->endSetup();