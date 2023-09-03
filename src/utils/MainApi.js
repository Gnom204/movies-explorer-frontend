import { BASE_URL } from "./config";

// const defaultOptions = {
//     credentials: 'include',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }

export const getMovies = () => {
    return fetch(BASE_URL + '/movies', {
        credentials: 'include',
    })
        .then((res) => {
            return handleError(res)
        })
        .then((data) => {
            console.log(data)
        })
}

export const getUserInfo = () => {
    return fetch(BASE_URL + '/users/me', {
        credentials: 'include'
    })
        .then((res) => {
            handleError(res)
        })
        .then((data) => {
            console.log(data)
        })
}

export const deleteMovie = (movieId) => {
    return fetch(BASE_URL + `movies/${movieId}`, {
        method: 'DELETE',
        credentials: 'include'
    })
        .then((res) => {
            return handleError(res)
        })
        .then((data) => {
            console.log(data)
        })
}

export const addMovies = ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, id }) => {
    return fetch(BASE_URL + '/movies', {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "country": country,
            "director": director,
            "duration": duration,
            "year": year,
            "description": description,
            "image": image,
            "trailerLink": trailerLink,
            "nameRU": nameRU,
            "nameEN": nameEN,
            "thumbnail": thumbnail,
            "movieId": id,
        })
    })
        .then((res) => {
            return handleError(res)
        })
        .then((data) => {
            console.log(data)
        })
}

export const login = (email, password) => {
    return fetch(BASE_URL + '/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
        .then((res) => {
            return handleError(res)
        })
}

export const register = (name, email, password) => {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        })
    })
        .then((res) => {
            return handleError(res)
        })
}

export const signout = () => {
    return fetch(BASE_URL + '/signout', {
        credentials: 'include',
        method: 'POST',
    })
        .then((res) => {
            return handleError(res)
        })
}

export const handleError = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
}