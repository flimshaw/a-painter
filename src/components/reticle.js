/* globals AFRAME THREE */

var spriteMaterial = new THREE.SpriteMaterial({
  color: 0x99aaff,
  transparent: true,
  map: new THREE.TextureLoader().load( "assets/images/reticle.png" ),
  depthWrite: false,
  depthTest: false,
  blending: THREE.AdditiveBlending
});

var spritePlanetMaterial = new THREE.SpriteMaterial({
  color: 0xedffaa,
  transparent: true,
  map: new THREE.TextureLoader().load( "assets/images/reticle.png" ),
  depthWrite: false,
  depthTest: false,
  blending: THREE.AdditiveBlending
});

var spriteFlareMaterial = new THREE.SpriteMaterial({
  color: 0xedffaa,
  transparent: true,
  map: new THREE.TextureLoader().load( "assets/images/lensflare4.jpg" ),
  depthWrite: false,
  depthTest: false,
  blending: THREE.AdditiveBlending
});


var starData = null;

AFRAME.registerComponent('reticle', {
  schema: {
    color: {type: 'vec4', default: '.3 1 .3 1'}
  },

  init: function () {
    // this.sprite = new THREE.Sprite()
    this.el.setObject3D('sprite', new THREE.Sprite(spriteMaterial));

    // this.el.object3D.add(new THREE.Sprite(starGlarelMat));



    //  lensFlare.position.copy(spotLight.position);
    // this.el.setObject3D('flare', lensFlare);
  },
  handleStateUpdate: function() {

  },
  update: function() {
    // console.log('Reticle updated.');
  },

});

AFRAME.registerComponent('sprite-toggle', {
  init: function () {
    this.el.addEventListener('menudown', () => {
      spriteMaterial.opacity = spriteMaterial.opacity ? 0 : 1;
    });
  }
});
