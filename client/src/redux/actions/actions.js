import axios from "axios";
import { GET_ALBUM, GET_ARTIST, GET_TRACK, LOGIN, REGISTER, REGISTER_FAILED, SET_CURRENT_TRACK, SET_PLAYER_TRACK } from "./actionsTypes";

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
        const userLoged = await axios.post(`${URL}/auth/login`, user, {withCredentials: true});
        if (userLoged.data.user) localStorage.setItem("user", JSON.stringify(userLoged.data.user));
        return dispatch({
            type: LOGIN, payload: userLoged
        })
    } catch (e) {
        console.log(e);
    }
}