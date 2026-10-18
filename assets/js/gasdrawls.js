/* Gas Drawls: caps cascade, borrowed-time clock, flashlight. */
(function () {
  "use strict";

  /* Where every shop button goes. Point this at the real store. */
  var SHOP_URL = "https://gasdrawls.com/shop";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-shop]").forEach(function (a) { a.href = SHOP_URL; });

  /* A1: the line arrives in lowercase except ALL CAPS, then the rest follows */
  var line = document.querySelector("[data-caps]");
  if (line) {
    var chars = [];
    Array.prototype.slice.call(line.childNodes).forEach(function (node) {
      if (node.nodeType !== 3) return;
      var frag = document.createDocumentFragment();
      node.textContent.split("").forEach(function (c) {
        var s = document.createElement("span");
        s.className = "ch";
        s.textContent = c;
        frag.appendChild(s);
        if (c.trim()) chars.push(s);
      });
      line.replaceChild(frag, node);
    });
    var up = function (s) { s.textContent = s.textContent.toUpperCase(); };
    if (reduced) chars.forEach(up);
    else chars.forEach(function (s, i) { setTimeout(function () { up(s); }, 900 + i * 32); });
  }

  /* A2: a clock on borrowed time that ticks faster the further you scroll in */
  var face = document.querySelector("[data-clock]");
  var rateEl = document.querySelector("[data-rate]");
  var section = document.getElementById("borrowed");
  if (face && section) {
    var virtual = Date.now();
    var last = performance.now();
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function (now) {
      var r = section.getBoundingClientRect();
      var progress = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
      var rate = reduced ? 1 : Math.round(1 + progress * progress * 119);
      virtual += (now - last) * rate;
      last = now;
      var d = new Date(virtual);
      face.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
      rateEl.textContent = "×" + rate;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* B2: a flashlight over the painting */
  var lamp = document.querySelector("[data-lamp]");
  if (lamp) {
    var aim = function (e) {
      var r = lamp.getBoundingClientRect();
      lamp.style.setProperty("--x", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      lamp.style.setProperty("--y", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    };
    lamp.addEventListener("pointermove", aim);
    lamp.addEventListener("pointerdown", aim);
  }
})();
