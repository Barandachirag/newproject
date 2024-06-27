import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header'
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Header />
     <Routes>
     <Route path='/' element={<Home/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
      <Route path='/Edit' element={<Edit/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
