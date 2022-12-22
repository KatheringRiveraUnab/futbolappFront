import {CompSignUpUser} from './Components/SignUpUsers.jsx';
import { CompNavMenu } from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


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
            </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;
