import MoviesCard from "./MoviesCard";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies() {
    return (
        <>
            <SearchForm />
            <MoviesCardList>
                <MoviesCard saveCard={true} link='https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg' name='33 слова о дизайне' time='33ч13м' />
                <MoviesCard saveCard={true} link='https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg' name='33 слова о дизайне' time='33ч13м' />
                <MoviesCard saveCard={true} link='https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg' name='33 слова о дизайне' time='33ч13м' />
                <MoviesCard saveCard={true} link='https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg' name='33 слова о дизайне' time='33ч13м' />
                <MoviesCard saveCard={true} link='https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg' name='33 слова о дизайне' time='33ч13м' />
            </MoviesCardList>
        </>
    )
}
export default SavedMovies;
