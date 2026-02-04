export const links = [
  { href: '/', label: 'Главная' },
  { 
    href: '/', 
    label: 'О Компании',
    subLinks: [
      { href: '/about/projects', label: 'Наши проекты' },
      { href: '/about/clients', label: 'Наши клиенты' },
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
  { href: '/contacts', label: 'Контакты' },
];