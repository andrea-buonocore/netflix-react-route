
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import NotFound from './components/NotFound';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}/>
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
