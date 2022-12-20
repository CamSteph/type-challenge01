import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PracticeOptions from './pages/PracticeOptions';
import NotFoundPage from './components/NotFoundPage';
import LetterPractice from './pages/LetterPractice';
import SpeedTest from './pages/SpeedTest';
import Settings from './pages/Settings';
import { LetterScoreProvider } from './containers/LetterScoreProvider';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/practice' element={<PracticeOptions />} />
        <Route exact path='/practice/letters' element={<LetterScoreProvider children={<LetterPractice />} />} />
        <Route exact path='/practice/speed-test' element={<SpeedTest />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
