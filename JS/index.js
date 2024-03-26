let vida = personaje.estadisticas.vida, pvida = vida;
let energia = personaje.estadisticas.energia, penergia = energia;
let mana = personaje.estadisticas.mana, pmana = mana;

let disparosnormales = 0;
let disparosdebilidad = 0;
let disparosextra = 0;
let disparosreaccion = 0;
let tiradas = [];
let multiplicadores = [];

$(document).ready(() => {
  loadData();
  for (let i = 0; i < personaje.talentos.length; i++) {
    let talento = personaje.talentos[i];
    $('#contenedor-talentos').append(htmlTalento(talento));
  }
  $('.talento').click(e => clickHandlerTalentos(e));
  // $('#notas').change(e => saveData());

  document.querySelectorAll('.talento').forEach(item => {
    item.addEventListener('long-press', e => longpressHandlerTalento(e));
  });

  document.querySelectorAll('#display-vida').forEach(item => {
    item.addEventListener('long-press', e => {
      vida = personaje.estadisticas.vida;
      window.navigator.vibrate("10");
      updateDisplayStats();
      // saveData();
      console.log("Activado long press");
    });
  });
  document.querySelectorAll('#display-energia').forEach(item => {
    item.addEventListener('long-press', e => {
      energia = personaje.estadisticas.energia;
      window.navigator.vibrate("10");
      updateDisplayStats();
      // saveData();
      console.log("Activado long press");
    });
  });
  document.querySelectorAll('#display-mana').forEach(item => {
    item.addEventListener('long-press', e => {
      mana = personaje.estadisticas.mana;
      window.navigator.vibrate("10");
      updateDisplayStats();
      // saveData();
      console.log("Activado long press");
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

$(window).on('beforeunload', function(){
  saveData();
});

function clickHandlerTalentos(e) {
  let nombretalento = e.currentTarget.getAttribute("data-nombre-talento")
  let talento = getTalento(nombretalento);
  updateStats(-talento.costevida, -talento.costeenergia, -talento.costemana);
  window.navigator.vibrate("10");
  e.stopPropagation();
}

function longpressHandlerTalento(e) {
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
  // saveData();
}

function updateDisplayStats() {
  $('#display-vida').html(`HP:${vida}/${personaje.estadisticas.vida}`);
  $('#display-energia').html(`EP:${energia}/${personaje.estadisticas.energia}`);
  $('#display-mana').html(`MP:${mana}/${personaje.estadisticas.mana}`);
}

function updateDisplayDisparos() {
  $('#num-disparos-normales').html(disparosnormales);
  $('#num-disparos-debilidad').html(disparosdebilidad);
  $('#num-disparos-reaccion').html(disparosreaccion);
  let disparostotales = disparosnormales + disparosdebilidad + disparosextra + disparosreaccion;
  $('#num-disparos-totales').html(disparostotales);
  $('.disparo').remove();
  for (let i = 0; i < disparosreaccion; i++) {
    $('#disparos-reaccion').prepend(`<div class="disparo disparo-reaccion" onclick="quitarDisparo('reaccion')"></div>`);
    $('#disparos-totales').prepend(`<div class="disparo disparo-reaccion"></div>`);
  }
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

function updateDisplayTiradas() {
  let disparostotales = disparosnormales + disparosdebilidad + disparosextra + disparosreaccion;

  //Si sobran disparos se quitan
  while(tiradas.length/2 > disparostotales){
    tiradas.splice(tiradas.length - 2, 2);
    multiplicadores.splice(multiplicadores.length - 2 , 2);
    $('#tiradas').children().last().remove();
  }

  //Si faltan disparos se añaden
  while(tiradas.length/2 < disparostotales){
    tiradas.push(0,0);
    multiplicadores.push([],[]);
    let idx = (tiradas.length / 2)-1;
    let codigo = '<div class="tirada">';
    for(let i = 0; i < 2; i++){
      codigo += `<div>`;
      codigo += `<div class="input-group input-group-sm flex-nowrap">
                  ${(i == 0) ? `<span class="input-group-text">${idx+1}:</span>` : `<span class="input-group-text"><i class="fa-solid fa-dove"></i></span>`}
                  <input id="input-tirada-${idx}-${i}" type="number" class="form-control" ${(i==1) ? "tabindex=-1" : ""} onchange="guardarTirada(${idx},${i})" onfocus="verSinMultiplicador(${idx},${i})" onblur="aplicarMultiplicadores(${idx},${i})">
                  <button id="boton-multiplicador-${idx}-${i}" class="btn btn-sm btn-outline-secondary" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    x?
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${idx},${i},0.5)" type="button">x0'5</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${idx},${i},1.3)" type="button">x1'3</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${idx},${i},1.5)" type="button">x1'5</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${idx},${i},2)" type="button">x2</button></li>
                    <div class="input-group mx-2">
                      <input type="text" class="form-control" placeholder="Custom" aria-label="Custom" aria-describedby="button-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="console.log('hola')">+</button>
                      </div>
                    </div>
                  </ul>
                  <button class="btn btn-sm btn-outline-secondary" onclick="bloquear(${idx},${i})"><i class="fa-solid fa-check"></i></button>
                </div>`;
      
      codigo += `<div id="multiplicadores-tirada-${idx}-${i}" class="multiplicadores-tirada">
                </div>`;
      codigo += `</div>`;
    }
    codigo += '</div>'
    $('#tiradas').append(codigo);
  }
}

function guardarTirada(fila, columna){
  let idx = fila * 2 + columna;
  let valor = parseInt($(`#input-tirada-${fila}-${columna}`).val());
  $(`#input-tirada-${fila}-${columna}`).removeClass("tirada-potenciada");
  $(`#input-tirada-${fila}-${columna}`).removeClass("tirada-reducida");
  tiradas[idx++] = valor;
  if(columna == 0){
    tiradas[idx] = valor + 2;
    $(`#input-tirada-${fila}-1`).val(tiradas[idx]);
    $(`#input-tirada-${fila}-1`).removeClass("tirada-potenciada");
    $(`#input-tirada-${fila}-1`).removeClass("tirada-reducida");
  }
}

function bloquear(fila,columna){
  $(`#input-tirada-${fila}-${columna}`).prop("disabled",!$(`#input-tirada-${fila}-${columna}`).prop("disabled"));
  $(`#boton-multiplicador-${fila}-${columna}`).prop("disabled",!$(`#boton-multiplicador-${fila}-${columna}`).prop("disabled"));
}

function añadirMultiplicador(fila,columna,valor){
  let mults = multiplicadores[fila * 2 + columna];
  
  let idx = mults.length;
  mults.push(valor);

  let pill = `<span id="mult-${fila}-${columna}-${idx}" onclick="quitarMultiplicador(${fila},${columna},${idx},${valor})" class="pill">x${valor}</span>`;
  $(`#multiplicadores-tirada-${fila}-${columna}`).append(pill);
  
  aplicarMultiplicadores(fila,columna);
}

function quitarMultiplicador(fila,columna,idx,valor){
  let mults = multiplicadores[fila * 2 + columna];
  let index = mults.indexOf(valor);
  mults.splice(index,1);
  $(`#mult-${fila}-${columna}-${idx}`).remove();

  aplicarMultiplicadores(fila,columna);
}

function aplicarMultiplicadores(fila,columna){
  let base = tiradas[fila * 2 + columna];
  let mults = multiplicadores[fila * 2 + columna];
  let multsP = [], multsN = [];
  let result;

  //Separamos los multiplicadores en positivos y negativos;
  for(let i = 0; i < mults.length; i++){
    let mult = mults[i];
    if(mult >= 1){
      multsP.push(mult);
    } else {
      multsN.push(mult);
    }
  }

  //Aplicamos los multiplicadores positivos
  result = base;
  for (let i = 0; i < multsP.length; i++){
    result += Math.floor((multsP[i]-1) * base);
  }

  //Aplicamos los multiplicadores negativos
  let newBase = result;
  for (let i = 0; i < multsN.length; i++){
    result -= Math.floor(multsN[i] * newBase);
  }

  if (result < 0) result = 0;

  let input = $(`#input-tirada-${fila}-${columna}`);
  input.val(result);
  if(result - base > 0){
    input.addClass("tirada-potenciada");
    input.removeClass("tirada-reducida");
  } else if(result - base < 0) {
    input.removeClass("tirada-potenciada");
    input.addClass("tirada-reducida");
  } else {
    input.removeClass("tirada-potenciada");
    input.removeClass("tirada-reducida");
  }
}

function verSinMultiplicador(fila,columna){
  if(tiradas[fila * 2 + columna] == 0) return;

  let input = $(`#input-tirada-${fila}-${columna}`);
  input.val(tiradas[fila * 2 + columna]);
  input.removeClass("tirada-potenciada");
  input.removeClass("tirada-reducida");
}

function añadirDisparo(tipo) {
  switch (tipo) {
    case "normal":
      disparosnormales++;
      break;
    case "debilidad":
      disparosdebilidad++;
      break;
    case "reaccion":
      disparosreaccion++;
      break;
  }
  recalcularDisparosExtra();
  updateDisplayDisparos();
  updateDisplayTiradas();
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
    case "reaccion":
      if (disparosreaccion > 0)
        disparosreaccion--;
      break;
  }
  recalcularDisparosExtra();
  updateDisplayDisparos();
  updateDisplayTiradas();
}

function recalcularDisparosExtra() {
  disparosextra = Math.floor((disparosnormales + disparosdebilidad) / 2);
}

function limpiarDisparos() {
  disparosnormales = 0;
  disparosdebilidad = 0;
  disparosextra = 0;
  disparosreaccion = 0;
  updateDisplayDisparos();
  updateDisplayTiradas();
}

function htmlTalento(talento, sub = false) {
  res = `<div data-nombre-talento="${talento.nombre}" data-long-press-delay="500" class="container container-fluid d-flex flex-column talento${sub ? ' subtalento' : ''}">
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
              <div class="border px-2 flex-fill">
                <span class="medidor-vida">HP: ${talento.costevida}</span>
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
  } else if (talento.costevida > 0) {
    coste = `${talento.costevida} Vida`;
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