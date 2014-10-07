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
* @copyright Copyright (c) 2014 mVentory Ltd. (http://mventory.com)
* @license http://creativecommons.org/licenses/by-nc-nd/4.0/
*/
class MVentory_UICategoryExternalLink_Block_Html_Topmenu extends Mage_Page_Block_Html_Topmenu {
   
   
   /**
     * Recursively generates top menu html from data that is specified in $menuTree
     *
     * @param Varien_Data_Tree_Node $menuTree
     * @param string $childrenWrapClass
     * @return string
     * @deprecated since 1.8.2.0 use child block catalog.topnav.renderer instead
     */
    protected function _getHtml(Varien_Data_Tree_Node $menuTree, $childrenWrapClass)
    {
        $html = '';

        $children = $menuTree->getChildren();
        $parentLevel = $menuTree->getLevel();
        $childLevel = is_null($parentLevel) ? 0 : $parentLevel + 1;

        $counter = 1;
        $childrenCount = $children->count();

        $parentPositionClass = $menuTree->getPositionClass();
        $itemPositionClassPrefix = $parentPositionClass ? $parentPositionClass . '-' : 'nav-';

        foreach ($children as $child) {

            $child->setLevel($childLevel);
            $child->setIsFirst($counter == 1);
            $child->setIsLast($counter == $childrenCount);
            $child->setPositionClass($itemPositionClassPrefix . $counter);

            $outermostClassCode = '';
            $outermostClass = $menuTree->getOutermostClass();

            if ($childLevel == 0 && $outermostClass) {
                $outermostClassCode = ' class="' . $outermostClass . '" ';
                $child->setClass($outermostClass);
            }


/**** is this a link to our domain name? ****/
$pos = strpos($child->getUrl(), $_SERVER['HTTP_HOST']);


            $html .= '<li ' . $this->_getRenderedMenuItemAttributes($child) . '>';
            $html .= '<a href="' . $child->getUrl() . '" ' . $outermostClassCode .
                      (($pos === false)?' target="_blank" ':'').
                      '><span>'
                . $this->escapeHtml($child->getName()) . '</span></a>';

            if ($child->hasChildren()) {
                if (!empty($childrenWrapClass)) {
                    $html .= '<div class="' . $childrenWrapClass . '">';
                }
                $html .= '<ul class="level' . $childLevel . '">';
                $html .= $this->_getHtml($child, $childrenWrapClass);
                $html .= '</ul>';

                if (!empty($childrenWrapClass)) {
                    $html .= '</div>';
                }
            }
            $html .= '</li>';

            $counter++;
        }

        return $html;
     }
    
    }
  