export default {
  global: {
    componenteFormativo:
      'Seguimiento y evaluación del proceso de servicio al cliente',
    descripcionCurso:
      'En este componente formativo, se plantea una estrategia competitiva sobre la prestación del servicio al cliente, con la finalidad de lograr el cumplimiento de los requerimientos, la satisfacción y la fidelización de estos. De esta manera, se garantiza la trayectoria y permanencia de la organización en el entorno y en el sector al que pertenece.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de servicio al cliente ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Instrumentos y recursos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estrategia del proceso de servicio al cliente',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Seguimiento y evaluación del proceso de servicio al cliente ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Proceso de servicio al cliente',
      referencia:
        'Puente, R. y López, S. (2007). <i>El cliente que reclama es el cliente que más te quiere. DEBATES IESA, 12</i>(3), p.52-59.  ',
      tipo: 'PDF',
      link:
        'https://www.academia.edu/24376076/El_Cliente_Que_Reclama_Es_El_Que_M%C3%A1s_Te_Quiere ',
    },
    {
      tema: 'Proceso de servicio al cliente',
      referencia:
        'Robine, C. (2015). <i>16 herramientas que garantizarán la satisfacción de tus clientes y les encantarán.</i> Aircall. ',
      tipo: 'Artículo',
      link:
        'https://aircall.io/es/blog/atencion-al-cliente/16-herramientas-que-garantizaran-la-satisfaccion-de-tus-clientes-y-les-encantaran/ ',
    },
    {
      tema: 'Proceso de servicio al cliente',
      referencia:
        'Beetrack.com. <i>¿Cómo medir la satisfacción del cliente en logística?</i> ',
      tipo: 'Artículo',
      link:
        'https://www.beetrack.com/es/publicaciones/como-medir-la-satisfaccion-del-cliente-en-logistica?hsCtaTracking=56f1d3e4-9211-4d1c-8b87-5f0a57747377%7Cf78fa6aa-b6c6-49c0-b628-4c3f04bec0edhttps://www.beetrack.com/es/publicaciones/como-medir-la-satisfaccion-del-cliente-en-logistica?hsCtaTracking=56f1d3e4-9211-4d1c-8b87-5f0a57747377%7Cf78fa6aa-b6c6-49c0-b628-4c3f04bec0ed ',
    },
    {
      tema: 'Seguimiento y evaluación del proceso de servicio al cliente',
      referencia:
        'Dorna, J. (2022). <i>¿Por qué la Innovación es importante en la Experiencia de Cliente? WOW!</i> Customer Experience.',
      tipo: 'Artículo',
      link:
        'https://www.wowcx.com/por-que-la-innovacion-es-importante-en-la-cx/ ',
    },
    {
      tema: 'Proceso de servicio al cliente',
      referencia:
        'ALBA, I. (2013). <i>Información y atención al cliente en servicios de arreglos y adaptaciones de artículos en textil y piel.</i> IC Editorial. ',
      tipo: 'Artículo',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43648?page=73',
    },
  ],
  glosario: [
    {
      termino: 'Canales',
      significado:
        'medios por los cuales la empresa espera mantener un permanente contacto con el cliente.',
    },
    {
      termino: 'Ciclo del servicio',
      significado:
        'panorámica general con los momentos de verdad, conformado por los contactos, acciones, pasos y detalles que el cliente experimenta, para la obtención de un producto o servicio de su interés.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona u organización que podría recibir, o recibe, un producto o servicio destinado a esa persona u organización.',
    },
    {
      termino: 'Cultura',
      significado:
        'los deseos y comportamientos de una persona dependen de su cultura. ',
    },
    {
      termino: 'Empatía',
      significado:
        'capacidad de entender los pensamientos y emociones ajenas, de ponerse en el lugar de los demás y compartir sus sentimientos.',
    },
    {
      termino: 'Estrategia',
      significado:
        'dedicación corporativa al servicio y cumplimiento a la promesa de servicio.',
    },
    {
      termino: 'Fidelización',
      significado:
        'estrategia de mercadeo que busca captar y retener clientes.',
    },
    {
      termino: 'Gestión de la calidad',
      significado:
        'proceso de mejora constante que, además, sea compatible con los otros sistemas de control y mejora de la empresa.',
    },
    {
      termino: 'Reclamación',
      significado:
        'expresión o manifestación de una queja, por medio de la cual un consumidor pone en conocimiento que se ha vencido el bien, causándole un daño o perjuicio, lo que implica una reparación o resarcimiento del daño sufrido.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'nivel de conformidad del cliente, cuando realiza una compra o utiliza un servicio.',
    },
  ],
  referencias: [
    {
      referencia:
        'López, P. (2014). <em>Cómo gestionar las reclamaciones de sus clientes</em>. Editorial AENOR.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/53599?page=5',
    },
    {
      referencia:
        'Mateos, M. (2019). <em>Atención al Cliente y Calidad en el Servicio</em>. IC Editorial.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://elibro.net%2fes%2fereader%2fsenavirtual%2f124251',
    },
    {
      referencia:
        'QuestionPro. (s.f.). <em>Manual de Servicio al Cliente: Qué es y cómo crearlo.</em> ',
      link:
        'https://www.questionpro.com/blog/es/manual-de-servicio-al-cliente/',
    },
    {
      referencia:
        'QuestionPro. (s.f.). <em>SistemaPQRS: ¿Qué es y cuáles son sus características?</em>',
      link: 'https://www.questionpro.com/blog/es/sistema-pqrs/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
