interface Nav {
  icon: string;
  title: string;
  to: string;
  children?: Nav[];
}

export const createNav = (i18n) => {
  const nav = [
    {
      icon: 'apps',
      title: 'Welcome',
      to: '/',
    },
    {
      icon: 'bubble_chart',
      title: i18n.t('events'),
      to: '/events',
    },
    {
      icon: 'bubble_chart',
      title: i18n.t('entries'),
      to: '/entries',
    },
  ];
  return nav;
};
