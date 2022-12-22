import {CompSignUpUser} from './Components/SignUpUsers.jsx';
import { CompNavMenu } from './Components/NavBar';
import {CompShowUsers} from './Components/showUsers.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './Components/login.jsx';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgComponent from './Components/logo.jsx';

function App() {
  return (
    <div className="App">
      <header >
        <SvgComponent className="App-logo"/>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<CompNavMenu />}>
              <Route path='/SignUp' element={<CompSignUpUser />} />
              <Route path='/shusers' element={<CompShowUsers />} />
              <Route path='/SignIn' element={<Login />} />
            </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;
