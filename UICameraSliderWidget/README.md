#MVentory_UICameraSliderWidget

##Features

* Adds a the ability for the user to place slider widgets on cms pages that use Flickr photosets as the source for images.

##Installation

1. Upload files to your magento. There is also a modman file if you want to use modman.
1.1 If you use modman, just upload the files to  .modman/UICameraSliderWidget/ and then issue a
`$./modman deploy UICameraSliderWidget`.
2. Go to backend System > Configuration > Camera Slider Widget, and write your Flickr API KEY. Select enable if not already so.
3. Go to CMS > Pages > Home page > Content and click the insert widget button. A dialog will appear, select "Camera slider widget" from the list.
You can then enter your desired photosetId (from Flickr), or your userId (also from Flickr) and finally click Insert Widget. You cannot add both a photosetId and a userId at the same time. If viewing the Content tab in text mode you should now see a line like {{widget type="camerasliderwidget/slider" photoset_id="721576....."}}. Save the page.
4. Go to the homepage of your site, the slider should now be visible.
5. If you want to pass camera.js parameters add them as comma separated values. Eg: alignment: 'topCenter', height: '66.34%', minHeight: '350px', title:'true', description:'true' and use single quotes. You can pass title:'true' or description:'true' to make the titles/descs of the images visible. If the picture description contains an url, that url will be set for that banner.
6. If you want you can build the html for the element containing the slider, and then pass a ` slides_id="coolslider" `  where "coolslider" is the id of your slider div element.

![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/UICameraSliderWidget/screenshot1.png)
![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/UICameraSliderWidget/screenshot2.png)
![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/UICameraSliderWidget/screenshot3.png)
![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/UICameraSliderWidget/screenshot4.png)
![alt tag](https://raw.githubusercontent.com/mVentory/MVentory_UI/master/UICameraSliderWidget/screenshot5.png)

##License

This extension is subject to [Creative Commons License BY-NC-ND](http://creativecommons.org/licenses/by-nc-nd/4.0/).
* NonCommercial — You may use it for commercial purposes after requesting a free waiver.
* NoDerivatives — If you remix, transform, or build upon the material, you may not distribute the modified material. Please, contribute your changes back to the [project on Github](https://github.com/mVentory/MVentory_UI).


##Help and support

Please, contact us on info@mventory.com if you need help installing and configuring it.


##Technical details

#### Listing descriptions

This extension uses the camera.js jQuery addon from [Pixedelic](http://www.pixedelic.com/plugins/camera/). Dependencies are jQuery, Easying jquery plugin, jquery.mobile.js. 
Uses the Flickr API to get photos from a user's photoset, or by user ID. We try to request versions of the pictures that are closer to the slider size; this is to prevent requesting the original photo which might be even a few MB in size.
Parameters can be passed to the Slider block when the widget is inserted in a CMS page, after that the rendering is very simple.
The user can write http(s) adresses in the picture description field on Flickr, and the last one in the description will be used as the destination address of the respective slide.