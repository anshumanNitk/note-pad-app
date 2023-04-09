
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import NoteMain from './pages/NoteMain';

import Header from './components/header';
import NotePage from './pages/NotePage';

function App() {
  return (
      <div className="Container dark">
        <Router>
          <div className='app'>
            <Header />
            <Routes>
              <Route path="/" exact element={<NotePage />}/>
              <Route path="/notes/:id" element={<NoteMain />}/>
            </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
