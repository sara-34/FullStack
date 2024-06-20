import React from 'react';
import { Space } from '../types';

interface SpaceCardProps {
  space: Space;
  onDelete: () => void; // Prop para eliminar
  onEdit: () => void;   // Prop para editar
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space, onDelete, onEdit }) => {
  return (
    <div className="card">
      <h3>{space.name}</h3>
      <p>Type: {space.type}</p>
      <p>Capacity: {space.minCapacity} - {space.maxCapacity}</p>
      <p>Square Meters: {space.squareMeters}</p>
      <p>Features: {space.features}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default SpaceCard;



