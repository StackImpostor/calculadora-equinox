let personaje = {
  "nombre": "Zen'Reel",
  "clase": "arquero",
  "nivel": 10,
  "estadisticas": {
    "vida": 11,
    "energia": 26,
    "mana": 11
  },
  "atributos": {
    "fuerza": 3,
    "destreza": 8,
    "resistencia": 6,
    "inteligencia": 1,
    "manipulacion": 4,
    "velo": 4,
    "astucia": 5,
    "agilidad": 5,
    "sensitividad": 5
  },
  "habilidades": {
    "instinto": 5,
    "armas_distancia": 10,
    "determinacion": 6,
    "prestidigitación": 10
  },
  "talentos": [
    {
      "nombre": "Esencia elemental",
      "descripción": "El arquero ha aprendido a dominar los flujos elementales, lo que le permite realizar diferentes poderes elementales en función de su nivel de Instinto.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos": [
        {
          "nombre": "Flecha del Hechicero",
          "descripción": "El arquero crea una flecha básica de energia con la que puede realizar cualquier ataque o Talento",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 1,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Flecha Elemental",
          "descripción": "El arquero puede dotar sus flechas de los diferentes elementos de Equinox. Agua, Aire, Fuego, Luz, Oscuridad y Tierra.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 0,
          "costemana": 1,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        }
      ]
    },
    {
      "nombre": "Lluvia de flechas",
      "descripción": "El arquero causa una lluvia de flechas que causa el daño de un ataque normal +2 dados de daño adivional a todos los objetivos alcanzados. Lluvia de flechas no puede ser bloqueada de ninguna forma e ignora cualquier cobertura, a excepción de si es afectada por un Talento. Lluvia de flechas actua en cada casilla de forma independiente, golpeando varias veces a un mismo objetivo si éste ocupa varias casillas.\nArea de efecto: 1 casilla hacia todas las direcciones. (un 3x3)",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 0,
      "costemana": 2,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Ojo de Halcón",
      "descripción": "El arquero domina el arco con una maestría natural en si mismo, provocando que obtenga diversas pasivas relacionadas con la capacidad de inflingir daño con el arco dependiendo del nivel actual de la habilidad Armas Distancia que posea el arquero.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos": [
        {
          "nombre": "Tiro perfecto",
          "descripción": "El arquero obtiene 2 daños directos adicionales con sus ataques con el arco siempre que golpeen el punto débil de un objetivo.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Andanada Certera",
          "descripción": "El arquero obtiene 1 dado de daño adicional de forma acumulable por cada objetivo diferente al cual haya atacado durante su turno. Los efectos de Andanada certera se eliminan al inicio de cada turno.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Fuerza Letal",
          "descripción": "Los ataques realizados con el arco por el arquero ignoran la inmunidad y la resistencia al daño Penetrante, provocando que causen daño normal.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Mil flechas",
          "descripción": "Siempre que el arquero golpee el punto débil de su objetivo, le permite lanzar un segundo ataque al mismo objetivo sin consumir acción de manera totalmente gratuita. Los efectos de Mil flechas solo pueden realizarse una vez por turno a un mismo objetivo.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        }
      ]
    },
    {
      "nombre": "Precisión perfecta",
      "descripción": "El arquero posee un dominio excelso del arco, lo que le permite ser capaz de realizar diversas maniobras especiales con los arcos, obteniendo más dependiendo del nivel actual de Clase del arquero.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos": [
        {
          "nombre": "Parábola",
          "descripción": "Las flechas lanzadas por el arquero ignoran a las unidades posicionadas delante del objetivo o en la trayectoria de la flecha hacia el objetivo, provocando que ignore cualquier bloqueo o cobertura que no sea afectada mediante un Talento.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Flechas pesadas",
          "descripción": "Las flechas lanzadas por el arquero no pueden ser desviadas ni bloqueadas por corrientes de aire de ningún tipo o por bloqueos o desvíos que no estén afectados por un talento. Adicionalmente, los ataques con el arco del arquero infligen 3 dados de daño adicional a las unidades de tipo Volador.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Tirador lejano",
          "descripción": "El arquero obtiene 2 de rango adicional al atacar con arcos.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Descarga de flechas",
          "descripción": "Siempre que el arquero sea atacado, gana una acción de ataque con el arco contra dicho agresor, efectuando el ataque en el mismo momento que su agresor. El rango de ataque mínimo se ve ignorado por los ataques producidos mediante Descarga de flechas. No pueden utilizarse talentos mediante Descarga de flechas.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 1,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "El infalible",
          "descripción": "Los ataques del arquero no pueden ser esquivados de ninguna manera.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        }
      ]
    },
    {
      "nombre": "Racimo de flechas",
      "descripción": "El arquero dispara un número de flechas igual a Prestidigitación/3, siempre redondeando hacia arriba, pero obligando al arquero a elegir diferentes objetivos con cada uno de sus ataques.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 3,
      "costemana": 0,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Saeta",
      "descripción": "Los arqueros son extremadamente habilidosos con el arco, lo cual les permite adquirir diversas activas de extrema utilidad las cuales les permiten salir de más de un apuro. Mediante Saeta, el Arquero adquiere activas dependiendo de si cumple determinados requisitos relacionados con las Habilidades.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos": [
        {
          "nombre": "Maniobra defensiva",
          "descripción": "El arquero salta a una casilla adyacente sin gastar una acción. Si el arquero posee el talento Ojo de halcón, dispara un ataque normal de manera automática a todos los objetivos que se encontrasen a 1 casilla adyacente o diagonal de la casilla en la que se encontraba.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 2,
          "costemana": 0,
          "cooldown": 3,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Interceptar",
          "descripción": "El arquero es capaz de bloquear cualquier proyectil físico disparando uno de sus proyectiles, siempre y cuando el objetivo del ataque sea el arquero o se encuentre dentro del rango de ataque del arquero. Si el arquero posee el talento Esencia elemental también puede bloquear cualquier proyectil mágico. Interceptar no ocupa acción si se posee el talento Precisión perfecta",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 2,
          "costemana": 0,
          "cooldown": 2,
          "acciones": 0,
          "subtalentos": []
        },
        {
          "nombre": "Decisión táctica",
          "descripción": "El arquero puede variar el objetivo de su ataque de forma inmediata en cualquier momento de la batalla, con la penalización de poseer +2 de dificultad para acertar. No puede usarse para redirigir 2 veces el mismo proyectil en un mismo turno.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 1,
          "costemana": 0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos": []
        }
      ]
    },
    {
      "nombre": "Tiro cargado",
      "descripción": "El arquero acumula energia durante todo el turno y libera un ataque devastador al final del turno que inflinge daño x1'5 a todos los objetivos golpeados y atraviesa a todos los objetivos golpeados. Tiro cargado se puede esquivar como un ataque normal y no se ve afectado por parábola.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 3,
      "costemana": 0,
      "cooldown": 3,
      "acciones": 100,
      "subtalentos": []
    },
    {
      "nombre": "Ultima baza",
      "descripción": "El arquero lanza un ataque que inflige mayor daño dependiendo de la cercanía del objetivo. Ignora el rango mínimo de ataque.\nDaño causado:\n- >= 3 casillas: +0\n- 2 casillas: +1 dado\n<= 1 casilla: +3 dados.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 2,
      "costemana": 0,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Veleta",
      "descripción": "El Arquero imbuye en maná su flecha y la lanza cerca de sus oponentes, invocando la furia del viento con ellas. Mediante Veleta, el Arquero lanza una flecha a una casilla, la puede provocar dos efectos diferentes. Veleta no puede escogerse si no se posee el Talento Flecha elemental.\nEfectos:\n- Ojo del huracán: Todas las unidades en las 8 casillas que rodean la casilla afectada se ven atraidas a dicha casilla, impidiendoles usar desplazamientos o moverse ese turno.\n- Ráfaga: Todas las unidades que se encuentren en las casillas adyacentes a la casilla afectada se ven lanzadas una casilla. Si la casilla en cuestión está ocupada, Ráfaga no tiene efecto.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 0,
      "costemana": 2,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Vigilancia absoluta",
      "descripción": "El arquero dispara a todo aquel que realice un desplazamiento o una acción de movimiento en su turno de acción, con daño de un ataque normal y cancelando el movimiento si el ataque inflinge daño. Estos ataques no están considerados un ataque, por lo que no se aplican las normas de un ataque directo o un ataque múltiple.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos": []
    },
    {
      "nombre": "Mantra de Observación",
      "descripción": "El usuario es capaz de generar un punto débil a su objetivo, lo que le permite ignorar cualquier resistencia o inmunidad de dicho objetivo y ganar 3 éxitos adicionales como daño crítico. Si se tiene instinto 7 no ocupa acción",
      "tipo": "mantra",
      "activa": true,
      "costeenergia": 2,
      "costemana": 0,
      "cooldown": 0,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Alas de Obsidiana",
      "descripción": "+2 de vida permanente.\n+3 de armadura física y mágica. Duplica las estadísticas defensivas del portador mientras esté activo. Moverse o atacar finaliza la duración. Puede utilizarse para proteger unidades colocandose en la misma casilla.",
      "tipo": "bendición",
      "activa": true,
      "costeenergia": 1,
      "costemana": 0,
      "cooldown": 1,
      "acciones": 1,
      "subtalentos": []
    },
    {
      "nombre": "Ojo certero",
      "descripción": "Permite al usuario duplicar el rango de ataque con su arma. El daño infligido por el ataque es el de un ataque normal +2, aumentando en 1 el daño por cada 2 casillas que haya entre el usuario y el objetivo del ataque.",
      "tipo": "habilidad especial",
      "activa": true,
      "costeenergia": 4,
      "costemana": 0,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos": []
    }
  ]
}
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