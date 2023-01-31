import {
    GET_ALBUM, GET_ALBUM_BY_ID, GET_ARTIST, GET_TRACK, LOGIN, LOGOUT, REGISTER, REGISTER_FAILED, SET_CURRENT_TRACK, SET_PLAYER_TRACK,
    SET_CURRENT_QUEUE,
    ADD_FAV,
    DEL_FAV,
    GET_TRACKS_BY_ID,
    CLEAR_SEARCH,
    POST_REVIEW,
    GET_REVIEW_BY_ID,
    GET_REVIEWS_BY_ALBUM,
    GET_REVIEWS_BY_USER
} from "../actions/actionsTypes";


const initialState = {
    playerTrack: [],
    artists: [],
    tracks: [],
    albums: [],
    album: [],
    currentTrack: {},
    currentQueue: [],
    registerError: undefined,
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
                registerError: null
            }
        case REGISTER_FAILED:
            // console.log("errorrr")
            return {
                ...state,
                registerError: action.payload
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
        case ADD_FAV:
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            // console.log(action.payload.user)
            return {
                ...state,
                user: action.payload.user
            }
        case DEL_FAV:
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
            return {
                ...state,
                reviews: action.payload
            }
        case GET_REVIEWS_BY_USER:
            return {
                ...state,
                reviews: action.payload
            }
        default: return state;
    }
}

export default rootReducer;