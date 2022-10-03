import { GET_ALBUM, GET_ARTIST, GET_TRACK, SET_PLAYER_TRACK } from "../actions/actionsTypes";


const initialState = {
    playerTrack: [],
    artists: [],
    tracks: [],
    albums: [],
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
                playerTrack: action.payload
            }
        default: return state;
    }
}

export default rootReducer;