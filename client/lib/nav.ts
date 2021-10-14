interface Nav {
  icon: string;
  title?: string;
  i18n?: string;
  to: string;
  children?: Nav[];
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
  },
  {
    icon: 'music',
    i18n: 'nav.events',
    to: '/events',
  },
  {
    icon: 'guitar',
    i18n: 'nav.entries',
    to: '/entries',
  },
  {
    icon: 'sign-out-alt',
    title: 'Logout',
    to: '/logout',
  },
  {
    icon: 'globe',
    i18n: 'nav.other_language',
    to: '',
  },
];
