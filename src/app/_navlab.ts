import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'My Labs',
    url: '/labs',
    icon: 'icon-speedometer',
    
  },
  {
    title: true,
    name: 'Labs'
  },
  {
    name: 'Javascript',
    url: '/lab-details/lab-info',
    icon: 'icon-drop'
  },
  {
    name: 'PHP',
    url: '/lab-details/lab-info2',
    icon: 'icon-settings'
  },
  {
    name: 'Python',
    url: '/lab-details/lab-info3',
    icon: 'icon-drop'
  },
  {
    name: 'C++',
    url: '/lab-details/lab-info4',
    icon: 'icon-settings'
  },
  {
    title: true,
    name: 'Components'
  },
  
  
  
  {
    name: 'Your Work',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Activity',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Assets',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Pinned Items',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Trending',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Challenges',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
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
      name: 'Seven Labs',
      url: '/icons/coreui-icons',
      icon: 'icon-star',
      badge: {
        variant: 'success',
        text: 'PRO'
      }
    },
  
  
  
];
