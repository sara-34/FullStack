import React from 'react';
import { Space } from '../types';

interface SpaceCardProps {
  space: Space;
  onDelete: () => void; // Prop para eliminar
  onEdit: () => void;   // Prop para editar
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space, onDelete, onEdit }) => {
  return (
    <div className="cards-space">
      <div className='espacioimg'>
        <img src="../imagenes/lugares.jpg" alt="avatar" />
      </div>
      <h3>{space.name}</h3>
      <p>Tipo de salon: {space.type}</p>
      <p>Capacidad: {space.minCapacity} - {space.maxCapacity}</p>
      <p>Metros Cuadrados: {space.squareMeters}</p>
      <p>Caracteristicas: {space.features}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
};

export default SpaceCard;



