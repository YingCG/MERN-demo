import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/projects' element={<Projects/>}/>
        <Route exact path='/projects/:id' element={<ProjectPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
