AFRAME.registerComponent('control-panel-toggle', {
  init: function () {
    var controlPanel;
    var el = this.el;
    controlPanel = document.getElementById('control-panel');
    el.addEventListener('menudown', () => {
      controlPanel.object3D.visible = !controlPanel.object3D.visible;
    });
  }
});
