import React from 'react';
import { Presentation } from '../types';

interface PresentationCardProps {
  presentation: Presentation;
  onDelete: (id: number) => void; // Añadir la prop onDelete
}

const PresentationCard: React.FC<PresentationCardProps> = ({ presentation, onDelete }) => {
  return (
    <div className="card">
      <h3>{presentation.title}</h3>
      <p>Description: {presentation.description}</p>
      <p>Date: {presentation.date}</p>
      <p>Time: {presentation.time}</p>
      <p>Participants: {presentation.participants}</p>
      <button onClick={() => onDelete(presentation.id)} className="button">Eliminar</button> {/* Botón de eliminar */}
    </div>
  );
};

export default PresentationCard;

