import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSistemaOperatori, apiDeleteSistemaOperatori } from 'services/OperatoriService'

export const getOperatori = createAsyncThunk(
    'salesProductList/data/getOrders',
    async (data) => {
        const response = await apiGetSistemaOperatori(data)
        return response.data
    }
)

export const deleteOperatori = async (data) => {
    const response = await apiDeleteSistemaOperatori(data)
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
    name: 'sistemaOPeratori/data',
    initialState: {
        loading: false,
        orderList: [],
        tableData: initialTableData,
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
        [getOperatori.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getOperatori.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setOperatori, setTableData } = dataSlice.actions

export default dataSlice.reducer
