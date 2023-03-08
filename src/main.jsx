import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './context/ThemeContextProvider.jsx';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
