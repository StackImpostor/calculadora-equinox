let vida = personaje.estadisticas.vida, pvida = vida;
let energia = personaje.estadisticas.energia, penergia = energia;
let mana = personaje.estadisticas.mana, pmana = mana;
let elementoPorDefecto = "fuego";

let disparosnormales = 0;
let disparosdebilidad = 0;
let disparosextra = 0;
let disparosreaccion = 0;
let tiradas = [];
let multiplicadores = [];
let elementos = [];

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
    elementos.pop();
    $('#tiradas').children().last().remove();
  }

  //Si faltan disparos se añaden
  while(tiradas.length/2 < disparostotales){
    tiradas.push(0,0);
    multiplicadores.push([],[]);
    elementos.push("placeholder");
    let idx = (tiradas.length / 2)-1;
    let codigo = htmlTirada(idx);
    $('#tiradas').append(codigo);
    cambiarElemento(idx,elementoPorDefecto);
  }
}

function guardarTirada(fila, columna){
  let idx = fila * 2 + columna;
  let valor = parseInt($(`#input-tirada-${fila}-${columna}`).val());
  tiradas[idx++] = valor;
  if(columna == 0){
    tiradas[idx] = valor + 2;
    $(`#input-tirada-${fila}-1`).val(tiradas[idx]);
    $(`#input-tirada-${fila}-1`).trigger("blur");
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

function añadirMultiplicadorCustom(fila,columna){
  let input = $(`#multiplicador-custom-${fila}-${columna}`);
  let valor = input.val();
  //Reemplazamos las , y ' por .
  valor = valor.replace(",",".");
  valor = valor.replace("'",".");
  valor = Number.parseFloat(valor);

  input.val("");
  añadirMultiplicador(fila,columna,valor);
}

function quitarMultiplicador(fila,columna,idx,valor){
  let mults = multiplicadores[fila * 2 + columna];
  let index = mults.indexOf(valor);
  mults.splice(index,1);

  if(idx >= 0){
    $(`#mult-${fila}-${columna}-${idx}`).remove();
  } else {
    let spans = $(`#multiplicadores-tirada-${fila}-${columna}`).children(`span:contains('x${valor}')`);
    if(spans.length > 0){
      spans[0].remove();
    }
  }
  
  aplicarMultiplicadores(fila,columna);
}

function aplicarMultiplicadores(fila,columna){
  let input = $(`#input-tirada-${fila}-${columna}`);
  let base = tiradas[fila * 2 + columna];
  let mults = multiplicadores[fila * 2 + columna];
  let multsP = [], multsN = [];
  let result;

  //Si el input está vacio abortamos
  if(!input.val()) return;

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

function cambiarElementoPorDefecto(elemento = "hielo"){
  let prevElem = elementoPorDefecto;
  elementoPorDefecto = elemento;
  $("#selectElementoPorDefecto").html(`<img src="img/${elemento}.svg" alt="${elemento}" class="imagen-elemento">`)

  //Si todos los disparos tienen el elmento por defecto, cambiarlos.
  if(elementos.length > 0){
    let todosPorDefecto = true;
    for(let i = 0; i < elementos.length && todosPorDefecto; i++){
      todosPorDefecto = todosPorDefecto && elementos[i] === prevElem;
    }
    if(todosPorDefecto){
      for(let i = 0; i < elementos.length; i++){
        cambiarElemento(i,elemento);
      }
    }
  }
}

function cambiarElemento(fila,elemento){
  let prevElem = elementos[fila];
  elementos[fila] = elemento;
  $(`#select-elemento-${fila}`).html(`<img src="img/${elemento}.svg" alt="${elemento}" class="imagen-elemento">`);

  //Si el elemento es fuego añadir multiplicador de 1.3
  if(elemento === "fuego"){
    añadirMultiplicador(fila,0,1.3);
    añadirMultiplicador(fila,1,1.3);
  }
  //Si el elemento anterior era fuego quitar multiplicador de 1.3
  if(prevElem === "fuego"){
    quitarMultiplicador(fila,0,-1,1.3); //-1 significa el primero que te encuentres
    quitarMultiplicador(fila,1,-1,1.3);
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

function togglePajaro(fila,columna){

  if($(`#boton-multiplicador-${fila}-${columna}`).is(":hidden")){
    $(`#input-tirada-${fila}-${columna}`).css("visibility", "");
    $(`#boton-multiplicador-${fila}-${columna}`).show("fast");
    $(`#boton-bloqueo-${fila}-${columna}`).show("fast");
    $(`#multiplicadores-tirada-${fila}-${columna}`).show("fast");
  } else {
    $(`#input-tirada-${fila}-${columna}`).css("visibility", "hidden");
    $(`#boton-multiplicador-${fila}-${columna}`).hide("fast");
    $(`#boton-bloqueo-${fila}-${columna}`).hide("fast");
    $(`#multiplicadores-tirada-${fila}-${columna}`).hide("fast");
  }

  
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

function htmlTirada(fila){
  let codigo = '<div class="tirada">';
    for(let i = 0; i < 2; i++){
      codigo += `<div>`;
      codigo += `<div class="input-group input-group-sm flex-nowrap">`

      if(i == 0){
        codigo += `<span id="select-elemento-${fila}" class="input-group-text selector-elemento-fila" data-bs-toggle="dropdown"><img src="img/${elementoPorDefecto}.svg" alt="${elementoPorDefecto}" class="imagen-elemento"></span>`;
        codigo += `<ul class="dropdown-menu selector-elementos" aria-labelledby="selectElementoPorDefecto">
                    <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'fuego')"><img src="img/fuego.svg" alt="Fuego" class="imagen-elemento"></a></li>
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'agua')"><img src="img/agua.svg" alt="Agua" class="imagen-elemento"></a></li> -->
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'tierra')"><img src="img/tierra.svg" alt="Tierra" class="imagen-elemento"></a></li> -->
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'viento')"><img src="img/viento.svg" alt="Viento" class="imagen-elemento"></a></li> -->
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'luz'})"><img src="img/luz.svg" alt="Luz" class="imagen-elemento"></a></li> -->
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'oscuridad')"><img src="img/oscuridad.svg" alt="Oscuridad" class="imagen-elemento"></a></li> -->
                    <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'hielo')"><img src="img/hielo.svg" alt="Hielo" class="imagen-elemento"></a></li>
                    <!-- <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'rayo')"><img src="img/rayo.svg" alt="Rayo" class="imagen-elemento"></a></li> -->
                    <li><a class="dropdown-item" href="#" onclick="cambiarElemento(${fila},'fisico')"><img src="img/fisico.svg" alt="Físico" class="imagen-elemento"></a></li>
                  </ul>`;
      } else {
        codigo += `<span class="input-group-text" onclick="togglePajaro(${fila},${i})"><i class="fa-solid fa-dove"></i></span>`;
      }

      // codigo += `${(i == 0) ? `<span class="input-group-text"><img src="img/${elementoPorDefecto}.svg" alt="${elementoPorDefecto}" class="imagen-elemento"></span>` : `<span class="input-group-text"><i class="fa-solid fa-dove"></i></span>`}`
      codigo += ` <input id="input-tirada-${fila}-${i}" type="number" class="form-control" ${(i==1) ? "tabindex=-1" : ""} onchange="guardarTirada(${fila},${i})" onfocus="verSinMultiplicador(${fila},${i})" onblur="aplicarMultiplicadores(${fila},${i})">
                  <button id="boton-multiplicador-${fila}-${i}" class="btn btn-sm btn-outline-secondary" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    x?
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${fila},${i},0.5)" type="button">x0'5</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${fila},${i},1.3)" type="button">x1'3</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${fila},${i},1.5)" type="button">x1'5</button></li>
                    <li><button class="dropdown-item" onclick="añadirMultiplicador(${fila},${i},2)" type="button">x2</button></li>
                    <li><hr class="dropdown-divider"></li>
                    <li>
                      <div class="input-group">
                        <input type="number" id="multiplicador-custom-${fila}-${i}" class="form-control" placeholder="Custom" aria-label="Custom" aria-describedby="button-addon2">
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="añadirMultiplicadorCustom(${fila},${i})">+</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button id="boton-bloqueo-${fila}-${i}" class="btn btn-sm btn-outline-secondary" onclick="bloquear(${fila},${i})"><i class="fa-solid fa-check"></i></button>
                </div>`;
      
      codigo += `<div id="multiplicadores-tirada-${fila}-${i}" class="multiplicadores-tirada">
                </div>`;
      codigo += `</div>`;
    }
    codigo += '</div>'
  return codigo;
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