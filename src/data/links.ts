export const links = [
  { href: '/', label: 'Главная' },
  { 
    href: '/', 
    label: 'О Компании',
    subLinks: [
      { href: '/about/history', label: 'История' },
      { href: '/about/team', label: 'Команда' },
    ]
  },
  { 
    href: '/services', 
    label: 'Услуги',
    subLinks: [
      { href: '/services/build', label: 'Строительство' },
      { href: '/services/design', label: 'Проектирование' },
      { href: '/services/repair', label: 'Ремонт' },
    ]
  },
  { href: '/partners', label: 'Наши Партнеры' },
  { href: '/contacts', label: 'Контакты' },
];