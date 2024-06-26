import { INavData } from '@coreui/angular';

/*export const navItems: INavData[] = [
  {
    name: 'inicio',
    url: '/inicio',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },

  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];*/

export const navItem: INavData[] = [

  {
    name: 'Cuentas',
    url: '/administrador_nav_1',
    permission:['super_administrador'],
    iconComponent: { name: 'cil-user-follow' },
    children: [
      // {
      //   name: 'Perfiles político',
      //   url: '/administrador_nav_1/perfil_politico',
      //   permission:['super_administrador'],
      // },
      {
        name: 'Administradores',
        url: '/administrador_nav_1/admin',
        permission:['super_administrador'],
      },
      {
        name: 'Asambleístas',
        url: '/administrador_nav_1/asambleistas',
        permission:['super_administrador'],
      },
      {
        name: 'Delegados',
        url: '/administrador_nav_1/delegados',
        permission:['super_administrador'],
      }
    ]
  },
  {
    name: 'Cuentas RC5',
    url: '/administrador_nav_1_1',
    permission:['super_administrador'],
    iconComponent: { name: 'cil-user-follow' },
    children: [
      // {
      //   name: 'Perfiles político',
      //   url: '/administrador_nav_1/perfil_politico',
      //   permission:['super_administrador'],
      // },
      {
        name: 'Nacionales',
        url: '/administrador_nav_1_1/nacional',
        permission:['super_administrador'],
      },
      {
        name: 'Provinciales',
        url: '/administrador_nav_1_1/provincial',
        permission:['super_administrador'],
      },
      {
        name: 'Cantonales',
        url: '/administrador_nav_1_1/cantonal',
        permission:['super_administrador'],
      }
    ]
  },
  {
    name:'Categorías',
    url: '/admin-categoria/form-categoria',
    iconComponent: { name: 'cil-list' },
    permission:['super_administrador'],
  },
  {
    name:'Adherentes',
    url: '/administrador_nav_1_2/adherentes',
    iconComponent: { name: 'cil-filter-square' },
    permission:['super_administrador'],
  },
  {
    name:'Reportes',
    url: '/administrador_nav_1_2/reportes',
    iconComponent: { name: 'cil-share-boxed' },
    permission:['super_administrador'],
  },
  // {
  //   name:'Dignidades políticas',
  //   url: '/admin-dignidad/forms-dignidad',
  //   iconComponent: { name: 'cil-list' },
  //   permission:['super_administrador'],
  // },
  // {
  //   name:'En vivo',
  //   url: '/envivo/forms-envivo',
  //   iconComponent: { name: 'cil-list' },
  //   permission:['super_administrador'],
  // },
  {
    name: 'Biografia',
    url: '/administrador_nav_2/biografia',
    iconComponent: { name: 'cil-user' },
    permission:['asambleista','asistente'],
  },
  {
    name: 'Blogs',
    url: '/blogs',
    iconComponent: { name: 'cil-notes' },
    permission:['super_administrador','asambleista','asistente'],
    children: [
      {
        name: 'Crear blog',
        url: '/blogs/form-blogs',
        permission:['super_administrador','asambleista','asistente'],
      },
      {
        name: 'Últimas noticias',
        url: '/blogs/utlimas-noticias',
        permission:['super_administrador'],
      },
      {
        name: 'Lista de blogs',
        url: '/blogs/lista-blogs',
        permission:['super_administrador','asambleista','asistente'],
      }
    ]
  },
  {
    name: 'Editorial',
    url: '/editorial',
    iconComponent: { name: 'cil-library' },
    permission:['super_administrador'],
    children: [
      {
        name: 'Crear editorial',
        url: '/editorial/creat-editorial',
        permission:['super_administrador'],
      },
      {
        name: 'Lista editorial',
        url: '/editorial/editorial-list',
        permission:['super_administrador'],
      },
    ]
  },
  {
    name:'Directo',
    url: '/admin-categoria/form-directo',
    iconComponent:{name:'cil-video'},
    permission:['super_administrador'],
  }
  
  
];