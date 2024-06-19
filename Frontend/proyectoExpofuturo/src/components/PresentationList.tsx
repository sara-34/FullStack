import React from 'react';

interface Presentation {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  participants: number;
  speaker: Speaker;
  space: Space;
}

interface Speaker {
  name: string;
  surname: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
  city: string;
  department: string;
  company: string;
}

interface Space {
  name: string;
  type: string;
  maxCapacity: number;
  minCapacity: number;
  squareMeters: number;
  features: string;
}

interface PresentationListProps {
  presentations: Presentation[];
  onEdit: (presentation: Presentation) => void;
  onDelete: (id: number) => void;
  onAddSpeaker: () => void;
  onAddSpace: () => void;
}

const PresentationList: React.FC<PresentationListProps> = ({ presentations, onEdit, onDelete, onAddSpeaker, onAddSpace }) => {
  // Ordenar presentaciones por fecha y hora
  const sortedPresentations = presentations.sort((a, b) => {
    // Comparación primero por fecha
    const dateComparison = new Date(a.date).getTime() - new Date(b.date).getTime();
    if (dateComparison !== 0) {
      return dateComparison;
    }
    // Si las fechas son iguales, comparar por hora
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });

  return (
    <div>
      <h3>Lista de Ponencias</h3>
      <ul>
        {sortedPresentations.map(presentation => (
          <li key={presentation.id}>
            <h3>{presentation.title}</h3>
            <p>{presentation.description}</p>
            <p>Fecha: {presentation.date}</p>
            <p>Hora: {presentation.time}</p>
            <p>Participantes: {presentation.participants}</p>
           
            <button onClick={() => onEdit(presentation)} className="button">Editar</button>
            <button onClick={() => onDelete(presentation.id)} className="button">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PresentationList;


