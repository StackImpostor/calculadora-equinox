let vida = personaje.estadisticas.vida, pvida = vida;
let energia = personaje.estadisticas.energia, penergia = energia;
let mana = personaje.estadisticas.mana, pmana = mana;

let disparosnormales = 0;
let disparosdebilidad = 0;
let disparosextra = 0;

$(document).ready(() => {
  for (let i = 0; i < personaje.talentos.length; i++) {
    let talento = personaje.talentos[i];
    $('#contenedor-talentos').append(htmlTalento(talento));
  }
  $('.talento').click(e => clickHandler(e));
  document.querySelectorAll('.talento').forEach(item => {
    item.addEventListener('long-press', e => longpressHandler(e));
  });
  document.querySelectorAll('#display-vida').forEach(item => {
    item.addEventListener('long-press', e => {
      vida = personaje.estadisticas.vida;
      window.navigator.vibrate("10");
      updateDisplayStats();
    });
  });
  document.querySelectorAll('#display-energia').forEach(item => {
    item.addEventListener('long-press', e => {
      energia = personaje.estadisticas.energia;
      window.navigator.vibrate("10");
      updateDisplayStats();
    });
  });
  document.querySelectorAll('#display-mana').forEach(item => {
    item.addEventListener('long-press', e => {
      mana = personaje.estadisticas.mana;
      window.navigator.vibrate("10");
      updateDisplayStats();
    });
  });
  updateDisplayStats();

  //Cosas que creo que son para cerrar el modal pulsando atras
  $('#lista-talentos').on('show.bs.offcanvas', function (e) {
    window.location.hash = "offcanvas";
  });

  $(window).on('hashchange', function (event) {
    if (window.location.hash != "#offcanvas") {
      $('#lista-talentos').offcanvas('hide');
    }
  });
});

function clickHandler(e) {
  let nombretalento = e.currentTarget.getAttribute("data-nombre-talento")
  let talento = getTalento(nombretalento);
  updateStats(0, -talento.costeenergia, -talento.costemana);
  window.navigator.vibrate("10");
  e.stopPropagation();
}

function longpressHandler(e) {
  let nombretalento = e.currentTarget.getAttribute("data-nombre-talento")
  let talento = getTalento(nombretalento);
  if (talento != null) mostrarModal(talento);
  e.stopPropagation();
}

function updateStats(v, e, m) {
  pvida = vida;
  vida += v;

  penergia = energia;
  energia += e;

  pmana = mana;
  mana += m;
  updateDisplayStats();
}

function updateDisplayStats() {
  $('#display-vida').html(`HP:${vida}/${personaje.estadisticas.vida}`);
  $('#display-energia').html(`EP:${energia}/${personaje.estadisticas.energia}`);
  $('#display-mana').html(`MP:${mana}/${personaje.estadisticas.mana}`);
}

function updateDisplayDisparos() {
  $('#num-disparos-normales').html(disparosnormales);
  $('#num-disparos-debilidad').html(disparosdebilidad);
  let disparostotales = disparosnormales + disparosdebilidad + disparosextra;
  $('#num-disparos-totales').html(disparostotales);
  $('.disparo').remove();
  for (let i = 0; i < disparosextra; i++) {
    $('#disparos-totales').prepend(`<div class="disparo disparo-extra"></div>`);
  }
  for (let i = 0; i < disparosdebilidad; i++) {
    $('#disparos-debilidad').prepend(`<div class="disparo disparo-debilidad" onclick="quitarDisparo('debilidad')"></div>`);
    $('#disparos-totales').prepend(`<div class="disparo disparo-debilidad"></div>`);
  }
  for (let i = 0; i < disparosnormales; i++) {
    $('#disparos-normales').prepend(`<div class="disparo"  onclick="quitarDisparo('normal')"></div>`);
    $('#disparos-totales').prepend(`<div class="disparo"></div>`);
  }
}

function añadirDisparo(tipo) {
  switch (tipo) {
    case "normal":
      disparosnormales++;
      break;
    case "debilidad":
      disparosdebilidad++;
      break;
  }
  recalcularDisparosExtra();
  updateDisplayDisparos();
}

function quitarDisparo(tipo) {
  switch (tipo) {
    case "normal":
      if (disparosnormales > 0)
        disparosnormales--;
      break;
    case "debilidad":
      if (disparosdebilidad > 0)
        disparosdebilidad--;
      break;
  }
  recalcularDisparosExtra();
  updateDisplayDisparos();
}

function recalcularDisparosExtra() {
  disparosextra = 0
  for (let i = 0; i < (disparosnormales + disparosdebilidad + disparosextra); i++) {
    if (i % 2 == 1) disparosextra++;
  }
}

function limpiarDisparos() {
  disparosnormales = 0;
  disparosdebilidad = 0;
  disparosextra = 0;
  updateDisplayDisparos();
}

function htmlTalento(talento, sub = false) {
  res = `<div data-nombre-talento="${talento.nombre}" data-long-press-delay="150" class="container container-fluid d-flex flex-column talento${sub ? ' subtalento' : ''}">
            <h5>${talento.nombre}</h5>`;
  if (talento.activa) {
    res += `<div class="container container-fluid d-flex p-0">
              <div class="border px-2 flex-fill">
                <span class="medidor-cooldown">CD: ${talento.cooldown}</span>
              </div>
              <div class="border px-2 flex-fill">
                <span class="medidor-energia">EP: ${talento.costeenergia}</span>
              </div>
              <div class="border px-2 flex-fill">
                <span class="medidor-mana">MP: ${talento.costemana}</span>
              </div>
            </div>`;
  }
  for (let i = 0; i < talento.subtalentos.length; i++) {
    let subtalento = talento.subtalentos[i];
    res += htmlTalento(subtalento, true);
  }
  res += '</div>'
  return res;
}

function getTalento(nombre) {
  console.log(nombre)
  let lista = [].concat(personaje.talentos);

  while (lista.length > 0) {
    let talento = lista.pop();
    if (talento.nombre === nombre)
      return talento;
    if (talento.subtalentos.length > 0)
      lista = lista.concat(talento.subtalentos);
  }
  return null;
}

function mostrarModal(talento) {
  $('#modaltalento-nombre').html(talento.nombre + `<span class="text-secondary"> - ${talento.activa ? 'Activa' : 'Pasiva'}</span>`);
  $('#modaltalento-descripcion').html(talento.descripción.replaceAll('\n', '<br>'));
  let coste = 'Sin coste';
  if (talento.costeenergia > 0) {
    coste = `${talento.costeenergia} Energia`;
  } else if (talento.costemana > 0) {
    coste = `${talento.costemana} Mana`;
  }
  let enfriamiento = "Sin enfriamiento";
  if (talento.cooldown > 0) enfriamiento = `${talento.cooldown} turno`;
  if (talento.cooldown > 1) enfriamiento += 's';
  $('#modaltalento-valores').empty();
  $('#modaltalento-valores').append(`Coste: ${coste}`);
  $('#modaltalento-valores').append(`<br>Enfriamiento: ${enfriamiento}`);
  if (talento.acciones == 0)
    $('#modaltalento-valores').append(`<br>No ocupa acción`);
  $('#modaltalento-tipo').html(`Tipo: ${talento.tipo}`);
  $('#myModal').modal('show');
}

!function (t, e) {
  "use strict";
  function n() {
    this.dispatchEvent(new CustomEvent("long-press", { bubbles: !0, cancelable: !0 })), clearTimeout(o), console && console.log && console.log("long-press fired on " + this.outerHTML)
  } var o = null, u = "ontouchstart" in t || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, s = u ? "touchstart" : "mousedown", i = u ? "touchcancel" : "mouseout", a = u ? "touchend" : "mouseup", c = u ? "touchmove" : "mousemove"; "initCustomEvent" in e.createEvent("CustomEvent") && (t.CustomEvent = function (t, n) { n = n || { bubbles: !1, cancelable: !1, detail: void 0 }; var o = e.createEvent("CustomEvent"); return o.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), o }, t.CustomEvent.prototype = t.Event.prototype), e.addEventListener(s, function (t) { var e = t.target, u = parseInt(e.getAttribute("data-long-press-delay") || "1500", 10); o = setTimeout(n.bind(e), u) }), e.addEventListener(a, function (t) { clearTimeout(o) }), e.addEventListener(i, function (t) { clearTimeout(o) }), e.addEventListener(c, function (t) { clearTimeout(o) })
}(this, document);
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, count = 0, val = this.value;
    val = val.split(' ').at(-1);
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      let valmin = val.toLowerCase();
      if (arr[i].includes(val.toLowerCase()) && count < 20) {
        count++; b = document.createElement("DIV");
        b.innerHTML = arr[i].replace(valmin, `<strong>${valmin}</strong>`);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = inp.value.replace(val, this.getElementsByTagName("input")[0].value);
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++; addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      } else {
        closeAllLists();
      } handlerEnter()
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) { if (elmnt != x[i] && elmnt != inp) { x[i].parentNode.removeChild(x[i]); } }
  }
  document.addEventListener("click", function (e) { closeAllLists(e.target); });
}