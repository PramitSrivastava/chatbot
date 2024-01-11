import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  const isUserSignedIn = !!localStorage.getItem('token')
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup />} />
       {/* <Route path='/account' element={<Account />} /> */}
       {isUserSignedIn && <Route path='/account' element={<Account />} />}
     </Routes>
    </div>
  );
}

export default App;
