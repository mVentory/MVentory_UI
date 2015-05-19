#MVentory_UIVideoTab

##Features

Adds Video tab on product page if product contains video ID in the specified
attribute

##License

This extension is subject to
[Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free
waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may
not distribute the modified material. Please, contribute your changes back
to the [project on Github](https://github.com/mVentory/MVentory_UI).

##Adding video block manually

Add following code to layout file of product page in your theme:


```xml
<catalog_product_view>
  ...

  <reference name="head">
    <action method="addCss"><stylesheet>uivideotab/styles.css</stylesheet></action>
  </reference>

  <block type="uivideotab/tab" name="product.video" as="product_video" template="uivideotab/tab.phtml">
    <action method="setVideoAttr"><attr>prod_video</attr></action>
  </block>

  ...
</catalog_product_view>
```

You can specify your own template via `template` attribute of the _block_ tag.

##Help and support

Please, contact us on info@mventory.com if you need help installing
and configuring it.
