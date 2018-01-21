/* globals AFRAME THREE */
AFRAME.registerComponent('controller-time-controls', {
  schema: {
    active: {type: 'boolean', default: false},
    direction: {type: 'float', default: 0.0},
    warpSpeed: {type: 'float', default: 1.0},
    speed: {type: 'float', default: 1.0}
  },

  init: function () {
    this.handleControlChange = this.handleControlChange.bind(this);
    this.hand = this.el;
    this.hand.addEventListener('axismove', (evt) => {
      this.handleControlChange(evt.detail.axis[1], evt);
    })
  },

  handleControlChange(state, evt) {
    if(this.data.active !== (state !== 0)) {
      this.data.active = state !== 0;
      this.data.direction = -state;
      this.el.setAttribute('time-controls', { direction: this.data.direction } );
    }
  }
});
