AFRAME.registerComponent("ring-genrator", {
  init: function() {
    const targetEl = document.querySelector("#targets");
    const numberOfTatgets = parseInt(targetEl.getAttribute("text").value);
    for (var i = 1; i <= numberOfTatgets; i++) {
      const id = `ring${i}`;
      const posX = Math.floor(Math.random() * -1050 + 650);
      const posY = 5;
      const posZ = Math.floor(Math.random() * -650 + -100);
      const position = { x: posX, y: posY, z: posZ };
      this.createRing(id, position);
    }
  },
  createRing: function(id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    // Do `.setAttribute()`s to initialize the entity.
    ringEl.setAttribute("id", id);
    ringEl.setAttribute("material", "color", "#ff9100");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("geometry", {
      primitive: "torus",
      radius: 8
    });
    ringEl.setAttribute("radius-tubular", "0.2");
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2
    });
    ringEl.setAttribute("game-play", {
      elementId: `#${id}`
    });
    terrainEl.appendChild(ringEl);
  }
});
