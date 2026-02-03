'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { formatPhone } from '@/utils/formatPhone';
import { Toast } from '../toast/Toast';

const initialForm = {
  company: '',
  phone: '',
  service: '',
  file: null as File | null,
};

export function DiscussForm() {
  const [form, setForm] = useState(initialForm);
  const [showToast, setShowToast] = useState(false);

  // Закрытие Toast через 5 секунд
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000); // 5000 мс = 5 секунд

      return () => clearTimeout(timer); // очистка таймера при размонтировании
    }
  }, [showToast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === 'phone') {
      setForm({ ...form, phone: formatPhone(value) });
      return;
    }

    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('company', form.company);
    formData.append('phone', form.phone);
    formData.append('service', form.service);
    if (form.file) {
      formData.append('file', form.file);
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setShowToast(true);
      setForm(initialForm);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <input
            className={styles.inp}
            name='company'
            placeholder='имя организации'
            value={form.company}
            onChange={handleChange}
            required
          />

          <input
            className={styles.inp}
            name='phone'
            placeholder='+7 (___) ___ __ __'
            value={form.phone}
            onChange={handleChange}
            inputMode='tel'
            maxLength={18}
            required
          />
        </div>

        <select
          className={styles.select}
          name='service'
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value=''>выберите услуги</option>
          <option value='Видеонаблюдение'>Видеонаблюдение</option>
          <option value='Слаботочные сети'>Слаботочные сети</option>
          <option value='Вентиляция и кондиционирование'>
            Вентиляция и кондиционирование
          </option>
        </select>

        <label className={styles.upload}>
          <input type='file' name='file' onChange={handleChange} hidden />
          {form.file ? form.file.name : 'нажмите чтобы загрузить файл'}
        </label>

        <button className={styles.btn} type='submit'>
          ЗАКАЗАТЬ РАСЧЕТ
        </button>
      </form>

      {showToast && (
        <Toast
          message='Сообщение успешно отправлено'
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
