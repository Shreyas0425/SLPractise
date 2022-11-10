import logo from './logo.svg';
import './App.css';
import Function from './Components/Function';
import Class from './Components/Class';

import Home from './Components/Home';
import Counter from './Components/Counter';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (

    <div>
      
     
        <Routes>
          
          <Route path ="/Function" element={<Function/>}/>

          
          <Route path ="/Home" element={<Home/>}/>

         
          <Route path ="/Class" element={<Class/>}/>
          <Route path ="/Counter" element={<Counter/>}/>
         
        </Routes>
      
      
      
    </div>
  );
