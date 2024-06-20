import React, { useState, useEffect } from 'react';
import './ponente.css';
interface Space {
  name: string;
  type: string;
  maxCapacity: number;
  minCapacity: number;
  squareMeters: number;
  features: string;
}

interface SpaceFormProps {
  onAddSpace: (space: Space) => void;
  onUpdateSpace: (space: Space) => void;
  onHideForm: () => void;
  editSpace: Space | null;
}

const AddSpace: React.FC<SpaceFormProps> = ({ onAddSpace, onUpdateSpace, onHideForm, editSpace }) => {
  const [space, setSpace] = useState<Space>({
    name: '',
    type: '',
    maxCapacity: 0,
    minCapacity: 0,
    squareMeters: 0,
    features: ''
  });

  useEffect(() => {
    if (editSpace) {
      setSpace(editSpace);
    }
  }, [editSpace]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSpace({ ...space, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editSpace) {
      onUpdateSpace(space);
    } else {
      onAddSpace(space);
    }
    setSpace({
      name: '',
      type: '',
      maxCapacity: 0,
      minCapacity: 0,
      squareMeters: 0,
      features: ''
    });
    onHideForm();
  };

  return (
    <div className='formulario-ponencia'>
      <div className="button-flecha" onClick={onHideForm}>
        <img src="../imagenes/flecha.png" alt="flecha" width={30} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" value={space.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="type">Tipo</label>
          <input type="text" name="type" value={space.type} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="maxCapacity">Capacidad Máxima</label>
          <input type="number" name="maxCapacity" value={space.maxCapacity} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="minCapacity">Capacidad Mínima</label>
          <input type="number" name="minCapacity" value={space.minCapacity} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="squareMeters">Metros Cuadrados</label>
          <input type="number" name="squareMeters" value={space.squareMeters} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="features">Características</label>
          <input type="text" name="features" value={space.features} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">
          {editSpace ? 'Actualizar Espacio' : 'Agregar Espacio'}
        </button>
      </form>
    </div>
  );
};

export default AddSpace;

