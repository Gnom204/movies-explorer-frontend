import { useEffect, useState } from 'react';
import search from '../images/search.svg'
import FilterCheckBox from './FilterCheckBox';
function SearchForm({ searchMovies, addFilms, foundFilm }) {
    const [errorText, setErrorText] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [checkActive, setCheckActive] = useState(false);

    // useEffect(() => {
    //     const status = localStorage.getItem('activeStatus')
    //     setCheckActive(status)
    //     console.log(status)
    // }, [])

    useEffect(() => {
        addFilms(filteredMovies)
    }, [checkActive])

    const filteredMovies = searchMovies.filter(({ nameRU, nameEN, duration }) => {
        if (checkActive && duration > 40) {
            return false
        } else if (checkActive && duration <= 40) {
            return duration <= 40 && (nameRU.toLowerCase().includes(inputValue.toLowerCase()) || nameEN.toLowerCase().includes(inputValue.toLowerCase()))
        }

        return nameRU.toLowerCase().includes(inputValue.toLowerCase()) || nameEN.toLowerCase().includes(inputValue.toLowerCase())
    })

    const getInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const searchMovie = (e) => {
        e.preventDefault();
        setInputValue('')
        if (inputValue === '') {
            setErrorText('Нужно ввести ключевое слово')
        } else {
            addFilms(filteredMovies)
        }
    }

    const checkBoxHandler = (isChecked) => {
        setCheckActive(isChecked)
        console.log(isChecked)
    }

    return (
        <form onSubmit={searchMovie} className="pageInfo searchForm">
            <div className="searchForm__container">
                <div className="searchForm__search-container">
                    <img className="searchForm__img" alt='Лупа' src={search} />
                    <input onChange={getInputValue} value={inputValue} className="searchForm__input" type="text" placeholder="Фильм" />
                    <span>{errorText}</span>
                    <button type='submit' className="searchForm__btn" />
                </div>
                <div className="searchForm__checkbox-container">
                    <FilterCheckBox checkBoxHandler={checkBoxHandler} />
                    <span className="searchForm__description">Короткометражки</span>
                </div>
            </div>
        </form>
    )
}
export default SearchForm;
