import search from '../images/icon.png'
import FilterCheckBox from './FilterCheckBox';
function SearchForm() {
    return (
        <form className="pageInfo searchForm">
            <div className="searchForm__container">
                <img className="searchForm__img" alt='Лупа' src={search} />
                <input className="searchForm__input" type="text" placeholder="Фильм" />
                <button type='submit' className="searchForm__btn" />
                <div className="searchForm__checkbox-container">
                    <FilterCheckBox />
                    <span className="searchForm__description">Короткометражки</span>
                </div>
            </div>
        </form>
    )
}
export default SearchForm;
