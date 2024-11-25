import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bannerData: [],
    ImageURL: ""
}

export const movieSlices = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageURL: (state, action) => { state.ImageURL = action.payload }

    }
})

export const { setBannerData, setImageURL } = movieSlices.actions
export default movieSlices.reducer