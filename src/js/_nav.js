export default {
  items: [
    {
      name: 'Inicio',
      url: '/inicio',
      icon: 'icon-graduation',
      badge: {
        variant: 'info',
        text: 'Nuevo',
      },
    },
    {
      title: true,
      name: 'Solicitudes',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Liberacion Articulo 58',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Peticion Estudiantil',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Procesos',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Inscripcion Acad.',
      url: '/base',
      icon: 'icon-puzzle',
    },
    {
      name: 'Adicion, Cambio o Retiro',
      url: '/base',
      icon: 'icon-puzzle',
    },
    {
      title: true,
      name: 'Consultas',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Horarios',
      url: '/datos',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Horario Por Seccion',
          url: '/datos/horario-seccion',
          icon: 'icon-cursor',
        },
       
      ],
    },
    {
      name: 'Datos Academicos',
      url: '/datos',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Historico Academico',
          url: '/datos/historico-academico',
          icon: 'icon-cursor',
        },
        {
          name: 'Situacion Academica',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Notas Parciales',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Datos Administrativos',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Materias',
    },
    {
      name: 'Administracion',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Cargar Notas',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Secciones',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Estudiantes Inscritos',
          url: '/404',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Desconectar',
      url: '#',
      icon: 'icon-layers',
      variant: 'danger',
    },
  ],
};
