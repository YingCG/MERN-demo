import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProject from './components/AddProject';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/projects/create' element={<AddProject/>}/>
      </Routes>
    </div>
  );
}

export default App;
