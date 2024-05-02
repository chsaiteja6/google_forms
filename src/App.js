
import './style.css';
import {ContactForm} from './Form.js'
import { Route, Routes } from 'react-router-dom';
import Saved from './Saved.js';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ContactForm/>}/>
      <Route path="/forms" element={<Saved/>}/>
      </Routes>
    </div>
  );
}

export default App;
