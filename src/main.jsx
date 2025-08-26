//import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Blog } from './blog';
import './index.css';

createRoot(document.getElementById('root')).render(
    //<StrictMode> // https://vladilen.ru/pl/teach/control/lesson/view?id=302435031
    <BrowserRouter>
        <Blog />
    </BrowserRouter>,
    //</StrictMode>,
);
