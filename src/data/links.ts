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
      { href: '/services/ventilation', label: 'Вентиляция' },
      { href: '/services/conditioning', label: 'Кондиционирование' },
      { href: '/services/low-current', label: 'Слаботочные системы' },
      { href: '/services/drainage', label: 'Водосточная система' },
    ]
  },
  { href: '/partners', label: 'Наши Партнеры' },
  { href: '/contacts', label: 'Контакты' },
];