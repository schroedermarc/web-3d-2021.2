let shakeButtonPressed = false
let snapped = true
let shakeSpeedX, shakeSpeedY, shakeSpeedZ

const PI = Math.PI
const HALF_PI = PI / 2

AFRAME.registerComponent('eight-ball-cube', {
  schema: {
    test: { type: 'string' },
  },

  init: function () {
    // Do something when component first attached.
    console.log('eight ball cube component created')
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.

    if (shakeButtonPressed) {
      this.el.object3D.rotation.x += shakeSpeedX
      this.el.object3D.rotation.y += shakeSpeedY
      this.el.object3D.rotation.z += shakeSpeedZ
    }
  },
})
