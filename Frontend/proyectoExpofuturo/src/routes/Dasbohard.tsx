import React, { useState } from 'react';
import './dasbohard.css';
import PresentationList from '../components/PresentationList';
import CreatePresentation from '../components/CreatePresentation';
import AddSpeaker from '../components/AddSpeaker';
import AddSpace from '../components/AddSpace';
import PresentationCard from '../components/PresentationCard';
import SpeakerCard from '../components/SpeakerCard';
import SpaceCard from '../components/SpaceCard';

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

const Dasbohard: React.FC = () => {
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editPresentation, setEditPresentation] = useState<Presentation | null>(null);
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [showSpaceForm, setShowSpaceForm] = useState(false);

  const addPresentation = (presentation: Presentation) => {
    const newPresentation = {
      ...presentation,
      id: presentations.length + 1,
    };
    setPresentations([...presentations, newPresentation]);
    setShowForm(false);
  };

  const addSpeaker = (speaker: Speaker) => {
    setSpeakers([...speakers, speaker]);
    setShowSpeakerForm(false);
  };

  const addSpace = (space: Space) => {
    setSpaces([...spaces, space]);
    setShowSpaceForm(false);
  };

  const deletePresentation = (id: number) => {
    setPresentations(presentations.filter(p => p.id !== id));
  };

  const deleteSpeaker = (index: number) => {
    setSpeakers(speakers.filter((_, i) => i !== index));
  };

  const deleteSpace = (index: number) => {
    setSpaces(spaces.filter((_, i) => i !== index));
  };

  return (
    <div className="contenedor-general">
      <div className='nav'>
         <ul className='nav-list'>
            <li className='nav-item'><a href="#" className='nav-link'>Cerrar Sesión</a></li>
         </ul>
      </div>

      
    <div className='imagen-fondo'>
    <h1>Bienvenido a nuestra página de ponencias</h1>
      <div className="dashboard-container">
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="button">
            {editPresentation ? "Editar Ponencia" : "Crear Ponencia"}
          </button>
        )}
        {showForm && (
          <CreatePresentation
            onAddPresentation={addPresentation}
            editPresentation={editPresentation}
            onUpdatePresentation={presentation => {
              const updatedPresentations = presentations.map(p => p.id === presentation.id ? presentation : p);
              setPresentations(updatedPresentations);
              setEditPresentation(null);
              setShowForm(false);
            }}
            onHideForm={() => setShowForm(false)}
          />
        )}

        {!showSpeakerForm && (
          <button onClick={() => setShowSpeakerForm(true)} className="button">Agregar Ponente</button>
        )}
        {showSpeakerForm && <AddSpeaker onAddSpeaker={addSpeaker} onHideForm={() => setShowSpeakerForm(false)} />}

        {!showSpaceForm && (
          <button onClick={() => setShowSpaceForm(true)} className="button">Agregar Espacio</button>
        )}
        {showSpaceForm && <AddSpace onAddSpace={addSpace} onHideForm={() => setShowSpaceForm(false)} />}
      </div>
    </div>
      

      <div className="ponencia">
        <div className="">
        <h4>Ponencias</h4>
          <div className="">
            
            {presentations.length > 0 ? (
              presentations.map(presentation => (
                <PresentationCard key={presentation.id} presentation={presentation} onDelete={deletePresentation} />
              ))
            ) : (
              <div className="">
                <p>No hay ponencias creadas.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='ponentes'>
        <div className="">
        <h4>Ponentes</h4>
          <div className="">
            
            {speakers.length > 0 ? (
              speakers.map((speaker, index) => (
                <SpeakerCard key={index} speaker={speaker} onDelete={() => deleteSpeaker(index)} />
              ))
            ) : (
              <div className="">
                <p>No hay ponentes agregados.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='espacios'>
      <div className="">
        <h4>Espacios</h4>
          <div className="">
            {spaces.length > 0 ? (
              spaces.map((space, index) => (
                <SpaceCard key={index} space={space} onDelete={() => deleteSpace(index)} />
              ))
            ) : (
              <div className="">
                <p>No hay espacios agregados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasbohard;



