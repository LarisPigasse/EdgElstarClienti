import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSistemaClienti, apiDeleteClienti, apiInsertClienti, apiUpdateClienti } from 'services/ClientiService'

export const getClienti = createAsyncThunk(
    'crmCliente/data/getClienti',
    async (data) => {
        const response = await apiGetSistemaClienti(data)
        return response.data
    }
)

export const insertClienti = async ( data ) => {
    const response = await apiInsertClienti(data)
    return response.data
}

export const updateClienti = async ( data, params ) => {
    const response = await apiUpdateClienti(data, params)
    return response.data
}

export const deleteClienti = async (data) => {
    console.log(data);
    const response = await apiDeleteClienti(data)
    return response.data
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
    name: 'crmCliente/data',
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
        [getClienti.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getClienti.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setClienti, setTableData } = dataSlice.actions

export default dataSlice.reducer
