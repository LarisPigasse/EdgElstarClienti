import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {apiGetCorrieri} from 'services/CorrieriService'

export const getCorrieri = createAsyncThunk(
    'trackingSpedizioneForm/data/getCorrieri',
    async () => {
        const response = await apiGetCorrieri()
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'trackingSpedizioneForm/data',
    initialState: {
        loading: false,
        spedizioneData: [],
        corrieriData: [],
    },
    reducers: {},
    extraReducers: {
        [getCorrieri.fulfilled]: (state, action) => {
            state.corrieriData = action.payload
            state.loading = false
        }       
    },
})

export default dataSlice.reducer
