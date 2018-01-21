AFRAME.registerComponent('hide-cursor-if-connected', {
  init: function () {
    var el = this.el;
    var cursor = document.getElementById('acursor');
    el.addEventListener('controllerconnected', () => {
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    });
  }
});
