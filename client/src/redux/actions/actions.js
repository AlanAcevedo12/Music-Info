import axios from "axios";
import { ADD_FAV_ALBUM, ADD_FAV_TRACK, CLEAR_REVIEW, CLEAR_SEARCH, DEL_FAV_ALBUM, DEL_FAV_TRACK, GET_ALBUM, GET_ALBUMS_BY_ID, GET_ALBUM_BY_ID, GET_ARTIST, GET_LAST_REVIEWS, GET_REVIEWS_BY_ALBUM, GET_REVIEWS_BY_USER, GET_REVIEW_BY_ID, GET_TRACK, GET_TRACKS_BY_ID, LOGIN, LOGOUT, POST_REVIEW, REGISTER, REGISTER_FAILED, SET_CURRENT_QUEUE, SET_CURRENT_TRACK, SET_PLAYER_TRACK } from "./actionsTypes";

const URL = "http://localhost:3001";

export const getArtist = (artistName) => async dispatch => {
    try {
        const { data } = await axios.get(`${URL}/search/artist?q=${artistName}`);
        return dispatch({ type: GET_ARTIST, payload: data.data })
    } catch (e) {
        console.log(e);
    }
};

export const getTrack = (trackName) => async dispatch => {
    try {
        const { data } = await axios.get(`${URL}/search/track?q=${trackName}`);
        return dispatch({ type: GET_TRACK, payload: data.data })
    } catch (e) {
        console.log(e);
    }
};

export const getAlbum = (albumName) => async dispatch => {
    try {
        const { data } = await axios.get(`${URL}/search/album?q=${albumName}`);
        return dispatch({ type: GET_ALBUM, payload: data.data })
    } catch (e) {
        console.log(e);
    }
};

export const setPlayerTrack = (track) => dispatch => {
    return dispatch({
        type: SET_PLAYER_TRACK, payload: track
    })
}

export const setCurrentTrack = (track) => dispatch => {
    return dispatch({
        type: SET_CURRENT_TRACK, payload: track
    })
}

export const setCurrentQueue = (queue) => dispatch => {
    return dispatch({
        type: SET_CURRENT_QUEUE, payload: queue
    })
}

export const getAlbumById = (id) => async dispatch => {
    const { data } = await axios.get(`${URL}/get/album?q=${id}`)
    return dispatch({
        type: GET_ALBUM_BY_ID, payload: data
    })
}

export const register = (user) => async dispatch => {
    try {
        const createdUser = await axios.post(`${URL}/auth/register`, user);
        return dispatch({
            type: REGISTER, payload: createdUser
        })
    } catch (e) {
        return dispatch({
            type: REGISTER_FAILED, payload: "Error"
        })
    }
}

export const login = (user) => async dispatch => {
    try {
        const userLoged = await axios.post(`${URL}/auth/login`, user, { withCredentials: true });
        if (userLoged.data.user) localStorage.setItem("user", JSON.stringify(userLoged.data.user));
        return dispatch({
            type: LOGIN, payload: userLoged
        })
    } catch (e) {
        console.log(e);
    }
}

export const logout = () => async dispatch => {
    try {
        const userLoged = await axios.post(`${URL}/auth/logout`, { withCredentials: true });
        return dispatch({
            type: LOGOUT, payload: userLoged
        })
    } catch (e) {
        console.log(e);
    }
}

export const addFavoriteTracks = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/addFav/tracks`, fav);
    return dispatch({
        type: ADD_FAV_TRACK, payload: data
    })
}

export const removeFavoriteTracks = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/removeFav/tracks`, fav);
    return dispatch({
        type: DEL_FAV_TRACK, payload: data
    })
}

export const addFavoriteAlbums = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/addFav/albums`, fav);
    return dispatch({
        type: ADD_FAV_ALBUM, payload: data
    })
}

export const removeFavoriteAlbums = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/removeFav/albums`, fav);
    return dispatch({
        type: DEL_FAV_ALBUM, payload: data
    })
}

export const getTracksById = (ids) => async dispatch => {
    const { data } = await axios.post(`${URL}/get/track`, { tracksId: ids });

    return dispatch({
        type: GET_TRACKS_BY_ID, payload: data
    })
}

export const getAlbumsById = (ids) => async dispatch => {
    const { data } = await axios.post(`${URL}/get/albums`, { albumsId: ids });

    return dispatch({
        type: GET_ALBUMS_BY_ID, payload: data
    })
}

export const clearSearch = () => dispatch => {
    return dispatch({
        type: CLEAR_SEARCH, payload: []
    })
}

export const postReview = (review) => async dispatch => {
    const { data } = await axios.post(`${URL}/review/create`, review);
    return dispatch({
        type: POST_REVIEW, payload: data
    })
}

export const getReviewById = (id) => async dispatch => {
    const { data } = await axios.get(`${URL}/review?id=${id}`);
    // console.log(id)
    return dispatch({
        type: GET_REVIEW_BY_ID, payload: data
    })
}

export const getReviewsByUser = (userId) => async dispatch => {
    const { data } = await axios.get(`${URL}/reviews?userId=${userId}`);

    return dispatch({
        type: GET_REVIEWS_BY_ALBUM, payload: data
    })
}

export const getReviewsByAlbum = (albumId) => async dispatch => {
    const { data } = await axios.get(`${URL}/reviews?albumId=${albumId}`);

    return dispatch({
        type: GET_REVIEWS_BY_USER, payload: data
    })
}

export const getLastReviews = () => async dispatch => {
    const { data } = await axios.get(`${URL}/reviews`);

    return dispatch({
        type: GET_LAST_REVIEWS, payload: data
    })
}

export const clearReview = () => async dispatch => {
    return dispatch({
        type: CLEAR_REVIEW, payload: null
    })
}