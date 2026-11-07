(function () {
  "use strict";

  var doc = document;
  var list = doc.getElementById("pub-list");
  if (!list || !window.PUBLICATIONS || !window.AJ) return;

  var search = doc.getElementById("pub-search");
  var yearSelect = doc.getElementById("pub-year");
  var typeBox = doc.getElementById("pub-types");
  var countEl = doc.getElementById("pub-count");
  var emptyEl = doc.getElementById("pub-empty");
  var resetBtn = doc.getElementById("pub-reset");

  /* Newest first; entries without a year go last. Original order is kept otherwise. */
  var data = window.PUBLICATIONS
    .map(function (p, i) { return { p: p, i: i }; })
    .sort(function (a, b) {
      var ya = a.p.year === null ? -1 : a.p.year;
      var yb = b.p.year === null ? -1 : b.p.year;
      return yb - ya || a.i - b.i;
    })
    .map(function (x) { return x.p; });

  var types = [
    { id: "all", label: "All" },
    { id: "journal", label: "Journal articles" },
    { id: "conference", label: "Conference papers" },
    { id: "book", label: "Books and chapters" },
    { id: "other", label: "Datasets and other" }
  ];

  var state = { q: "", type: "all", year: "all" };

  function countFor(id) {
    return data.filter(function (p) { return id === "all" || p.type === id; }).length;
  }

  /* Type buttons */
  types.forEach(function (t) {
    var btn = doc.createElement("button");
    btn.type = "button";
    btn.className = "type-btn";
    btn.setAttribute("data-type", t.id);
    btn.setAttribute("aria-pressed", t.id === "all" ? "true" : "false");
    btn.appendChild(doc.createTextNode(t.label));
    var count = doc.createElement("span");
    count.className = "count";
    count.textContent = countFor(t.id);
    btn.appendChild(count);
    btn.addEventListener("click", function () {
      state.type = t.id;
      [].forEach.call(typeBox.querySelectorAll(".type-btn"), function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-type") === t.id ? "true" : "false");
      });
      render();
    });
    typeBox.appendChild(btn);
  });

  /* Year options */
  var years = [];
  var hasUndated = false;
  data.forEach(function (p) {
    if (p.year === null) hasUndated = true;
    else if (years.indexOf(p.year) === -1) years.push(p.year);
  });
  function addOption(value, label) {
    var o = doc.createElement("option");
    o.value = value;
    o.textContent = label;
    yearSelect.appendChild(o);
  }
  addOption("all", "All years");
  years.forEach(function (y) { addOption(String(y), String(y)); });
  if (hasUndated) addOption("none", "Year not listed");

  function matches(p) {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (state.year !== "all") {
      if (state.year === "none") { if (p.year !== null) return false; }
      else if (String(p.year) !== state.year) return false;
    }
    if (state.q) {
      var hay = [p.title, p.authors || "", p.venue, p.kind, String(p.year || ""), (p.tags || []).join(" ")]
        .join(" ")
        .toLowerCase();
      var words = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      for (var i = 0; i < words.length; i++) {
        if (hay.indexOf(words[i]) === -1) return false;
      }
    }
    return true;
  }

  function render() {
    var shown = data.filter(matches);
    list.textContent = "";
    shown.forEach(function (p) { list.appendChild(window.AJ.renderPub(p)); });
    countEl.textContent =
      shown.length === data.length
        ? "Showing all " + data.length + " items"
        : "Showing " + shown.length + " of " + data.length + " items";
    emptyEl.hidden = shown.length !== 0;
  }

  search.addEventListener("input", function () {
    state.q = search.value.trim();
    render();
  });
  yearSelect.addEventListener("change", function () {
    state.year = yearSelect.value;
    render();
  });
  resetBtn.addEventListener("click", function () {
    state = { q: "", type: "all", year: "all" };
    search.value = "";
    yearSelect.value = "all";
    [].forEach.call(typeBox.querySelectorAll(".type-btn"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-type") === "all" ? "true" : "false");
    });
    render();
    search.focus();
  });

  render();
})();
