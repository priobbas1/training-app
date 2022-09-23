
import './App.css';

import { Routes,Route } from "react-router-dom"
import { Footer } from './components/Footer';

import { Login } from './components/pages/Login';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <main>
     
     <Routes>
      <Route path='/' element={< HomePage/>} />
      <Route path='/register' element={<Login />} />
     </Routes>
     
     <Footer />
    </main>
  );
};

export default App;