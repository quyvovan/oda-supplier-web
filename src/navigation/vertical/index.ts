// ** Icon imports
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import HomeOutline from 'mdi-material-ui/HomeOutline';

// ** Type import
import { VerticalNavItemsType } from 'src/layouts/types';

const navigation = (): VerticalNavItemsType => [
  {
    title: 'Dashboard',
    icon: HomeOutline,
    path: '/',
  },
  {
    title: 'Account Settings',
    icon: AccountCogOutline,
    path: '/User',
  },
];

export default navigation;
