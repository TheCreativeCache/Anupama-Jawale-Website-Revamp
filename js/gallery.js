(function () {
  "use strict";

  var doc = document;
  var section = doc.getElementById("gallery");
  var pins = doc.getElementById("pins");
  var dlg = doc.getElementById("lightbox");
  if (!section || !pins || !dlg) return;

  var data = window.GALLERY || [];
  var lbImg = doc.getElementById("lb-img");
  var lbCap = doc.getElementById("lb-cap");
  var lbCount = doc.getElementById("lb-count");
  var btnPrev = doc.getElementById("lb-prev");
  var btnNext = doc.getElementById("lb-next");
  var btnClose = doc.getElementById("lb-close");

  /* If a file name is not found, try the same name with other common endings
     (so photo-01.png or photo-01.jpeg still work). */
  var endings = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG"];

  var items = []; /* the photos that actually exist */
  var current = 0;

  function hideGallery() {
    section.hidden = true;
    var link = doc.querySelector('.site-nav a[href$="#gallery"]');
    if (link && link.parentNode) link.parentNode.hidden = true;
  }

  function removeItem(entry) {
    var i = items.indexOf(entry);
    if (i !== -1) items.splice(i, 1);
    if (entry.li.parentNode) entry.li.parentNode.removeChild(entry.li);
    if (!items.length) hideGallery();
  }

  function build(g, n) {
    var li = doc.createElement("li");
    li.className = "pin";

    var btn = doc.createElement("button");
    btn.type = "button";
    btn.className = "pin-btn";

    var img = doc.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = g.alt || g.caption || "Photo " + (n + 1);
    if (g.pos) img.style.objectPosition = g.pos;
    btn.appendChild(img);

    var cap = doc.createElement("span");
    cap.className = "pin-cap";
    cap.textContent = g.caption || "";
    /* The caption is already the picture's description, so do not read it twice. */
    if (g.caption && !g.alt) cap.setAttribute("aria-hidden", "true");
    btn.appendChild(cap);

    li.appendChild(btn);

    var entry = { li: li, img: img, g: g, alt: img.alt };
    var tried = [g.src];

    img.addEventListener("error", function () {
      var base = g.src.replace(/\.[^.\/]+$/, "");
      var next = null;
      for (var k = 0; k < endings.length; k++) {
        var candidate = base + endings[k];
        if (tried.indexOf(candidate) === -1) { next = candidate; break; }
      }
      if (next) {
        tried.push(next);
        img.src = next;
      } else {
        removeItem(entry);
      }
    });

    img.src = g.src;
    btn.addEventListener("click", function () { open(entry); });
    return entry;
  }

  /* ---------- Photo viewer ---------- */

  function show() {
    var e = items[current];
    lbImg.src = e.img.currentSrc || e.img.src;
    lbImg.alt = e.alt;
    lbCap.textContent = e.g.caption || "";
    lbCount.textContent = "Photo " + (current + 1) + " of " + items.length;
    var many = items.length > 1;
    btnPrev.hidden = !many;
    btnNext.hidden = !many;

    /* Start loading the neighbours so Next and Previous feel instant. */
    [current - 1, current + 1].forEach(function (i) {
      var n = items[(i + items.length) % items.length];
      if (n) { var pre = new Image(); pre.src = n.img.currentSrc || n.img.src; }
    });
  }

  function open(entry) {
    current = items.indexOf(entry);
    if (current < 0) return;
    show();
    doc.body.style.overflow = "hidden";
    if (typeof dlg.showModal === "function") dlg.showModal();
    else dlg.setAttribute("open", "");
    btnClose.focus();
  }

  function step(d) {
    if (items.length < 2) return;
    current = (current + d + items.length) % items.length;
    show();
  }

  function closeViewer() {
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  }

  dlg.addEventListener("close", function () { doc.body.style.overflow = ""; });
  btnClose.addEventListener("click", closeViewer);
  btnPrev.addEventListener("click", function () { step(-1); });
  btnNext.addEventListener("click", function () { step(1); });

  /* Click on the dark area around the photo closes the viewer. */
  dlg.addEventListener("click", function (e) {
    if (!e.target.closest("img, figcaption, button")) closeViewer();
  });

  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  });

  /* ---------- Build the board ---------- */

  if (!data.length) { hideGallery(); return; }

  data.forEach(function (g, n) {
    var entry = build(g, n);
    items.push(entry);
    pins.appendChild(entry.li);
  });
})();
