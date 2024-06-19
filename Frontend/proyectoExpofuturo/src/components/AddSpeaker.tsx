import React, { useState } from 'react';

interface SpeakerFormProps {
  onAddSpeaker: (speaker: Speaker) => void;
  onHideForm: () => void;
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

const AddSpeaker: React.FC<SpeakerFormProps> = ({ onAddSpeaker, onHideForm }) => {
  const [speaker, setSpeaker] = useState<Speaker>({
    name: '',
    surname: '',
    documentType: '',
    documentNumber: '',
    email: '',
    phone: '',
    city: '',
    department: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSpeaker({ ...speaker, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSpeaker(speaker);
    setSpeaker({
      name: '',
      surname: '',
      documentType: '',
      documentNumber: '',
      email: '',
      phone: '',
      city: '',
      department: '',
      company: ''
    });
    onHideForm();
  };

  return (
    <div className='formulario-espacio'>
      <div className="button-flecha" onClick={onHideForm}><img src="../imagenes/flecha.png" alt="" width={30}/></div> {/* Botón de flecha para ocultar el formulario */}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" value={speaker.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="surname">Apellido</label>
        <input type="text" name="surname" value={speaker.surname} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="documentType">Tipo de documento</label>
        <select name="documentType" value={speaker.documentType} onChange={handleChange} required>
          <option value="" disabled>Seleccione el tipo de documento</option>
          <option value="cedula">Cédula</option>
          <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
          <option value="pasaporte">Pasaporte</option>
          <option value="cedulaExtranjera">Cédula Extranjera</option>
        </select>
      </div>
      <div>
        <label htmlFor="documentNumber">Número de documento</label>
        <input type="text" name="documentNumber" value={speaker.documentNumber} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={speaker.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="phone">Teléfono</label>
        <input type="tel" name="phone" value={speaker.phone} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="city">Ciudad</label>
        <input type="text" name="city" value={speaker.city} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="department">Departamento</label>
        <input type="text" name="department" value={speaker.department} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="company">Compañía</label>
        <input type="text" name="company" value={speaker.company} onChange={handleChange} required />
      </div>
      <button type="submit" className="button">Agregar Ponente</button>
    </form>
    </div>
  );
};

export default AddSpeaker;


