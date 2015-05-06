#MVentory_UIEnquireButton

##Features

* Adds Enquire Now button instead Add to cart one.

##License

This extension is subject to
[Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free
waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may
not distribute the modified material. Please, contribute your changes back
to the [project on Github](https://github.com/mVentory/MVentory_UI).

##About the extension

On design tab in category/product editor put following XML snippet into
Custom Layout Update field to replace Add to cart button with Enquire Now one.

```xml
<reference name="product.info.addtocart">
  <action method="setTemplate"><tpl>uienquirebutton/enquire.phtml</tpl></action>
</reference>
```

Set Apply To Products to Yes in category editor.

##Help and support

Please, contact us on info@mventory.com if you need help installing
and configuring it.
