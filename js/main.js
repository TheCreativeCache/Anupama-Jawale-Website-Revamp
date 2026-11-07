(function () {
  "use strict";

  var doc = document;

  /* ---------- Small helpers ---------- */

  function el(tag, cls, text) {
    var node = doc.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  /* ---------- Footer year ---------- */

  var yearEl = doc.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */

  var toggle = doc.querySelector(".nav-toggle");
  var nav = doc.getElementById("site-nav");

  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ---------- Email addresses (assembled here so they are not plain text in the HTML) ---------- */

  [].forEach.call(doc.querySelectorAll("[data-email]"), function (link) {
    var parts = link.getAttribute("data-email").split("|");
    var address = parts[0] + "@" + parts[1];
    link.setAttribute("href", "mailto:" + address);
    link.textContent = address;
  });

  /* ---------- Highlight the current section in the menu (home page only) ---------- */

  var navLinks = [].slice.call(doc.querySelectorAll(".site-nav a"));
  var sectionLinks = {};
  navLinks.forEach(function (a) {
    if (!a.hash) return;
    var id = a.hash.slice(1);
    if (doc.getElementById(id)) sectionLinks[id] = a;
  });

  /* On a sub-page (Publications) the menu already marks the current page, so skip this. */
  var onSubpage = !!doc.querySelector('.site-nav [aria-current="page"]');

  if (!onSubpage && "IntersectionObserver" in window && Object.keys(sectionLinks).length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            if (a.getAttribute("aria-current") === "true") a.removeAttribute("aria-current");
          });
          sectionLinks[entry.target.id].setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(sectionLinks).forEach(function (id) {
      spy.observe(doc.getElementById(id));
    });
  }

  /* ---------- Tabs (teaching section) ----------
     Without JavaScript every panel simply shows, one after the other. */

  [].forEach.call(doc.querySelectorAll("[data-tabs]"), function (box) {
    var tabs = [].slice.call(box.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) { return doc.getElementById(t.getAttribute("aria-controls")); });
    if (!tabs.length || panels.indexOf(null) !== -1) return;

    box.classList.add("is-tabbed");

    function select(i, focus) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        panels[j].hidden = !on;
      });
      if (focus) tabs[i].focus();
    }

    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { select(i, false); });
      t.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
        else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === "Home") n = 0;
        else if (e.key === "End") n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); select(n, true); }
      });
    });

    select(0, false);
  });

  /* ---------- Publication rendering (shared by both pages) ---------- */

  function authorsNode(text) {
    var frag = doc.createDocumentFragment();
    var parts = text.split("A. Jawale");
    parts.forEach(function (part, i) {
      if (i > 0) frag.appendChild(el("strong", "", "A. Jawale"));
      frag.appendChild(doc.createTextNode(part));
    });
    return frag;
  }

  function renderPub(p) {
    var li = el("li", "pub");
    li.appendChild(el("h3", "pub-title", p.title));

    if (p.authors) {
      var authors = el("p", "pub-authors");
      authors.appendChild(authorsNode(p.authors));
      li.appendChild(authors);
    }

    li.appendChild(el("p", "pub-venue", p.venue));

    var meta = el("p", "pub-meta");
    if (p.year) meta.appendChild(el("span", "pub-year", String(p.year)));
    meta.appendChild(el("span", "pub-kind", p.kind));
    (p.tags || []).forEach(function (tag) {
      meta.appendChild(el("span", "badge", tag));
    });

    var href = null;
    var label = "";
    if (p.doi) {
      href = "https://doi.org/" + p.doi;
      label = "DOI " + p.doi;
    } else if (p.url) {
      href = p.url;
      label = "View online";
    }
    if (href) {
      var link = el("a", "pub-link", label);
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener";
      meta.appendChild(link);
    }

    li.appendChild(meta);
    return li;
  }

  window.AJ = { renderPub: renderPub };

  /* Selected publications on the home page */
  var selected = doc.getElementById("selected-pubs");
  if (selected && window.PUBLICATIONS) {
    window.PUBLICATIONS
      .map(function (p, i) { return { p: p, i: i }; })
      .filter(function (x) { return x.p.featured; })
      .sort(function (a, b) { return (b.p.year || 0) - (a.p.year || 0) || a.i - b.i; })
      .forEach(function (x) { selected.appendChild(renderPub(x.p)); });
  }

  /* ---------- Hero signal strip ----------
     A slow, scrolling multi-channel trace, a nod to the sensor, EEG and
     time-series data that her research works with. It is drawn once (no
     movement) if the visitor prefers reduced motion. */

  var canvas = doc.getElementById("signal");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var width = 0;
    var height = 0;
    var running = true;
    var reduceMotion =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var channels = [
      { seed: 0.0, row: 0.26, color: "rgba(63,34,80,0.92)", line: 1.9 },
      { seed: 1.3, row: 0.52, color: "rgba(27,127,104,0.95)", line: 1.7 },
      { seed: 2.6, row: 0.78, color: "rgba(63,34,80,0.32)", line: 1.3 }
    ];

    /* The edge fade uses the hero's own background colour, so it always matches. */
    var heroEl = doc.querySelector(".hero");
    var bgSolid = "rgb(243,238,247)";
    var bgClear = "rgba(243,238,247,0)";
    if (heroEl) {
      var m = window.getComputedStyle(heroEl).backgroundColor.match(/\d+/g);
      if (m && m.length >= 3) {
        bgSolid = "rgb(" + m[0] + "," + m[1] + "," + m[2] + ")";
        bgClear = "rgba(" + m[0] + "," + m[1] + "," + m[2] + ",0)";
      }
    }

    var sample = function (x, k) {
      var envelope = 0.6 + 0.4 * Math.sin(x * 0.35 + k * 1.7);
      var burst = Math.max(0, Math.sin(x * 0.13 + k * 2.3));
      burst = burst * burst * burst;
      return (
        0.45 * Math.sin(x * 1.1 + k) +
        0.25 * Math.sin(x * 2.7 + k * 2.1) * envelope +
        0.18 * Math.sin(x * 6.1 + k * 3.3) +
        0.3 * burst * Math.sin(x * 9 + k)
      );
    };

    var draw = function (offset) {
      ctx.clearRect(0, 0, width, height);

      /* faint grid */
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(63,34,80,0.07)";
      ctx.beginPath();
      for (var gx = -(offset % 48); gx < width; gx += 48) {
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
      }
      channels.forEach(function (c) {
        ctx.moveTo(0, c.row * height);
        ctx.lineTo(width, c.row * height);
      });
      ctx.stroke();

      /* traces */
      var amp = height * 0.13;
      channels.forEach(function (c) {
        ctx.beginPath();
        ctx.lineWidth = c.line;
        ctx.strokeStyle = c.color;
        ctx.lineJoin = "round";
        for (var px = 0; px <= width; px += 2) {
          var y = c.row * height - amp * sample((px + offset) / 58, c.seed);
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.stroke();
      });

      /* soft fade at both edges */
      var fade = Math.min(120, width * 0.12);
      var left = ctx.createLinearGradient(0, 0, fade, 0);
      left.addColorStop(0, bgSolid);
      left.addColorStop(1, bgClear);
      ctx.fillStyle = left;
      ctx.fillRect(0, 0, fade, height);
      var right = ctx.createLinearGradient(width - fade, 0, width, 0);
      right.addColorStop(0, bgClear);
      right.addColorStop(1, bgSolid);
      ctx.fillStyle = right;
      ctx.fillRect(width - fade, 0, fade, height);
    };

    var offsetNow = 0;

    var resize = function () {
      var rect = canvas.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(offsetNow);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      var started = null;
      var frame = function (ts) {
        if (started === null) started = ts;
        offsetNow = (ts - started) * 0.03; /* about 30 pixels per second */
        if (running) draw(offsetNow);
        window.requestAnimationFrame(frame);
      };
      window.requestAnimationFrame(frame);

      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
          running = entries[0].isIntersecting;
        }).observe(canvas);
      }
    }
  }
})();
