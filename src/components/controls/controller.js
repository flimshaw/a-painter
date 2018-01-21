var handData = {
  right: {hand: 'right', model: false},
  left: {hand: 'left', model: false}
};

AFRAME.registerComponent('controller', {
  schema: {
    hand: {default: 'right'}
  },

  init: function () {
    var el = this.el;
    var data = this.data;

    el.setAttribute('oculus-touch-controls', handData[data.hand]);
    el.setAttribute('vive-controls', handData[data.hand]);
    el.setAttribute('windows-motion-controls', handData[data.hand]);
    el.setAttribute('gearvr-controls', handData[data.hand]);
    el.setAttribute('daydream-controls', handData[data.hand]);
  },

  update: function () {
    var el = this.el;
    var data = this.data;
  }
});
