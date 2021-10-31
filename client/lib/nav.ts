import { getAuth, signOut } from 'firebase/auth';

export interface Nav {
  icon: string;
  title?: string;
  i18n?: string;
  to?: string;
  children?: Nav[];
  action?: any;
  onlyLoggedIn?: boolean;
  onlyNotLoggedIn?: boolean;
}

export const nav: Nav[] = [
  {
    icon: 'moon',
    title: 'Welcome',
    to: '/',
  },
  {
    icon: 'user-alt',
    title: 'login',
    to: '/login',
    onlyNotLoggedIn: true,
  },
  {
    icon: 'music',
    i18n: 'nav.events',
    to: '/events',
    onlyLoggedIn: true,
  },
  {
    icon: 'guitar',
    i18n: 'nav.entries',
    to: '/entries',
    onlyLoggedIn: true,
  },
  {
    icon: 'sign-out-alt',
    title: 'Logout',
    onlyLoggedIn: true,
    action: () => {
      const auth = getAuth();
      signOut(auth);
    },
  },
];
