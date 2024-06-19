import React, { useState } from 'react';
import './espacio.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

interface AddSpaceProps {
  onAddSpace: (space: Space) => void;
  onHideForm: () => void; // Nueva propiedad para ocultar el formulario
}

interface Space {
  name: string;
  type: string;
  maxCapacity: number;
  minCapacity: number;
  squareMeters: number;
  features: string;
}

const AddSpace: React.FC<AddSpaceProps> = ({ onAddSpace, onHideForm }) => {
  const initialSpaceState: Space = {
    name: '',
    type: '',
    maxCapacity: 0,
    minCapacity: 0,
    squareMeters: 0,
    features: ''
  };

  const [space, setSpace] = useState<Space>(initialSpaceState);
  const navigate = useNavigate(); // Usa useNavigate para obtener la función navigate

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpace(prevSpace => ({
      ...prevSpace,
      [name]: name.includes('Capacity') || name === 'squareMeters' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSpace(space);
    setSpace(initialSpaceState); // Reiniciar el estado después de enviar el formulario
  };

  const handleBack = () => {
    navigate(-1); // Función para volver atrás
  };

  return (
    <div className='formulario-ponencia'>
      <div className="button-flecha" onClick={onHideForm}><img src="../imagenes/flecha.png" alt="" width={30}/></div> {/* Botón de flecha para ocultar el formulario */}
      <form onSubmit={handleSubmit}>
        <h2>Agregar Espacio</h2>
        <label htmlFor="name">Nombre del espacio</label>
        <input type="text" name="name" value={space.name} onChange={handleChange} placeholder="Nombre del Espacio" required />
        <label htmlFor="type">Tipo de espacio</label>
        <input type="text" name="type" value={space.type} onChange={handleChange} placeholder="Tipo de Espacio" required />
        <label htmlFor="maxCapacity">Capacidad Máxima</label>
        <input type="number" name="maxCapacity" value={space.maxCapacity} onChange={handleChange} placeholder="Capacidad Máxima" required />
        <label htmlFor="minCapacity">Capacidad Mínima</label>
        <input type="number" name="minCapacity" value={space.minCapacity} onChange={handleChange} placeholder="Capacidad Mínima" required />
        <label htmlFor="squareMeters">Metros cuadrados del lugar</label>
        <input type="number" name="squareMeters" value={space.squareMeters} onChange={handleChange} placeholder="Metros Cuadrados" required />
        <label htmlFor="features">Características</label>
        <input type="text" name="features" value={space.features} onChange={handleChange} placeholder="Características" required />
        <br />
        <button type="submit" className="button">Agregar Espacio</button>
       
      </form>
    </div>
  );
};

export default AddSpace;
