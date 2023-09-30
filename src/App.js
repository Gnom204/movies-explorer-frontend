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
  const [newSavedMovies, setNewSavedMovies] = useState([])
  const [errorText, setErrorText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loginStatus') || false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userData')) || {});
  const [foundFilm, setFoundFilm] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovie')) || [])
  const [isLoading, setIsLoading] = useState(false);
  const [errorTextProfile, setErrorTextProfile] = useState('')
  const [firstSearch, setFirstSearch] = useState(localStorage.getItem('firstSearch') || false)
  const [errorMassage, setErrorMassage] = useState('')

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
      setCurrentUser(userData)
    }
  }, [])

  // useEffect(() => {
  //   if (localStorage.getItem('movies') !== undefined) {
  //     setFoundFilm(JSON.parse(localStorage.getItem('movies')))
  //   }
  // }, [])

  useEffect(() => {
    api.getMovies()
      .then((movies) => {
        setSavedMovies(movies)
        setNewSavedMovies(movies)
      }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const handleResize = (e) => {
    setWindowSize(window.innerWidth)
  }

  const movieDelete = (movieIndex) => {
    api.deleteMovie(movieIndex)
      .then((complete) => console.log('удалено', complete))
    const newSavedMovie = savedMovies.filter((movie, index) => movie._id !== movieIndex)
    setSavedMovies(newSavedMovie)
    setNewSavedMovies(newSavedMovie)
  }

  const getSearchFilm = () => {
    getMovies()
      .then((movies) => {
        setSearchMovies(movies)
        setFirstSearch(true)
        localStorage.setItem('firstSearch', firstSearch)
      })
      .catch(err => console.log(err))
  }

  const getFilteredMovies = (word, checkActive) => {
    getMovies()
      .then((movies) => {
        setSearchMovies(movies)
        setFirstSearch(true)
        localStorage.setItem('firstSearch', firstSearch)

        const newMovies = movies.filter(({ nameRU, nameEN, duration }) => {
          if (checkActive === true && duration > 40) {
            return false
          } else if (checkActive && duration <= 40) {
            return duration <= 40 && (nameRU.toLowerCase().includes(word.toLowerCase()) || nameEN.toLowerCase().includes(word.toLowerCase()))
          }
          return nameRU.toLowerCase().includes(word.toLowerCase()) || nameEN.toLowerCase().includes(word.toLowerCase())
        })
        localStorage.setItem('moviesData', JSON.stringify(newMovies))
        setIsLoading(true)
        if (newMovies.length === 0) {
          setErrorMassage('Ничего не найдено')
        } else {
          setErrorMassage('')
        }
        setTimeout(() => {
          setIsLoading(false)
          setFoundFilm(newMovies)
        }, 2000)
      })
      .catch(err => console.log(err))
  }

  const getFilteredSaveMovies = (word, checkActive) => {
    const newMovies = savedMovies.filter(({ nameRU, nameEN, duration }) => {
      if (checkActive === true && duration > 40) {
        return false
      } else if (checkActive && duration <= 40) {
        return duration <= 40 && (nameRU.toLowerCase().includes(word.toLowerCase()) || nameEN.toLowerCase().includes(word.toLowerCase()))
      }
      return nameRU.toLowerCase().includes(word.toLowerCase()) || nameEN.toLowerCase().includes(word.toLowerCase())
    })
    setIsLoading(true)
    if (newMovies.length === 0) {
      setErrorMassage('Ничего не найдено')
    } else {
      setErrorMassage('')
    }
    setTimeout(() => {
      setIsLoading(false)
      setNewSavedMovies(newMovies)
    }, 2000)
  }

  const test = ({ country, director, duration, year, description, nameRU, nameEN, id, trailerLink }, thumbnail, image) => {
    console.log({ country, director, duration, year: Number(year), description, nameRU, nameEN, id: id, trailerLink, thumbnail, image: `https://api.nomoreparties.co/${image}` })
  }

  const searchSaveFilm = (movie) => {
    setNewSavedMovies(movie)
    console.log({ saved: savedMovies, newSaved: newSavedMovies, films: saveFilms })
  }

  const saveFilms = (movie) => {
    console.log(movie)
    test(movie, movie.image.url, movie.image.url)
    api.addMovies(movie)
      .then((film) => {
        setSavedMovies([...savedMovies, film])
        setNewSavedMovies([...newSavedMovies, film])
      })
      .catch((err) => console.log(err))
    console.log('работает')
  }

  const onRegister = (name, email, password) => {
    setErrorText('')
    console.log(name, email, password)
    api.register(name, email, password)
      .then((res) => {
        onLogin(email, password)
      })
      .catch(err => setErrorText('Пользователь уже существует'))
  }

  const logout = () => {
    api.signout()
      .then((res) => {
        setIsLoggedIn(false);
        setFoundFilm([])
        localStorage.clear()
        console.log(res)
      })
  }

  const updateUser = (name, email) => {
    if (name === currentUser.name || email === currentUser.email) {
      setErrorTextProfile('Введенные данные не изменились')
      console.log(currentUser.email)
    } else {
      setErrorTextProfile('Данные успешнно изменены')
      console.log(currentUser.email)
      api.updateProfile(name, email)
        .then((user) => {
          console.log(user)
          setCurrentUser(user)
          localStorage.setItem('userData', JSON.stringify(user))
        })
        .catch(err => setErrorTextProfile('Пользователь с таким email уже существует'))
    }
  }

  const onLogin = (email, password) => {
    setErrorText('')
    api.login(email, password)
      .then((res) => {
        setErrorText('')
        setIsLoggedIn(true)
        setCurrentUser(res.data)
        localStorage.setItem('loginStatus', true)
        localStorage.setItem('userData', JSON.stringify(res.data))
        navigation('/movies', { replace: true })
      })
      .catch(err => {
        setErrorText('Неверные логин или пароль')
      })
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
              <ProtectedRoute element={Movie} errorMassage={errorMassage} getSearchedFilm={getSearchFilm} firstSearch={firstSearch} getFilteredMovies={getFilteredMovies} saveMovies={savedMovies} movieDelete={movieDelete} isLoading={isLoading} windowSize={windowSize} movies={foundFilm} addFilms={setFoundFilm} addFavorite={saveFilms} searchMovies={searchMovies} isLoggedIn={isLoggedIn} />
              <Footer />
            </>
          } />
          <Route path='/saved-movies' element={<>
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute getFilteredMovies={getFilteredSaveMovies} errorMassage={errorMassage} element={SavedMovies} isLoading={isLoading} newMovies={savedMovies} movieDelete={movieDelete} windowSize={windowSize} movies={newSavedMovies} addFilms={searchSaveFilm} saveFilms={saveFilms} searchMovies={searchMovies} isLoggedIn={isLoggedIn} />
            <Footer />
          </>} />
          <Route path='/profile' element={<>
            <Header isLoggedIn={isLoggedIn} />
            <ProtectedRoute element={Profile} errorTextProfile={errorTextProfile} update={updateUser} logout={logout} isLoggedIn={isLoggedIn} />
          </>} />
          <Route path='/signup' element={isLoggedIn ? <Navigate to="/" /> : <Register errorText={errorText} setError={setErrorText} onRegister={onRegister} />} />
          <Route path='/signin' element={isLoggedIn ? <Navigate to="/" /> : <Login errorText={errorText} setError={setErrorText} onLogin={onLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
