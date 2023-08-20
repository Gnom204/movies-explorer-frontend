import search from '../images/search.svg'
import FilterCheckBox from './FilterCheckBox';
function SearchForm() {
    return (
        <form className="pageInfo searchForm">
            <div className="searchForm__container">
                <div className="searchForm__search-container">
                    <img className="searchForm__img" alt='Лупа' src={search} />
                    <input required className="searchForm__input" type="text" placeholder="Фильм" />
                    <button type='submit' className="searchForm__btn" />
                </div>
                <div className="searchForm__checkbox-container">
                    <FilterCheckBox />
                    <span className="searchForm__description">Короткометражки</span>
                </div>
            </div>
        </form>
    )
}
export default SearchForm;
