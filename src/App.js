import { Routes, Route } from 'react-router-dom'
import './App.css';
import {Formulario} from './components/Formulario'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Formulario/>} />
      </Routes>
    </div>
  );
}

export default App;
