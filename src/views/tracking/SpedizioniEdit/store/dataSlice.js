import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSpedizione, apiUpdateSpedizioni} from 'services/SpedizioniService'
import {apiGetCorrieri} from 'services/CorrieriService'

export const getSpedizione = createAsyncThunk(
    'trackingSpedizioneEdit/data/getSpedizioni',
    async (data) => {
        const response = await apiGetSpedizione(data.id)
        return response.data
    }
)

export const updateSpedizione = async (data) => {
    const response = await apiUpdateSpedizioni(data.id)
    return response.data
}

export const getCorrieri = createAsyncThunk(
    'trackingSpedizioneEdit/data/getCorrieri',
    async () => {
        const response = await apiGetCorrieri()
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'trackingSpedizioneEdit/data',
    initialState: {
        loading: false,
        spedizioneData: [],
        corrieriData: [],
    },
    reducers: {},
    extraReducers: {
        [getSpedizione.fulfilled]: (state, action) => {
            state.spedizioneData = action.payload
            state.loading = false
        },
        [getSpedizione.pending]: (state) => {
            state.loading = true
        },
        [getCorrieri.fulfilled]: (state, action) => {
            state.corrieriData = action.payload
            state.loading = false
        },        
    },
})

export default dataSlice.reducer
