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
    i18n: 'events',
    to: '/events',
  },
  {
    icon: 'guitar',
    i18n: 'entries',
    to: '/entries',
  },
  {
    icon: 'sign-out-alt',
    title: 'Logout',
    to: '/logout',
  },
  {
    icon: 'globe',
    i18n: 'locale',
    to: '',
  },
];
