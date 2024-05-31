import { useState } from 'react';
import DefaultLayout from "../layout/DefaultLayout";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // manejo el envío del formulario
        console.log({ email, password });
    };

    return (
        <DefaultLayout>
            <div className="login-container">
                <form className="login-form" action="#" method="post" onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>
                    <div className="container-img">
                        <img src="../imagenes/logo.jpg" alt="logo" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">E-mail:</label>
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
                        <button className="button" type="submit">Ingresar</button>
                        <a className="button" href="#">Registrarse</a>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    );
}
