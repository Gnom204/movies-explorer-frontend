import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Movie from './components/Movie';
import Register from './components/Register';
import SavedMovies from './components/SavedMovies';
import Profile from './components/Profile';
import Login from './components/Login';
import NotFound from './components/NotFound';
import * as api from './utils/MainApi'
import { useEffect, useState } from 'react';
import ProtectedRoute from './utils/ProtectedRoute';
import currentUserContext from './utils/currentUserContext';
import { getMovies } from './utils/MovieApi';


function App() {
  const [searchMovies, setSearchMovies] = useState([])
  const navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loginStatus') || false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userData')) || {});
  const [foundFilm, setFoundFilm] = useState(JSON.parse(localStorage.getItem('movies')) || [])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovie')) || [])
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
      setCurrentUser(userData)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    if (isLoggedIn) {
      getMovies()
        .then((data) => {
          setSearchMovies(data)
        })
    } else return
  }, [isLoggedIn])

  const handleResize = (e) => {
    setWindowSize(window.innerWidth)
  }

  const movieDelete = (movieIndex) => {
    const newSavedMovie = savedMovies.filter((_, index) => index !== movieIndex)
    setSavedMovies(newSavedMovie)
  }

  const addFilms = (movie) => {
    setIsLoading(true);
    localStorage.setItem('movies', JSON.stringify(movie))
    setTimeout(() => {
      setIsLoading(false)
      setFoundFilm(movie)
    }, 1000)
  }

  const saveFilms = (movie) => {
    // if (savedMovies.some((savedMovie) => savedMovie.id === movie.id)) {
    //   const updatedSavedMovies = savedMovies.filter((savedMovie) => savedMovie.id !== movie.id);
    //   setSavedMovies(updatedSavedMovies);
    // } else {
    //   setSavedMovies(movie);
    // }
    console.log(movie)
    setSavedMovies([movie])
    localStorage.setItem('savedMovie', JSON.stringify([movie]))
    console.log('работает')
  }

  const onRegister = (name, email, password) => {
    console.log(name, email, password)
    api.register(name, email, password)
      .then((res) => {
        console.log(res)
        onLogin(email, password)
      })
      .catch(err => console.log(err))
  }

  const logout = () => {
    api.signout()
      .then((res) => {
        setIsLoggedIn(false);
        localStorage.clear()
      })
  }

  const onLogin = (email, password) => {
    api.login(email, password)
      .then((res) => {
        setIsLoggedIn(true)
        setCurrentUser(res.data)
        localStorage.setItem('loginStatus', true)
        localStorage.setItem('userData', JSON.stringify(res.data))
        console.log({ res: res, currentUser: currentUser })
        navigation('/', { replace: true })
      })
      .catch(err => console.log(err))
  }

  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path='/' element={<>
            <Header isLoggedIn={isLoggedIn} />
            <Main />
            <Footer />
          </>} />
          <Route path='/movies' element={
            <>
              <Header isLoggedIn={isLoggedIn} />
              <ProtectedRoute element={Movie} isLoading={isLoading} windowSize={windowSize} movies={foundFilm} addFilms={addFilms} addFavorite={saveFilms} searchMovies={searchMovies} isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          } />
          <Route path='/saved-movies' element={<>
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute element={SavedMovies} movieDelete={movieDelete} windowSize={windowSize} movies={savedMovies} addFilms={addFilms} saveFilms={saveFilms} searchMovies={searchMovies} isLoggedIn={isLoggedIn} />
            <Footer />
          </>} />
          <Route path='/profile' element={<>
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute element={Profile} logout={logout} isLoggedIn={isLoggedIn} />
          </>} />
          <Route path='/signup' element={isLoggedIn ? <Navigate to="/" /> : <Register onRegister={onRegister} />} />
          <Route path='/signin' element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={onLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
