#MVentory_UIProductDetails

##Features

* Display values of dropdown/multiselect attributes as link to category filters
on product page
* Round value of weight attribute or hide it if it's zero
* Wrap value if SKU attribute with link to QR code for product
* Gives ability to add a QR code anywhere on the product page

##Instructions

Product attribute values in product collateral are updated automatically.

To add a QR code somewhere on product page, add the following line into an appropriate
place in your theme's local.xml, e.g. `<reference name="product.info">`:
```
<block type="uiproductdetails/qr" name="product.qr" template="mventory/uiproductdetails/qr.phtml" />
```
and then insert `<?php echo $this->getChildHtml('product.qr'); ?>` into your theme's product page
template, e.g. `catalog/product/view.phtml`. Finally, style the QR code image as required.

##License

This extension is subject to
[Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free
waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may
not distribute the modified material. Please, contribute your changes back
to the [project on Github](https://github.com/mVentory/MVentory_UI).

##About the extension

This small extension modifies the way how Magento displays table of product
attributes and their values on product page. For all dropdown and multiselect
attributes it outputs values as links to category filters.


##Help and support

Please, contact us on info@mventory.com if you need help installing
and configuring it.
