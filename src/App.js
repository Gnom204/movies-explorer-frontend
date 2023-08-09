import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Movie from './components/Movie';
import Register from './components/Register';
import SavedMovies from './components/SavedMovies';
import Profile from './components/Profile';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <Header isLoggedIn={true} />
          <Main />
          <Footer />
        </>} />
        <Route path='/movies' element={
          <>
            <Header isLoggedIn={true} />
            <Movie />
            <Footer />
          </>} />
        <Route path='/saved-movies' element={<>
          <Header isLoggedIn={true} />
          <SavedMovies />
          <Footer />
        </>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
