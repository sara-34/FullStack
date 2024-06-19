import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
  onDelete: () => void; // Añadir la prop onDelete
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onDelete }) => {
  return (
    <div className="card">
      <h3>{speaker.name} {speaker.surname}</h3>
      <p>Email: {speaker.email}</p>
      <p>Phone: {speaker.phone}</p>
      <p>City: {speaker.city}</p>
      <p>Company: {speaker.company}</p>
      <button onClick={onDelete} className="button">Eliminar</button> {/* Botón de eliminar */}
    </div>
  );
};

export default SpeakerCard;

