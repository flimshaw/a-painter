AFRAME.registerComponent('control-panel', {
  init: function () {
    this.el.sceneEl.addEventListener('camerascale', evt => {
      this.el.object3D.scale.set(
        evt.detail.cameraScaleFactor,
        evt.detail.cameraScaleFactor,
        evt.detail.cameraScaleFactor
      );
    });
  }
});
