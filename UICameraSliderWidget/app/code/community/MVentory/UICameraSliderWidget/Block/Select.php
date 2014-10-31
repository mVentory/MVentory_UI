<?php


class MVentory_UICameraSliderWidget_Block_Select extends Mage_Adminhtml_Block_Widget_Form_Renderer_Fieldset_Element {
  
  public function render(Varien_Data_Form_Element_Abstract $element){
      $e = new Varien_Data_Form_Element_Select($element->getData());

      $e->setId($element->getId());
      $e->setForm($element->getForm());
      $e->setValue(  $element->getValue() );
      
      $html='<script type="text/javascript">
          
          var cb = function(){ 
            val = $("'. $element->getHtmlId() .'").value;
            if(val == "photoset_id"){
              $$("#widget_options_form input[name=parameters[photoset_id]]").first().enable();
              $$("#widget_options_form input[name=parameters[photoset_id]]").first().up("tr").show();
              $$("#widget_options_form input[name=parameters[user_id]]").first().disable();
              $$("#widget_options_form input[name=parameters[user_id]]").first().up("tr").hide();
            }else if(val == "user_id"){
              $$("#widget_options_form input[name=parameters[user_id]]").first().enable();
              $$("#widget_options_form input[name=parameters[user_id]]").first().up("tr").show();
              $$("#widget_options_form input[name=parameters[photoset_id]]").first().disable();
              $$("#widget_options_form input[name=parameters[photoset_id]]").first().up("tr").hide();             
            }                    
          };
          
          ///on load
          (function(){
                  if(document.loaded){
                    cb();
                  }else{
                    document.observe("dom:loaded", cb);
                  }
          })();

          $("'.$element->getHtmlId().'").observe("change", function() {
          
                cb();
          });
        </script>';
      $html .= parent::render($e);
      
      
      return $html;
  }
  
}