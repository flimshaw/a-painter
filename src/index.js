require('aframe');
// overwrite with the latest Sprite class that fixes a raycasting scale error
THREE.Sprite = require('../vendor/Sprite');
require('../css/main.scss');
// require('./help-ui.js');
require('./components/solar-corona.js');
// require('aframe-extras');
require('aframe-html-shader');
// const x = '5';
//
require('aframe-gearvr-controls-component');
require('aframe-look-at-component');
// AFRAME.registerComponent('fps-look-controls', require('aframe-fps-look-component').component);
//
// // require('aframe-auto-detect-controllers-component');
require('aframe-redux-component');
//
// require('aframe-lod');
// require('aframe-event-set-component');
// require('aframe-animation-component');
// require('aframe-layout-component');
require('aframe-stats-in-vr-component');
require('aframe-mouse-cursor-component');
// AFRAME.registerComponent('fps-look-controls', require('aframe-fps-look-component').component);
//
// require('../vendor/OrbitControls.js');
//
// require('./utils.js');
// // require('./ui2d.js');
//
// // systems
require('./systems/exoplanet.js')
require('./systems/ui.js')
require('./systems/star-detail-ui.js')
require('./systems/star-data.js')
// // require('./systems/effect-system.js')
//
// // reducers
require('./reducers/worldSettings.js');
//
// // components
//
// //// controls
require('./components/controls/gearvr-fly-controls.js');
// require('./components/controls/look-controls-alt.js');
// require('./components/controls/orbit-controls.js');
// require('./components/controls/player-controls.js');
require('./components/controls/time-controls.js');
require('./components/controls/keyboard-time-controls.js');
require('./components/controls/keyboard-click-controls.js');
require('./components/controls/gearvr-time-controls.js');
var GamepadControls = require('aframe-gamepad-controls');
AFRAME.registerComponent('gamepad-controls', GamepadControls);

// require('./components/controls/scale-ui-controls.js');
// require('./components/controls/starfield-controls.js');
//
//
// //// ui elements
// require('./components/ui/hover-color.js');
require('./components/ui/star-detail-ui.js');
//
//
//
require('./components/action-dispatcher.js');
// require('./components/attribute-incrementer.js');
require('./components/blend-model.js');
// require('./components/button-switch.js');
require('./components/constellation.js');
// require('./components/cursor-listener.js');
require('./components/entity-visibility-toggle.js');
// require('./components/event-caller.js');
// require('./components/exoplanet-view.js');
require('./components/follow-entity.js');
// require('./components/formatted-store-value.js');

// require('./components/if-no-vr-headset.js');
// require('./components/indicator-light.js');
// require('./components/json-model.js');
// require('./components/line.js');
// require('./components/location-indicator.js');
//
require('./components/reticle.js');
// // require('./components/scale-ui.js');
// require('./components/sol-scale.js');
require('./components/ui/hover-text-display.js');
require('./components/ui/time-display.js');
require('./components/star-set-indicator.js');
// require('./components/sync-local-location.js');
require('./components/toggle-switch.js');
// require('./components/translate-ui.js');
require('./components/starfield.js');
// require('./components/star-selector.js');

// require('./components/star-detail-view.js');
// require('./components/star-detail-exoplanet-spawner.js');
// require('./components/star-detail-exoplanet-detail.js');
// require('./components/star-detail-exoplanet-list.js');
require('./components/star-detail-spawner.js');
