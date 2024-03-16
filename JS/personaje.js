let personaje = {
  "nombre": "Zen'Reel",
  "clase": "-",
  "nivel": 10,
  "estadisticas": {
    "vida": 27,
    "energia": 43,
    "mana": 25
  },
  "atributos": {
    "fuerza": 4,
    "destreza": 12,
    "resistencia": 9,
    "agilidad": 6,
    "inteligencia": 3,
    "manipulacion": 5,
    "velo": 9,
    "voluntad": 9,
    "astucia": 5,
    "carisma": 3,
    "sensitividad": 6,
    "vigor": 9
  },
  "habilidades": {
    "instinto": 9,
    "armas_distancia": 10,
    "determinacion": 7,
    "prestidigitación": 10
  },
  "talentos": [
    {
      "nombre": "Mantra de Observación",
      "descripción": "El usuario es capaz de generar un punto débil a su objetivo, lo que le permite ignorar cualquier resistencia o inmunidad de dicho objetivo y ganar 3 éxitos adicionales como daño crítico. Si se tiene instinto 7 no ocupa acción",
      "tipo": "Mantra",
      "activa": true,
      "costeenergia": 2,
      "costemana":0,
      "costevida":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[]
    },
    {
      "nombre": "Alas de Obsidiana",
      "descripción": "+2 de vida permanente.\n+3 de armadura física y mágica. Duplica las estadísticas defensivas del portador mientras esté activo. Moverse o atacar finaliza la duración. Puede utilizarse para proteger unidades colocandose en la misma casilla. <br><br> Permite crear corrientes de aire al batir las alas.",
      "tipo": "Bendición",
      "activa": true,
      "costeenergia": 1,
      "costemana":0,
      "costevida":0,
      "cooldown": 1,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Ojo certero",
      "descripción": "Permite al usuario duplicar el rango de ataque con su arma. El daño infligido por el ataque es el de un ataque normal +2, aumentando en 1 el daño por cada 2 casillas que haya entre el usuario y el objetivo del ataque.",
      "tipo": "Habilidad especial",
      "activa": true,
      "costeenergia": 4,
      "costemana":0,
      "costevida":0,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Demostración de habilidad",
      "descripción": "Permite al usuario aumentar repentinamente sus reflejos, lo que le otorga una acción adicional en el turno de Acción.\nDebe vaticinarse al comienzo del turno de Acción del usuario.\nSe Tira Agilidad+Prestidigitación (Dificultad 8)",
      "tipo": "Habilidad especial",
      "activa": true,
      "costeenergia": 3,
      "costemana":0,
      "costevida":0,
      "cooldown": 3,
      "acciones": 0,
      "subtalentos":[]
    },
    {
      "nombre": "Potenciación",
      "descripción": "+3 en el atributo seleccionado durante 30min.\n<b>Atributos desbloqueados</b>: Fuerza, Destreza, Resistencia, Velo\n<b>Atributos por desbloquear</b>: Agilidad, Sensitividad",
      "tipo": "Arte de combate",
      "activa": true,
      "costeenergia": 3,
      "costemana":0,
      "costevida":0,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Gran pajaro de (elemento)",
      "descripción": "Dispara un pájaro de energia vital que hace el daño de un disparo normal x3 en un area con forma de + en el punto impactado. Cuesta 4 de vida.",
      "tipo": "Técnica inventada",
      "activa": true,
      "costeenergia": 0,
      "costemana":0,
      "costevida":4,
      "cooldown": 3,
      "acciones": 2,
      "subtalentos":[]
    },
    {
      "nombre": "Giro fuego (Nombre WIP)",
      "descripción": "Un disparo de fuego que no hace daño pero aplica el estado \"quemado\" al objetivo.\nEl objetivo recibe 5 daños al final de cada turno.",
      "tipo": "Técnica inventada",
      "activa": true,
      "costeenergia": 0,
      "costemana":5,
      "costevida":0,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Emblema viento del norte",
      "descripción": "Una vez por combate, cuando un aliado esté a punto de recibir un golpe letal obtienes una acción de ataque contra el agresor. Esta acción ocurre antes de que el oponente realice su ataque.",
      "tipo": "Emblema",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "costevida":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[]
    },
    {
      "nombre": "Disparo de cerca",
      "descripción": "Ignora la distancia mínima para atacar con arco.",
      "tipo": "Técnica aprendida",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "costevida":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[]
    }
  ]
}
