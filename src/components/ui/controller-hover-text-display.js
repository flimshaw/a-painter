AFRAME.registerComponent('controller-hover-text-display', {
  init: function () {
    var el = this.el;

    el.setAttribute('text', {align: 'center'});
    el.getObject3D('text').position.y = 0.1;
    el.getObject3D('text').position.z = -0.3;

    el.addEventListener('mouseenter', evt => {
      el.setAttribute('text', 'value',
                      evt.detail.intersectedEl.getAttribute('hover-text') || '');
      el.getObject3D('text').position.y = 0.1;
      el.getObject3D('text').position.z = -0.3;
    });

    el.addEventListener('mouseleave', evt => {
      el.setAttribute('text', 'value', '');
      el.getObject3D('text').position.y = 0.1;
      el.getObject3D('text').position.z = -0.3;
    });
  }
});
