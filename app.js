"use strict";


function imageGallery() {                                                    // When imageGallery runs...
  const highlight = document.querySelector('.gallery-highlight');            // Select .gallery-highlight as highlight...gallery-highlight
  const previews = document.querySelectorAll('.gallery-preview img');        // Select all images from gallery previews

  previews.forEach(function(preview) {
    preview.addEventListener('click', function(event) {
      console.log(preview)
    });
  });
}

function initialize() {                                                     // On intialization...
  imageGallery();                                                           // Run imageGallery
}

initialize();                                                              // Initialize app