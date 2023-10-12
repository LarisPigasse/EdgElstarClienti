import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSpedizioni, apiDeleteSpedizioni, apiInsertSpedizioni, apiUpdateSpedizioni, apiGetTrackingSpedizione } from 'services/SpedizioniService'

export const getSpedizioni = createAsyncThunk(
    'trackingSpedizioni/data/getSpedizioni',
    async (data) => {
        const response = await apiGetSpedizioni(data)
        return response.data
    }
)

export const insertSpedizioni = async ( data ) => {
    const response = await apiInsertSpedizioni(data)
    return response.data
}

export const updateSpedizioni = async ( data, params ) => {
    const response = await apiUpdateSpedizioni(data, params)
    return response.data
}

export const deleteSpedizioni = async (data) => {
    const response = await apiDeleteSpedizioni(data)
    return response.data
}

export const getTrackingSpedizione = async (data) => {
    const response = await apiGetTrackingSpedizione(data)
    return await response.data
}


export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: '',
    },
}

const dataSlice = createSlice({
    name: 'trackingSpedizioni/data',
    initialState: {
        loading: false,
        orderList: [],
        tableData: initialTableData
    },
    reducers: {
        setTrackingSpedizione: (state, action) => {
            state.trackingSpedizione = action.payload
        },
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
    },
    extraReducers: {
        [getSpedizioni.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getSpedizioni.pending]: (state) => {
            state.loading = true
        }
    },
})

export const { setSpedizioni, setTableData, setTrackingSpedizioni } = dataSlice.actions

export default dataSlice.reducer
