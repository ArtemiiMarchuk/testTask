import {GET_PHOTO, SEARCH_PHOTOS, SET_LOADING} from '../types'

const handlers = {
    [SEARCH_PHOTOS]: (state, {payload}) => ({...state, photos: payload, loading: false}),
    [GET_PHOTO]: (state, {payload}) => ({...state, activePhoto: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const unsplashReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
