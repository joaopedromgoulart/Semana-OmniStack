import React, { useState } from 'react';
import './login.css';

import api from '../services/api.js';

import logo from '../assets/logo.svg';
// import src from '*.webp';

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    
    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data

        history.push(`/dev/${_id}`); // Leva para a pag main
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt = "Tindev" />
                <input
                placeholder="Digite seu usuario GitHub"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
} 
// export default Login; // > seria uma opcao caso o export nao tivesse sido feito na Func Login()