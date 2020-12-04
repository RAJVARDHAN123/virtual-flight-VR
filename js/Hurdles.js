AFRAME.registerComponent("hurdle-genrator", {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      const id = `hurdle${i}`;
      const posX = Math.floor(Math.random() * -1050 + 650);
      const posY = 5;
      const posZ = Math.floor(Math.random() * -650 + -100);
      const position = { x: posX, y: posY, z: posZ };
      this.createHurdle(id, position);
    }
  },
  createHurdle: function(id, position) {
    var terrainEl = document.querySelector("#terrain");
    var hurdleEl = document.createElement("a-entity");

    // Do `.setAttribute()`s to initialize the entity.
    hurdleEl.setAttribute("id", id);
    hurdleEl.setAttribute("position", position);
    hurdleEl.setAttribute("geometry", {
      primitive: "box",
      width: 10,
      height: 20
    });
    hurdleEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 3.2
    });
    hurdleEl.setAttribute("game-play", {
      elementId: `#${id}`
    });
    terrainEl.appendChild(hurdleEl);
  }
});
