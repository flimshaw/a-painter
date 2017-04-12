// require subcomponents
require('../components/ui/star-detail-btn');
//require('../components/ui/star-detail-panel');
require('../components/ui/star-detail-panel-display');

// require templates
var overviewTemplate = require('../components/ui/templates/overview.ejs');
var planetsTemplate = require('../components/ui/templates/planets.ejs');
var locationTemplate = require('../components/ui/templates/location.ejs');

const YEAR_MS = 365.25*24*60*60*1000;

var defaultStar = {
  name: 'Barnard\'s Star',
  stats: {
    starClass: 'Red Dwarf',
    starType: 'II',
    radius: 1.0,
    mass: 1.0,
    density: 1.0,
    temp: 5800,
    hrLocation: { x: .5, y: .5 }
  },
  time: {
    distance: 0.0,
    currentDate: Date.now(),
    radioRange: true,
    radioContactDate: Date.now()-YEAR_MS,
    skyLocation: { x: .5, y: .5 }
  },
  planets: [
    {
      name: 'Planet A',
      orbitalDistance: 1.0,
      orbitalPeriod: 365.25,
      radius: 1.0,
      mass: 1.0
    },
    {
      name: 'Planet A',
      orbitalDistance: .5,
      orbitalPeriod: 365.25,
      radius: 1.0,
      mass: 1.0
    },
    {
      name: 'Planet A',
      orbitalDistance: .75,
      orbitalPeriod: 365.25,
      radius: 1.0,
      mass: 1.0
    }
  ]
};


/* globals AFRAME */
AFRAME.registerSystem('star-detail-ui', {
  init: function() {
    this.panelCount = 0;
    this.panels = [];
    this.templates = {
      overview: overviewTemplate,
      planets: planetsTemplate,
      location: locationTemplate
    }
  },
  // accepts a star id and updates s
  update: function(id) {

  },
  generatePanelDisplay: function(obj) {

    // create an element to use as a texture source for the panel
    let el = document.createElement('div');
    let id = `panel-display${this.panelCount++}`;
    el.classList.add('html-panel');
    el.classList.add('panel');
    el.classList.add('star-detail');
    el.innerHTML = `<h1>Initialized ${id}</h1>`;
    el.setAttribute('id', id);
    document.body.appendChild(el);

    // create an element for the panel itself
    let e = document.createElement('a-entity');
    e.setObject3D('mesh', obj);

    e.setAttribute('star-detail-panel-display');
    e.setAttribute('redux-bind', { 'worldSettings.selectedPanel': 'star-detail-panel-display.selectedPanel' });
    e.setAttribute('material', {
      shader: 'html',
      target: `#${id}`,
      transparent: true,
      fps: -1,
      width: 1024,
      height: 512
    });

    return e;

  },
  generatePanelButton: function(obj) {

    let e = document.createElement('a-entity');
    e.setObject3D('mesh', obj);
    e.classList.add('clickable');

    // create a template for the given panel button
    let a = obj.name.split('.');
    let template = this.templates[a[a.length-1]];
    console.log(template({}));

    return e;
  },
  // builds a starDetail context for the given id
  getStarDetails: function(id) {
    let s = Object.assign({}, defaultStar);
    return s;
  }
});