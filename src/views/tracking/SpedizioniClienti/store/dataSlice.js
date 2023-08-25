import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSpedizioniClienti, apiGetSpedizioniClientiArchiviate } from 'services/SpedizioniService'

export const getSpedizioniClienti = createAsyncThunk(
    'trackingSpedizioni/data/getSpedizioniClienti',
    async (data) => {
        console.log(data)
        const response = await apiGetSpedizioniClienti(data)
        return response.data
    }
)

export const getSpedizioniArchiviate = createAsyncThunk(
    'trackingSpedizioni/data/getSpedizioniClientiArchiviate',
    async (data) => {
        const response = await apiGetSpedizioniClientiArchiviate(data)
        return response.data
    }
)

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
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
    },
    extraReducers: {
        [getSpedizioniClienti.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getSpedizioniClienti.pending]: (state) => {
            state.loading = true
        },
        [getSpedizioniArchiviate.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getSpedizioniArchiviate.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setSpedizioni, setTableData } = dataSlice.actions

export default dataSlice.reducer
