$(document).ready(function() {
  
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, 

        duration: 300, 
        easing: 'ease-in-out', 

        
        
        
        opener: function(openerElement) {
        
        
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };
  
  
  magnifPopup();

});