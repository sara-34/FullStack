import React, { useState, useEffect } from 'react';
import './ponencia.css';
interface PresentationFormProps {
  onAddPresentation: (presentation: Presentation) => void;
  onUpdatePresentation: (presentation: Presentation) => void;
  editPresentation: Presentation | null;
  onHideForm: () => void; // Prop para ocultar el formulario
}

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

const CreatePresentation: React.FC<PresentationFormProps> = ({ onAddPresentation, onUpdatePresentation, editPresentation, onHideForm }) => {
  const [presentation, setPresentation] = useState<Presentation>({
    id: 0,
    title: '',
    description: '',
    date: '',
    time: '',
    participants: 0,
    speaker: { name: '', surname: '', documentType: '', documentNumber: '', email: '', phone: '', city: '', department: '', company: '' },
    space: { name: '', type: '', maxCapacity: 0, minCapacity: 0, squareMeters: 0, features: '' }
  });

  useEffect(() => {
    if (editPresentation) {
      setPresentation(editPresentation);
    }
  }, [editPresentation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPresentation({ ...presentation, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editPresentation) {
      onUpdatePresentation(presentation);
    } else {
      onAddPresentation(presentation);
    }
  };

  return (
    <div className='formulario-ponencia'>
      <div className="button-flecha" onClick={onHideForm}><img src="../imagenes/flecha.png" alt="" width={30}/></div> {/* Botón de flecha para ocultar el formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={presentation.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            value={presentation.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={presentation.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hora</label>
          <input
            type="time"
            name="time"
            value={presentation.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número de Participantes</label>
          <input
            type="number"
            name="participants"
            value={presentation.participants}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button">
          {editPresentation ? "Actualizar Ponencia" : "Agregar Ponencia"}
        </button>
      </form>
    </div>
  );
};

export default CreatePresentation;


