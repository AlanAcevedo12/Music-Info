import axios from "axios";
import { GET_ALBUM, GET_ARTIST, GET_TRACK, SET_CURRENT_TRACK, SET_PLAYER_TRACK } from "./actionsTypes";

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
