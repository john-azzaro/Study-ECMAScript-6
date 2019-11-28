"use strict";


function imageGallery() {                                                    // When imageGallery runs...
  const highlight = document.querySelector('.gallery-highlight');            // Select .gallery-highlight as highlight...gallery-highlight
  const previews = document.querySelectorAll('.gallery-preview img');        // Select all images from gallery previews

  previews.forEach(function(preview) {                                       // For each image in the gallery previews
    preview.addEventListener('click', function(event) {                      // add an event listener that on click...
      const smallSrc = this.src;                                             // returns the value of the src attribute of the image (i.e. )
      const bigSrc = smallSrc.replace('small', 'large');                     // bigSrc is simply replacing the "small" part of the src text with "large" 
      highlight.src = bigSrc;                                                // and finally, the large highlight picture at the top of the previews source will be the bigSrc!      
      previews.forEach(function(preview) {                                   // And for each preview remove the active stylization
        preview.classList.remove('city-active')
      });
      preview.classList.add('city-active')                                   // And add the city active class.
    });
  });
}

function initialize() {                                                     // On intialization...
  imageGallery();                                                           // Run imageGallery
}

initialize();                                                              // Initialize app