import {
    GET_ALBUM, GET_ALBUM_BY_ID, GET_ARTIST, GET_TRACK, LOGIN, LOGOUT, REGISTER, REGISTER_FAILED, SET_CURRENT_TRACK, SET_PLAYER_TRACK,
    SET_CURRENT_QUEUE,
    GET_TRACKS_BY_ID,
    CLEAR_SEARCH,
    POST_REVIEW,
    GET_REVIEW_BY_ID,
    GET_REVIEWS_BY_ALBUM,
    GET_REVIEWS_BY_USER,
    CLEAR_REVIEW,
    ADD_FAV_TRACK,
    DEL_FAV_TRACK,
    ADD_FAV_ALBUM,
    GET_ALBUMS_BY_ID,
    DEL_FAV_ALBUM,
    GET_LAST_REVIEWS
} from "../actions/actionsTypes";


const initialState = {
    playerTrack: [],
    artists: [],
    tracks: [],
    albums: [],
    album: [],
    currentTrack: {},
    currentQueue: [],
    registerStatus: undefined,
    user: JSON.parse(localStorage.getItem("user")),
    review: {},
    reviews: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTIST:
            return {
                ...state,
                artists: action.payload
            }
        case GET_TRACK:
            return {
                ...state,
                tracks: action.payload
            }
        case GET_ALBUM:
            return {
                ...state,
                albums: action.payload
            }
        case SET_PLAYER_TRACK:
            return {
                ...state,
                playerTrack: action.payload,
            }
        case SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.payload
            }
        case SET_CURRENT_QUEUE:
            return {
                ...state,
                currentQueue: action.payload
            }
        case GET_ALBUM_BY_ID:
            return {
                ...state,
                album: action.payload,
                currentQueue: action.payload.tracks.data
            }
        case REGISTER:
            return {
                ...state,
                registerStatus: action.payload
            }
        case REGISTER_FAILED:
            // console.log("errorrr")
            return {
                ...state,
                registerStatus: action.payload
            }
        case LOGIN:
            // console.log(action.payload.data.user)
            localStorage.setItem("user", JSON.stringify(action.payload.data.user));
            return {
                ...state,
                user: action.payload.data.user
            }
        case LOGOUT:
            localStorage.removeItem("user");
            document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // console.log("me jui")
            return {
                ...state
            }
        case ADD_FAV_TRACK:
        case ADD_FAV_ALBUM:
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            // console.log(action.payload.user)
            return {
                ...state,
                user: action.payload.user
            }
        case DEL_FAV_TRACK:
        case DEL_FAV_ALBUM:
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                ...state,
                user: action.payload.user
            }
        case GET_TRACKS_BY_ID:
            // console.log(action.payload)
            return {
                ...state,
                tracks: action.payload
            }
        case GET_ALBUMS_BY_ID:
            // console.log(action.payload)
            return {
                ...state,
                albums: action.payload
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                tracks: [],
                albums: [],
                artists: []
            }
        case POST_REVIEW:
            return {
                ...state,
                review: action.payload
            }
        case GET_REVIEW_BY_ID:
            return {
                ...state,
                review: action.payload
            }
        case GET_REVIEWS_BY_ALBUM:
        case GET_REVIEWS_BY_USER:
        case GET_LAST_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        case CLEAR_REVIEW:
            return {
                ...state,
                review: {},
                reviews: {}
            }
        default: return state;
    }
}

export default rootReducer;