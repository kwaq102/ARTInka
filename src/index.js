import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './layouts/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);