import { useState } from 'react';
import './index.css';
import DefaultLayout from "../layout/DefaultLayout";
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvaider';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dasbohard"/>
    }


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // manejo el envío del formulario
        console.log({ email, password });
    };

    return (
        <DefaultLayout>
        <div className='bodyf'>
            <div className="login-container">
                <form className="login-form" action="#" method="post" onSubmit={handleSubmit}>
                
                <div className="container-img">
                        <img src="../imagenes/logo.jpg" alt="logo" />
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
                    <div className="botones">
                        <button className="button" type="submit">Iniciar Sesión</button>
                        <div className='registro'>
                           <p>¿No tienes cuenta?</p><Link to="/signup">Registrate</Link>
                        </div>
                        
                        
                    </div>
                </form>
            </div>

        </div>
            
        </DefaultLayout>
    );
}
