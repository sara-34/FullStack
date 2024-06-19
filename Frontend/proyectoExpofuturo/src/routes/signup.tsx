import { useState } from 'react';
import './index.css';
import DefaultLayout from "../layout/DefaultLayout";
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvaider';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [documentNumber, setDocumentNumber] = useState('');

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dasbohard"/>
    }
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor
        console.log({ name, email, password, confirmPassword, documentType, documentNumber });
    };

    return (
        <DefaultLayout>
            <div className='bodyf'>
            <div className="register-container login-container">
                <form className="login-form" action="#" method="post" onSubmit={handleSubmit}>
                    <h2>Registrarse</h2>
                    <div className="input-group">
                        <label htmlFor="name">Nombre:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Correo:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            name="confirm-password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="type">Tipo de documento:</label>
                        <select 
                            id="type" 
                            name="docType" 
                            value={documentType} 
                            onChange={(e) => setDocumentType(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Selecciona un tipo de documento</option>
                            <option value="cedulaextrajera">Cédula extrajera</option>
                            <option value="cedula">Cédula de cuidadania</option>
                            <option value="tarjeta">Tarjeta de identidad</option>
                            <option value="pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="docNumber">Número de documento:</label>
                        <input 
                            type="text" 
                            id="docNumber" 
                            name="docNumber" 
                            value={documentNumber} 
                            onChange={(e) => setDocumentNumber(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="botones">
                        <button className="button" type="submit">Registrarse</button>
                        <div className='registro'>
                          <p>¿Ya tienes una cuenta?</p><Link to="/">Inicia Sesión</Link>
                        </div>
                    </div>
                </form>
            </div>

            </div>
            
        </DefaultLayout>
    );
}
