AFRAME.registerComponent('shybox', {
  schema: {},
  init: function () {
    // init is called when object is created
    console.log('oh no, I exist.')

    // define a camera object so we don't have to query it every time
    const sceneEl = document.querySelector('a-scene');
    const camera = sceneEl.querySelector('#camera');
    this.camera = camera
  },
  update: function () {},
  tick: function () {
    // get position of self
    const objPos = this.el.object3D.position

    // get position of camera object
    const cameraPos = this.camera.object3D.position

    // get distance to camera with those two positions using vector method
    const distanceToCamera = objPos.distanceTo(cameraPos)

    // if distance is less than three, change visible to false, otherwise set as true
    if (distanceToCamera < 3){
      this.el.object3D.visible = false;
    } else {
      this.el.object3D.visible = true;
    }

  },
  remove: function () {},
  pause: function () {},
  play: function () {}
});