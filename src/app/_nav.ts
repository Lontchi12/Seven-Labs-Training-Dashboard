import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    
  },
  {
    title: true,
    name: 'Labs'
  },
  {
    name: 'Labs',
    url: '',
    icon: 'icon-star'
  },
  {
    name: 'Add Lab',
    url: '/parameters/add-lab',
    icon: 'icon-drop'
  },
  {
    name: 'Add Project',
    url: '/parameters/add-project',
    icon: 'icon-star'
  },
  {
    name: 'Settings',
    url: '/parameters/settings',
    icon: 'icon-settings'
  },
  {
    title: true,
    name: 'Components'
  },
  
  
  
  {
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '',
        icon: 'icon-bell'
      }
    ]
  },
  
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  
  
];
