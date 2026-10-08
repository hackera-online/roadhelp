/* Калкулатор. ВСИЧКИ ЦЕНИ СА ТУК - променяш само числата в CONFIG. */
(function () {
  "use strict";

  var CONFIG = {
    currency: "€",
    vehicles: [                                   // base = начална такса
      { id: "car",  label: "Лека кола",           base: 30 },
      { id: "suv",  label: "Джип / SUV / Ван",    base: 40 },
      { id: "bus",  label: "Микробус / Бус",      base: 50 },
      { id: "moto", label: "Мотоциклет",          base: 25 }
    ],
    perKm: 1.3,                                   // цена на километър
    conditions: { normal: 0, blocked: 15 }        // надбавка
  };

  var form = document.getElementById("calc-form");
  var select = document.getElementById("vehicle");
  var range = document.getElementById("distance");
  var distOut = document.getElementById("distance-val");
  var priceOut = document.getElementById("total-price");
  if (!form) return;

  CONFIG.vehicles.forEach(function (v) {
    var o = document.createElement("option");
    o.value = v.id;
    o.textContent = v.label + " (Начална такса " + v.base + " " + CONFIG.currency + ")";
    select.appendChild(o);
  });

  function calc() {
    var v = CONFIG.vehicles.filter(function (x) { return x.id === select.value; })[0];
    var km = parseInt(range.value, 10) || 0;
    var cond = form.elements.condition.value;
    var total = v.base + km * CONFIG.perKm + (CONFIG.conditions[cond] || 0);
    distOut.textContent = km;
    priceOut.textContent = Math.round(total) + " " + CONFIG.currency;
  }

  form.addEventListener("input", calc);
  form.addEventListener("submit", function (e) { e.preventDefault(); });
  calc();
})();
