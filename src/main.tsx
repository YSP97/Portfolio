import './styles/global.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

if (!container) {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
} else {
  createRoot(container).render(<App />);
}
