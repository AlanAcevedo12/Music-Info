import axios from "axios";
import { ADD_FAV, DEL_FAV, GET_ALBUM, GET_ALBUM_BY_ID, GET_ARTIST, GET_TRACK, GET_TRACKS_BY_ID, LOGIN, LOGOUT, REGISTER, REGISTER_FAILED, SET_CURRENT_QUEUE, SET_CURRENT_TRACK, SET_PLAYER_TRACK } from "./actionsTypes";

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
            type: REGISTER_FAILED, payload: e
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

export const addFavorite = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/addFav`, fav);
    return dispatch({
        type: ADD_FAV, payload: data
    })
}

export const removeFavorite = (fav) => async dispatch => {
    // console.log(fav);
    const { data } = await axios.put(`${URL}/favorite/removeFav`, fav);
    return dispatch({
        type: DEL_FAV, payload: data
    })
}

export const getTracksById = (ids) => async dispatch => {
    console.log(ids);
    let objeto = {nombre: "Alan"}
    const { data } = await axios.post(`${URL}/get/track`, {tracksId: ids});

    return dispatch({
        type: GET_TRACKS_BY_ID, payload: data
    })
}