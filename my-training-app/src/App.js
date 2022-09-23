<<<<<<< HEAD

import './App.css';
=======
import "./App.css";
import Login from "./components/Login";
>>>>>>> development1

import { Routes,Route } from "react-router-dom"
import { Footer } from './components/Footer';

import { Login } from './components/pages/Login';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
<<<<<<< HEAD
    <main>
     
     <Routes>
      <Route path='/' element={< HomePage/>} />
      <Route path='/register' element={<Login />} />
     </Routes>
     
     <Footer />
    </main>
=======
    <div className="App">
      <header className="App-header">
        <Login></Login>
      </header>
    </div>
>>>>>>> development1
  );
};

export default App;