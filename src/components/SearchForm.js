import { useEffect, useState } from 'react';
import search from '../images/search.svg'
import FilterCheckBox from './FilterCheckBox';
function SearchForm({ searchMovies, errorMassage, getSearchedFilm, getFilteredMovies, addFilms, isSave, foundFilm }) {
    const [errorText, setErrorText] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [checkActive, setCheckActive] = useState(localStorage.getItem('activeStatus') || false);
    const [checkSaveActive, setCheckSaveActive] = useState(false)
    const [localLoading, setLocalLoading] = useState(false)
    // useEffect(() => {
    //     localStorage.setItem('moviesData', JSON.stringify(getFilteredMovies(inputValue, checkActive)))
    // }, [checkActive])

    useEffect(() => {
        if (localStorage.getItem('moviesData') !== undefined) {
            if (!isSave) {
                const searchWord = localStorage.getItem('searchWord');
                const status = localStorage.getItem('activeStatus')
                const movies = JSON.parse(localStorage.getItem('moviesData'))
                if (searchWord) {
                    if (!isSave) {
                        addFilms(movies)
                        setInputValue(searchWord)
                        setCheckActive(status)
                        setLocalLoading(true)
                    }
                }
            }
        }
    }, [])

    useEffect(() => {
        if (localLoading === true) {
            if (!isSave) {
                getFilteredMovies(inputValue, checkActive)
            } else {
                getFilteredMovies(inputValue, checkSaveActive)
            }
        }
        console.log(localLoading)
    }, [checkActive, checkSaveActive])

    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchMovie = (e) => {
        e.preventDefault();
        if (!isSave) {
            console.log(getSearchedFilm)
            if (inputValue === '') {
                setErrorText('Нужно ввести ключевое слово')
            } else {
                setErrorText('')
                getFilteredMovies(inputValue, checkActive)
                localStorage.setItem('searchWord', inputValue)
            }
        } else {
            if (inputValue === '') {
                setErrorText('Нужно ввести ключевое слово')
            } else {
                setErrorText('')
                getFilteredMovies(inputValue, checkSaveActive)
                console.log(errorMassage)
            }
        }
    }

    const checkBoxHandler = (isChecked) => {
        setLocalLoading(true)
        setCheckActive(isChecked)
    }

    const saveCheckBoxHandler = (isChecked) => {
        setLocalLoading(true)
        setCheckSaveActive(isChecked)
    }

    return (
        <form onSubmit={searchMovie} className="pageInfo searchForm">
            <div className="searchForm__container">
                <div className="searchForm__search-container">
                    <img className="searchForm__img" alt='Лупа' src={search} />
                    <input onChange={getInputValue} value={inputValue} className="searchForm__input" type="text" placeholder="Фильм" />
                    <span>{errorText ? errorText : errorMassage}</span>
                    <button type='submit' className="searchForm__btn" />
                </div>
                <div className="searchForm__checkbox-container">
                    <FilterCheckBox saveCheckBoxHandler={saveCheckBoxHandler} isSave={isSave} checkBoxHandler={checkBoxHandler} />
                    <span className="searchForm__description">Короткометражки</span>
                </div>
            </div>
        </form>
    )
}
export default SearchForm;
