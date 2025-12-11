// Logo Wall Module - Multi-row carousel
(function() {
  function initLogoWall() {
    var wallWrap = document.querySelector('.logos-wall-wrap.carousel-park');
    if (!wallWrap) return;
    
    var numRows = parseInt(wallWrap.getAttribute('data-rows')) || 2;
    var sourceItems = wallWrap.querySelectorAll('.logo-item-source');
    var carousels = wallWrap.querySelectorAll('.carousel');
    
    if (sourceItems.length === 0 || carousels.length === 0) return;
    
    // Hide carousels beyond numRows
    carousels.forEach(function(carousel, index) {
      var rowNum = parseInt(carousel.getAttribute('data-row')) || (index + 1);
      if (rowNum > numRows) {
        carousel.style.display = 'none';
        return;
      }
      carousel.style.display = 'flex';
    });
    
    // Distribute logos to rows
    carousels.forEach(function(carousel) {
      var rowNum = parseInt(carousel.getAttribute('data-row')) || 1;
      if (rowNum > numRows) return;
      
      carousel.innerHTML = ''; // Clear existing content
      
      // First pass: add logos for this row
      sourceItems.forEach(function(item, index) {
        if (index % numRows === (rowNum - 1)) {
          var logoItem = item.cloneNode(true);
          logoItem.classList.remove('logo-item-source');
          logoItem.classList.add('logo-item');
          logoItem.removeAttribute('data-index');
          logoItem.style.display = '';
          carousel.appendChild(logoItem);
        }
      });
      
      // Second pass: duplicate for seamless loop
      sourceItems.forEach(function(item, index) {
        if (index % numRows === (rowNum - 1)) {
          var logoItem = item.cloneNode(true);
          logoItem.classList.remove('logo-item-source');
          logoItem.classList.add('logo-item');
          logoItem.removeAttribute('data-index');
          logoItem.style.display = '';
          carousel.appendChild(logoItem);
        }
      });
    });
    
    // Remove source items
    sourceItems.forEach(function(item) {
      item.remove();
    });
  }
  
  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogoWall);
  } else {
    initLogoWall();
  }
})();
