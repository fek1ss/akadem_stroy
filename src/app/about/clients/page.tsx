'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import { clients } from '@/data/clients';
import { Filter } from '@/components/ui/filter/Filter';
import { ClientCard } from '@/components/ui/clientCard/clientCard';
import { Modal } from '@/components/ui/modal/Modal';

export default function Page() {
  const categories = ['Алматы', 'Астана', 'Уральск', 'Атырау'];
  
  const [filteredClients, setFilteredClients] = useState(clients);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.page}>
      <Filter
        data={clients}
        categories={categories}
        onFilter={setFilteredClients}
        getCategory={item => item.city}
      />

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
  );
}