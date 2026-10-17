/* Gas Drawls: GOD MODE. Cards, issues, power core, god mode, SFX. */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var MASK = '<svg viewBox="0 0 200 240" aria-hidden="true"><use href="#gd-mask-art"/></svg>';
  var SFX = ["KRAKA-THOOM!", "KLANG!", "SKRAANG!", "BWAAM!", "FZZT!", "KA-CHUNK!", "VRMMM!", "THWIP?", "BLAM!", "ZZAK!"];

  /* ---------- shop links ---------- */
  $$("[data-shop]").forEach(function (a) { a.href = window.GD_SHOP_URL || "#shop"; });

  /* ---------- roster cards ---------- */
  var cardsEl = $("[data-cards]");
  (window.GD_ALIASES || []).forEach(function (a, i) {
    var stats = Object.keys(a.stats).map(function (k) {
      return '<li><span>' + esc(k.toUpperCase()) + '</span><span class="gd-bar"><i style="--v:' + a.stats[k] * 10 + '%"></i></span><span>' + a.stats[k] + '</span></li>';
    }).join("");
    var el = document.createElement("div");
    el.className = "gd-card gd-reveal";
    el.style.setProperty("--c", a.color);
    el.innerHTML =
      '<button class="gd-card-btn" type="button" aria-pressed="false" aria-label="' + esc(a.name) + ' card. Flip for stats.">' +
        '<div class="gd-face gd-front">' +
          '<div class="gd-card-top"><span>#' + String(i + 1).padStart(2, "0") + '</span><span>' + esc(a.era) + '</span></div>' +
          '<div class="gd-card-mask">' + MASK + '</div>' +
          '<h3 class="gd-card-name">' + esc(a.name) + '</h3>' +
          '<div class="gd-card-power">Power: ' + esc(a.power) + '</div>' +
        '</div>' +
        '<div class="gd-face gd-back">' +
          '<h3>' + esc(a.name) + '</h3>' +
          '<p class="gd-team">' + esc(a.team) + ' &middot; ' + esc(a.era) + '</p>' +
          '<p>' + esc(a.text) + '</p>' +
          '<ul class="gd-stats">' + stats + '</ul>' +
        '</div>' +
      '</button>';
    cardsEl.appendChild(el);
  });
  cardsEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".gd-card-btn");
    if (!btn) return;
    var card = btn.parentNode;
    var on = card.classList.toggle("is-flipped");
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  });

  /* ---------- issues ---------- */
  function coverHTML(it) {
    return '<div class="gd-cov' + (it.art ? " has-art" : "") + '" style="--c1:' + it.colors[0] + ';--c2:' + it.colors[1] + '">' +
      (it.art ? '<img src="' + esc(it.art) + '" alt="" loading="lazy" onerror="this.parentNode.classList.remove(\'has-art\');this.remove()">' : "") +
      '<div class="gd-cov-head"><span>GAS DRAWLS PRESENTS</span><b>#' + it.no + '</b></div>' +
      '<div class="gd-cov-art">' + MASK + '</div>' +
      '<span class="gd-cov-tag">' + esc(it.tag) + '</span>' +
      '<p class="gd-cov-title">' + esc(it.title) + '</p>' +
      '<div class="gd-cov-by">' + esc(it.by) + ' &middot; ' + it.year + '</div>' +
    '</div>';
  }
  var issues = window.GD_ISSUES || [];
  var issuesEl = $("[data-issues]");
  issues.forEach(function (it, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "gd-issue";
    b.dataset.i = i;
    b.setAttribute("aria-label", "Issue " + it.no + ": " + it.title + ", " + it.by + ", " + it.year);
    b.innerHTML = coverHTML(it) + '<p class="gd-issue-meta">' + esc(it.label) + '</p>';
    issuesEl.appendChild(b);
  });

  var modal = $("[data-modal]");
  issuesEl.addEventListener("click", function (e) {
    var b = e.target.closest(".gd-issue");
    if (!b) return;
    var it = issues[+b.dataset.i];
    $("[data-modal-cover]").innerHTML = coverHTML(it);
    $("[data-modal-no]").textContent = "Issue #" + it.no;
    $("[data-modal-title]").textContent = it.title;
    $("[data-modal-meta]").textContent = it.by + " · " + it.year + " · " + it.label;
    $("[data-modal-blurb]").textContent = it.blurb;
    if (modal.showModal) modal.showModal(); else modal.setAttribute("open", "");
  });
  $("[data-close]").addEventListener("click", function () { modal.close(); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });

  /* ---------- products ---------- */
  var TEE = '<svg viewBox="0 0 100 100" aria-hidden="true"><path class="gd-garment" d="M30 12 L42 8 C45 14 55 14 58 8 L70 12 L92 28 L82 44 L72 38 L72 92 L28 92 L28 38 L18 44 L8 28 Z"/><text class="gd-garment-mark" x="50" y="62" text-anchor="middle" font-family="Bangers, Impact" font-size="16">DOOM</text></svg>';
  var productsEl = $("[data-products]");
  (window.GD_PRODUCTS || []).forEach(function (p) {
    var a = document.createElement("a");
    a.className = "gd-product gd-reveal";
    a.href = p.url || window.GD_SHOP_URL || "#shop";
    a.innerHTML =
      (p.tag ? '<span class="gd-product-tag">' + esc(p.tag) + '</span>' : "") +
      '<div class="gd-product-img">' + (p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">' : TEE) + '</div>' +
      '<div class="gd-product-body"><h3>' + esc(p.name) + '</h3><span class="gd-product-price">' + esc(p.price) + '</span></div>';
    productsEl.appendChild(a);
  });

  /* ---------- scroll reveal ---------- */
  var reveals = $$(".gd-reveal");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: .15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- eyes follow the pointer ---------- */
  var heroMask = $(".gd-mask");
  var eyes = $(".gd-mask .gd-eyes");
  if (heroMask && eyes && !reduced) {
    window.addEventListener("pointermove", function (e) {
      var r = heroMask.getBoundingClientRect();
      var dx = e.clientX - (r.left + r.width / 2);
      var dy = e.clientY - (r.top + r.height * .45);
      var d = Math.max(1, Math.hypot(dx, dy));
      var k = Math.min(1, d / 300);
      eyes.style.transform = "translate(" + (dx / d * 6 * k).toFixed(2) + "px," + (dy / d * 3 * k).toFixed(2) + "px)";
    }, { passive: true });
  }

  /* ---------- SFX bursts on click ---------- */
  function pow(x, y, word) {
    var s = document.createElement("span");
    s.className = "gd-pow";
    s.textContent = word || SFX[Math.floor(Math.random() * SFX.length)];
    s.style.left = x + "px";
    s.style.top = y + "px";
    s.style.setProperty("--r", (Math.random() * 30 - 15).toFixed(1) + "deg");
    document.body.appendChild(s);
    setTimeout(function () { s.remove(); }, 750);
  }
  document.addEventListener("click", function (e) {
    if (e.target.closest("a, button, input, dialog, kbd")) return;
    pow(e.pageX, e.pageY);
  });

  /* ---------- GOD MODE ---------- */
  var body = document.body;
  var splash = $("[data-splash]");
  var switches = $$("[data-god-toggle]");
  function setGod(on, announce) {
    body.classList.toggle("is-god", on);
    switches.forEach(function (b) {
      if (b.classList.contains("gd-switch")) b.setAttribute("aria-pressed", on ? "true" : "false");
      else b.textContent = on ? "Exit God Mode" : "Activate God Mode";
    });
    if (on) startKrackle(); else stopKrackle();
    if (announce) {
      splash.innerHTML = "<span>" + (on ? "GOD MODE<br>ENABLED" : "MORTAL<br>MODE") + "</span>";
      splash.classList.remove("is-on");
      void splash.offsetWidth;
      splash.classList.add("is-on");
      if (on && !reduced) {
        body.classList.add("is-shaking");
        setTimeout(function () { body.classList.remove("is-shaking"); }, 520);
      }
    }
    try { localStorage.setItem("gd-god", on ? "1" : "0"); } catch (err) { /* storage blocked */ }
  }
  switches.forEach(function (b) {
    b.addEventListener("click", function () { setGod(!body.classList.contains("is-god"), true); });
  });

  // Type D-O-O-M anywhere to unlock
  var typed = "";
  document.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input, textarea")) return;
    typed = (typed + (e.key || "").toUpperCase()).slice(-4);
    if (typed === "DOOM") { typed = ""; charge = 1; renderCharge(); if (!body.classList.contains("is-god")) setGod(true, true); }
  });

  /* ---------- power core ---------- */
  var charge = 0; // 0 to 1, in steps of a tenth
  var meter = $("[data-meter]");
  var core = $("[data-charge]");
  var levels = $$("[data-levels] li");
  function renderCharge() {
    var pct = Math.round(charge * 100);
    document.documentElement.style.setProperty("--charge", charge);
    meter.setAttribute("aria-valuenow", pct);
    $(".gd-meter-val", meter).textContent = pct + "%";
    levels.forEach(function (li) { li.classList.toggle("is-on", pct >= +li.dataset.at); });
  }
  core.addEventListener("click", function (e) {
    if (charge >= 1) { charge = 0; renderCharge(); setGod(false, true); return; }
    charge = Math.min(10, Math.round(charge * 10) + 1) / 10;
    renderCharge();
    var r = core.getBoundingClientRect();
    var x = e.clientX ? e.pageX : r.left + window.scrollX + r.width / 2;
    var y = e.clientY ? e.pageY : r.top + window.scrollY + r.height / 2;
    pow(x + (Math.random() * 120 - 60), y - 40);
    core.classList.remove("is-hit"); void core.offsetWidth; core.classList.add("is-hit");
    if (charge >= 1 && !body.classList.contains("is-god")) setTimeout(function () { setGod(true, true); }, 250);
  });

  /* ---------- Kirby krackle (god mode background) ---------- */
  var cv = $(".gd-krackle");
  var ctx = cv.getContext && cv.getContext("2d");
  var dots = [], raf = 0;
  function sizeCanvas() {
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seed() {
    dots = [];
    var clusters = Math.round(innerWidth * innerHeight / 26000);
    for (var c = 0; c < clusters; c++) {
      var cx = Math.random() * innerWidth, cy = Math.random() * innerHeight;
      var n = 4 + Math.floor(Math.random() * 9);
      var hue = Math.random() < .7 ? "255,210,63" : (Math.random() < .5 ? "255,90,60" : "140,90,255");
      for (var i = 0; i < n; i++) {
        dots.push({
          x: cx + (Math.random() - .5) * 70, y: cy + (Math.random() - .5) * 70,
          r: 2 + Math.random() * 9, vy: -.15 - Math.random() * .4, vx: (Math.random() - .5) * .2,
          ph: Math.random() * 6.28, hue: hue
        });
      }
    }
  }
  function draw(t) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      if (!reduced) {
        d.x += d.vx; d.y += d.vy;
        if (d.y < -20) { d.y = innerHeight + 20; d.x = Math.random() * innerWidth; }
      }
      var pulse = reduced ? 1 : .75 + .25 * Math.sin(t / 400 + d.ph);
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * 1.9 * pulse, 0, 6.283);
      ctx.fillStyle = "rgba(" + d.hue + ",.16)";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r * pulse, 0, 6.283);
      ctx.fillStyle = "#000";
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(" + d.hue + ",.85)";
      ctx.stroke();
    }
    if (!reduced) raf = requestAnimationFrame(draw);
  }
  function startKrackle() {
    if (!ctx) return;
    sizeCanvas(); seed();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(draw);
  }
  function stopKrackle() { cancelAnimationFrame(raf); raf = 0; if (ctx) ctx.clearRect(0, 0, cv.width, cv.height); }
  window.addEventListener("resize", function () { if (body.classList.contains("is-god")) startKrackle(); });

  /* Remember god mode between visits */
  var saved = null;
  try { saved = localStorage.getItem("gd-god"); } catch (err) { /* storage blocked */ }
  if (saved === "1") { charge = 1; renderCharge(); setGod(true, false); }
})();
