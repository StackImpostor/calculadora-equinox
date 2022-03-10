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
      "costemana":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[
        {
          "nombre": "Flecha del Hechicero",
          "descripción": "El arquero crea una flecha básica de energia con la que puede realizar cualquier ataque o Talento",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 1,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Flecha Elemental",
          "descripción": "El arquero puede dotar sus flechas de los diferentes elementos de Equinox. Agua, Aire, Fuego, Luz, Oscuridad y Tierra.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 0,
          "costemana":1,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        }
      ]
    },
    {
      "nombre": "Lluvia de flechas",
      "descripción": "El arquero causa una lluvia de flechas que causa el daño de un ataque normal +2 dados de daño adivional a todos los objetivos alcanzados. Lluvia de flechas no puede ser bloqueada de ninguna forma e ignora cualquier cobertura, a excepción de si es afectada por un Talento. Lluvia de flechas actua en cada casilla de forma independiente, golpeando varias veces a un mismo objetivo si éste ocupa varias casillas.\nArea de efecto: 1 casilla hacia todas las direcciones. (un 3x3)",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 0,
      "costemana":2,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Ojo de Halcón",
      "descripción": "El arquero domina el arco con una maestría natural en si mismo, provocando que obtenga diversas pasivas relacionadas con la capacidad de inflingir daño con el arco dependiendo del nivel actual de la habilidad Armas Distancia que posea el arquero.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[
        {
          "nombre": "Tiro perfecto",
          "descripción": "El arquero obtiene 2 daños directos adicionales con sus ataques con el arco siempre que golpeen el punto débil de un objetivo.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Andanada Certera",
          "descripción": "El arquero obtiene 1 dado de daño adicional de forma acumulable por cada objetivo diferente al cual haya atacado durante su turno. Los efectos de Andanada certera se eliminan al inicio de cada turno.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Fuerza Letal",
          "descripción": "Los ataques realizados con el arco por el arquero ignoran la inmunidad y la resistencia al daño Penetrante, provocando que causen daño normal.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Mil flechas",
          "descripción": "Siempre que el arquero golpee el punto débil de su objetivo, le permite lanzar un segundo ataque al mismo objetivo sin consumir acción de manera totalmente gratuita. Los efectos de Mil flechas solo pueden realizarse una vez por turno a un mismo objetivo.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        }
      ]
    },
    {
      "nombre": "Precisión perfecta",
      "descripción": "El arquero posee un dominio excelso del arco, lo que le permite ser capaz de realizar diversas maniobras especiales con los arcos, obteniendo más dependiendo del nivel actual de Clase del arquero.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[
        {
          "nombre": "Parábola",
          "descripción": "Las flechas lanzadas por el arquero ignoran a las unidades posicionadas delante del objetivo o en la trayectoria de la flecha hacia el objetivo, provocando que ignore cualquier bloqueo o cobertura que no sea afectada mediante un Talento.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Flechas pesadas",
          "descripción": "Las flechas lanzadas por el arquero no pueden ser desviadas ni bloqueadas por corrientes de aire de ningún tipo o por bloqueos o desvíos que no estén afectados por un talento. Adicionalmente, los ataques con el arco del arquero infligen 3 dados de daño adicional a las unidades de tipo Volador.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Tirador lejano",
          "descripción": "El arquero obtiene 2 de rango adicional al atacar con arcos.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Descarga de flechas",
          "descripción": "Siempre que el arquero sea atacado, gana una acción de ataque con el arco contra dicho agresor, efectuando el ataque en el mismo momento que su agresor. El rango de ataque mínimo se ve ignorado por los ataques producidos mediante Descarga de flechas. No pueden utilizarse talentos mediante Descarga de flechas.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 1,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "El infalible",
          "descripción": "Los ataques del arquero no pueden ser esquivados de ninguna manera.",
          "tipo": "talento",
          "activa": false,
          "costeenergia": 0,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        }
      ]
    },
    {
      "nombre": "Racimo de flechas",
      "descripción": "El arquero dispara un número de flechas igual a Prestidigitación/3, siempre redondeando hacia arriba, pero obligando al arquero a elegir diferentes objetivos con cada uno de sus ataques.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 3,
      "costemana":0,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Saeta",
      "descripción": "Los arqueros son extremadamente habilidosos con el arco, lo cual les permite adquirir diversas activas de extrema utilidad las cuales les permiten salir de más de un apuro. Mediante Saeta, el Arquero adquiere activas dependiendo de si cumple determinados requisitos relacionados con las Habilidades.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[
        {
          "nombre": "Maniobra defensiva",
          "descripción": "El arquero salta a una casilla adyacente sin gastar una acción. Si el arquero posee el talento Ojo de halcón, dispara un ataque normal de manera automática a todos los objetivos que se encontrasen a 1 casilla adyacente o diagonal de la casilla en la que se encontraba.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 2,
          "costemana":0,
          "cooldown": 3,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Interceptar",
          "descripción": "El arquero es capaz de bloquear cualquier proyectil físico disparando uno de sus proyectiles, siempre y cuando el objetivo del ataque sea el arquero o se encuentre dentro del rango de ataque del arquero. Si el arquero posee el talento Esencia elemental también puede bloquear cualquier proyectil mágico. Interceptar no ocupa acción si se posee el talento Precisión perfecta",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 2,
          "costemana":0,
          "cooldown": 2,
          "acciones": 0,
          "subtalentos":[]
        },
        {
          "nombre": "Decisión táctica",
          "descripción": "El arquero puede variar el objetivo de su ataque de forma inmediata en cualquier momento de la batalla, con la penalización de poseer +2 de dificultad para acertar. No puede usarse para redirigir 2 veces el mismo proyectil en un mismo turno.",
          "tipo": "talento",
          "activa": true,
          "costeenergia": 1,
          "costemana":0,
          "cooldown": 0,
          "acciones": 0,
          "subtalentos":[]
        }
      ]
    },
    {
      "nombre": "Tiro cargado",
      "descripción": "El arquero acumula energia durante todo el turno y libera un ataque devastador al final del turno que inflinge daño x1'5 a todos los objetivos golpeados y atraviesa a todos los objetivos golpeados. Tiro cargado se puede esquivar como un ataque normal y no se ve afectado por parábola.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 3,
      "costemana":0,
      "cooldown": 3,
      "acciones": 100,
      "subtalentos":[]
    },
    {
      "nombre": "Ultima baza",
      "descripción": "El arquero lanza un ataque que inflige mayor daño dependiendo de la cercanía del objetivo. Ignora el rango mínimo de ataque.\nDaño causado:\n- >= 3 casillas: +0\n- 2 casillas: +1 dado\n<= 1 casilla: +3 dados.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 2,
      "costemana":0,
      "cooldown": 2,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Veleta",
      "descripción": "El Arquero imbuye en maná su flecha y la lanza cerca de sus oponentes, invocando la furia del viento con ellas. Mediante Veleta, el Arquero lanza una flecha a una casilla, la puede provocar dos efectos diferentes. Veleta no puede escogerse si no se posee el Talento Flecha elemental.\nEfectos:\n- Ojo del huracán: Todas las unidades en las 8 casillas que rodean la casilla afectada se ven atraidas a dicha casilla, impidiendoles usar desplazamientos o moverse ese turno.\n- Ráfaga: Todas las unidades que se encuentren en las casillas adyacentes a la casilla afectada se ven lanzadas una casilla. Si la casilla en cuestión está ocupada, Ráfaga no tiene efecto.",
      "tipo": "talento",
      "activa": true,
      "costeenergia": 0,
      "costemana":2,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Vigilancia absoluta",
      "descripción": "El arquero dispara a todo aquel que realice un desplazamiento o una acción de movimiento en su turno de acción, con daño de un ataque normal y cancelando el movimiento si el ataque inflinge daño. Estos ataques no están considerados un ataque, por lo que no se aplican las normas de un ataque directo o un ataque múltiple.",
      "tipo": "talento",
      "activa": false,
      "costeenergia": 0,
      "costemana":0,
      "cooldown": 0,
      "acciones": 0,
      "subtalentos":[]
    },
    {
      "nombre": "Mantra de Observación",
      "descripción": "El usuario es capaz de generar un punto débil a su objetivo, lo que le permite ignorar cualquier resistencia o inmunidad de dicho objetivo y ganar 3 éxitos adicionales como daño crítico. Si se tiene instinto 7 no ocupa acción",
      "tipo": "mantra",
      "activa": true,
      "costeenergia": 2,
      "costemana":0,
      "cooldown": 0,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Alas de Obsidiana",
      "descripción": "+2 de vida permanente.\n+3 de armadura física y mágica. Duplica las estadísticas defensivas del portador mientras esté activo. Moverse o atacar finaliza la duración. Puede utilizarse para proteger unidades colocandose en la misma casilla.",
      "tipo": "bendición",
      "activa": true,
      "costeenergia": 1,
      "costemana":0,
      "cooldown": 1,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Ojo certero",
      "descripción": "Permite al usuario duplicar el rango de ataque con su arma. El daño infligido por el ataque es el de un ataque normal +2, aumentando en 1 el daño por cada 2 casillas que haya entre el usuario y el objetivo del ataque.",
      "tipo": "habilidad especial",
      "activa": true,
      "costeenergia": 4,
      "costemana":0,
      "cooldown": 3,
      "acciones": 1,
      "subtalentos":[]
    },
    {
      "nombre": "Demostración de habilidad",
      "descripción": "Permite al usuario aumentar repentinamente sus reflejos, lo que le otorga una acción adicional en el turno de Acción.\nDebe vaticinarse al comienzo del turno de Acción del usuario.\nSe Tira Agilidad+Prestidigitación (Dificultad 8)",
      "tipo": "habilidad especial",
      "activa": true,
      "costeenergia": 3,
      "costemana":0,
      "cooldown": 3,
      "acciones": 0,
      "subtalentos":[]
    }
  ]
}