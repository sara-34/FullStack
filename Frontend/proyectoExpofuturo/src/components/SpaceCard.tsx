import React from 'react';
import { Space } from '../types';

interface SpaceCardProps {
  space: Space;
  onDelete: () => void; // Añadir la prop onDelete
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space, onDelete }) => {
  return (
    <div className="card">
      <h3>{space.name}</h3>
      <p>Type: {space.type}</p>
      <p>Capacity: {space.minCapacity} - {space.maxCapacity}</p>
      <p>Square Meters: {space.squareMeters}</p>
      <p>Features: {space.features}</p>
      <button onClick={onDelete} className="button">Eliminar</button> {/* Botón de eliminar */}
    </div>
  );
};

export default SpaceCard;


