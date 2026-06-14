(function() {
  'use strict';

  // 滚动时导航栏效果（预留扩展）
  var ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        ticking = false;
      });
      ticking = true;
    }
  });

})();
