import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addlop from '../components/Addlop';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addlop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
