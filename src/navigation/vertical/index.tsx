// ** Icon imports

// ** Type import
import { VerticalNavItemsType } from 'src/layouts/types';

const navigation = (): VerticalNavItemsType => [
  {
    title: 'Dashboard',
    path: '/',
  },
  {
    title: 'Account Settings',
    path: '/User',
  },
];

export default navigation;
