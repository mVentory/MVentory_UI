#MVentory_UIProductsOnSale

##Features

* Display specified number of products on sale via block
* Display all products on sale in category view

##License

This extension is subject to
[Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free
waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may
not distribute the modified material. Please, contribute your changes back
to the [project on Github](https://github.com/mVentory/MVentory_UI).

##About the extension

This small extension allows to display list of products on sale using block.
Number of products can be set via parameter. Add uiproductsonsale/list block
to layout file and specify template to display products.

Visit `productsonsale/category/all` to see all products on sale in category
view.

Make stores's default category as anchor to allow category layered filtering
for products on sale

You can add URL rewrite to make link to all products on sale look better,
e.g `products-on-discount.html`

## Using

### Block

Add it via layout XML file of your theme (see _layout_ directory in the theme)
or call it in any CMS page/block.

The block has 2 parameters:

* Products count - Number of products to display, by default 6
* `cache_lifetime` - Caching time, by default 86400 seconds

Example for layout XML file:

```
<reference name="content">
  <block type="uiproductsonsale/list" name="products.onsale" template="uiproductsonsale/list.phtml">
    <!-- Number of products to display -->
    <action method="setProductsCount"><count>8</count></action>
    <!-- Cacihing time inseconds -->
    <action method="setCacheLifetime"><lifetime>9000</lifetime></action>
  </block>
</reference>
```

Example of calling via CMS page/block (put it in the content of CMS page/block):

```
<h3>Products On Sale</h3>

{{block type="uiproductsonsale/list" template="uiproductsonsale/list.phtml" products_count="2" cache_lifetime="9000"}}
```

The extension doesn't install default template to output the block. Example of
simple template:

```
<?php

$_productCollection = $this->getProductCollection()

?>

<?php if ($_productCollection->count()): ?>

<?php

$_helper = $this->helper('catalog/image');
$_imgSize = 207;

?>

<ul class="products-grid">
  <?php foreach ($_productCollection as $_product): ?>

  <?php

  $_name = $this->htmlEscape($_product->getName());
  $_label = $this->htmlEscape($this->getImageLabel($_product, 'small_image'));
  $_url = $_product->getProductUrl();

  ?>

  <li>
    <a href="<?php echo $_url ?>" title="<?php echo $_label; ?>" class="product-image">
      <img src="<?php echo $_helper->init($_product, 'small_image')->resize($_imgSize); ?>" alt="<?php echo $_label; ?>" title="<?php echo $_label; ?>" />
    </a>

    <div class="product-info">
      <h3 class="product-name">
        <a href="<?php echo $_url; ?>" title="<?php echo $_name; ?>"><?php echo $_name; ?></a>
      </h3>

      <?php echo $this->getPriceHtml($_product, true); ?>
    </div>
  </li>

  <?php endforeach; ?>
</ul>

<?php endif ?>
```

### Products on discount in category view

Visit _http://yoursite.com/productsonsale/category/all_ to display all products
on discount in category view. You can use category layered filters there
if default category is anchor.

Create URL rewrite for better link. Go to -Admin -> Catalog
-> URL Rewrite Management-, click on _Add URL Rewrite_, choise Custom for
_Create URL Rewrite). Fill following fields:

* ID Path: all-products-on-discount
* Request Path: products-on-discount.html
* Target Path: productsonsale/category/all
* Redirect: No

Click on Save to save new rule.

##Help and support

Please, contact us on info@mventory.com if you need help installing
and configuring it.
