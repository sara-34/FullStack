import React from 'react';
import { Presentation } from '../types';

interface PresentationCardProps {
  presentation: Presentation;
  onDelete: (id: number) => void;
  onEdit: () => void; // Añadir la prop onEdit
}

const PresentationCard: React.FC<PresentationCardProps> = ({ presentation, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{presentation.title}</h3>
      <p>Descripción: {presentation.description}</p>
      <p>Fecha: {presentation.date}</p>
      <p>Hora: {presentation.time}</p>
      <p>Participantes: {presentation.participants}</p>
      <button onClick={() => onEdit()}>Editar</button>
      <button onClick={() => onDelete(presentation.id)}>Eliminar</button>
    </div>
  );
};

export default PresentationCard;

