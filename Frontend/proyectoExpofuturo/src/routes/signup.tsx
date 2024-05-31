import { useState } from 'react';
import DefaultLayout from "../layout/DefaultLayout";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos al servidor
        console.log({ name, email, password, confirmPassword, phone });
    };

    return (
        <DefaultLayout>
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
                        <label htmlFor="phone">Teléfono:</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="botones">
                        <button className="button" type="submit">Registrarse</button>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    );
}
