import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
  onDelete: () => void; // Añadir la prop onDelete
  onEdit: () => void; // Añadir la prop onEdit
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onDelete, onEdit }) => {
  return (
    <div className="cards-ponente">
      <div className='imagenponente'>
        <img src="../imagenes/fodo.jpg" alt="avatar" />
      </div>
      
      <h3>{speaker.name} {speaker.surname}</h3>
      <p>{speaker.email}</p>
      <p>{speaker.phone}</p>
      <p>{speaker.city}</p>
      <p>{speaker.company}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default SpeakerCard;

