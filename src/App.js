import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Dashboard' element={<Dashboard />} />

      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
