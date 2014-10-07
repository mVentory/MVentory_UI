
#MVentory_CategoryExternalLink

##Features

* Permit the magento url field of a category to be absolute.

##Installation

1. Upload files to your magento.
2. Go to backend Catalog > Manage Categories, and click on a category to select it. In the "General Information" tab there is a "URL Key" field. You now should be able to type in absolute urls there (http://otherwebsite.com/), hit save. 
3. Go to the website frontend and check that the menu item is now pointing to the external url.

![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/CategoryExternalLink/screenshot1.png)
![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/CategoryExternalLink/screenshot2.png)

##License

This extension is subject to [Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial  You may use it for commercial purposes after requesting a free waiver.
* NoDerivatives  If you remix, transform, or build upon the material, you may not distribute the modified material. Please, contribute your changes back to the [project on Github](https://github.com/mVentory/MVentory_UI).


##Help and support

Please, contact us on info@mventory.com if you need help installing and configuring it.


##Technical details

#### Listing descriptions

Three models are extended/rewritten: Mage_Catalog_Category, Mage_Catalog_Category_Url, Mage_Catalog_Url; and one block: Mage_Page_Html_Topmenu.
An absolute url can now be saved into the url field because we prevent formatUrlKey from stripping away the nonalphanumeric characters.