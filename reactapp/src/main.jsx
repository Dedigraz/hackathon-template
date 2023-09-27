
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
