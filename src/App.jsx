import { BrowserRouter } from 'react-router-dom';
import Drawer from './components/Drawer';
import './index.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Drawer />
    </BrowserRouter>
  );
}
