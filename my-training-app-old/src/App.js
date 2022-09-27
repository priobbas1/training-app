<<<<<<< HEAD
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
=======
import "./App.css";
import { Header} from '../src/components/Header';


function App() {
  return (
  <Header />
>>>>>>> 6a3d17718842207ce3a75c1821756634beaadf4b


  
  )
}

export default App;
