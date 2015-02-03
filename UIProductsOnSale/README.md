#MVentory_UIProductsOnSale

##Features

* Display specified number of products on sale via block.
* Display all products on sale in category view with layer filters.

##License

This extension is subject to
[Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free
waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may
not distribute the modified material. Please, contribute your changes back
to the [project on Github](https://github.com/mVentory/MVentory_UI).

## Displaying discounted products using a block

Use the layout XML file of your theme (see _layout_ directory in the theme)
or call it in any CMS page/block.

The block has 2 parameters:

* Products count - Number of products to display, 6 by default
* `cache_lifetime` - Caching time, 86400 (s) by default

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

Example of displaying discounted products via a CMS page/block (put it in the content section of the CMS page/block):

```
<h3>Products On Sale</h3>

{{block type="uiproductsonsale/list" template="uiproductsonsale/list.phtml" products_count="2" cache_lifetime="9000"}}
```

Note that `uiproductsonsale/list.phtml` doesn't come as part of this extension. You need to create your own phtml file for that, but we provided a generic example below.

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

## Displaying discounted products in category view

Go to _http://yoursite.com/productsonsale/category/all_ to see all discounted products in category view. 
Since no category is involved there the products are displayed under the default category, which is at the very top your category tree. Consder making it an anchor to display layered navigation filters with the discounted products.

You can create a URL rewrite rule for an SEO-friendly link. Go to -Admin -> Catalog
-> URL Rewrite Management-, click on _Add URL Rewrite_, choose Custom option for
_Create URL Rewrite_. You can use this sample set of data:

* ID Path: all-products-on-discount
* Request Path: products-on-discount.html
* Target Path: productsonsale/category/all
* Redirect: No
