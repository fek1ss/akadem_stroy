'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import about from '../about.module.scss';
import { clients } from '@/data/clients';
import { Filter } from '@/components/ui/filter/Filter';
import { ClientCard } from '@/components/ui/clientCard/clientCard';
import { Modal } from '@/components/ui/modal/Modal';
import { Title } from '@/components/ui/title/Title';

export default function Page() {
  const categories = ['Алматы', 'Астана', 'Уральск', 'Атырау'];

  const [filteredClients, setFilteredClients] = useState(clients);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.page}>
      <div className={about.page__wrapper}>
        <div className={about.head}>
          <Title text='Наши клиенты' color='#000' />
          <Filter
            data={clients}
            categories={categories}
            onFilter={setFilteredClients}
            getCategory={item => item.city}
          />
        </div>

        <div className={styles.clientList}>
          {filteredClients.map(clt => (
            <ClientCard
              key={clt.id}
              title={clt.title}
              img={clt.img}
              onOpenModal={openModal}
            />
          ))}
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
