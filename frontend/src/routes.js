import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';

// path="/" component Logim --> indica que quando o path for / a pagina logim é chamada

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dev/:id" exect component={Main} />
        </BrowserRouter>
    );
}