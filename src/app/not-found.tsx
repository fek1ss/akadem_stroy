'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__code">404</h1>
        <p className="notfound__text">Страница не найдена</p>

        <Link href="/" className="notfound__btn">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
