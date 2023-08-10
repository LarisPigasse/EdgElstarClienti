import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetLogisticaCorrieri, apiDeleteCorrieri, apiInsertCorrieri, apiUpdateCorrieri } from 'services/CorrieriService'

export const getCorrieri = createAsyncThunk(
    'logisticaCorriere/data/getCorrieri',
    async (data) => {
        const response = await apiGetLogisticaCorrieri(data)
        return response.data
    }
)

export const insertCorrieri = async ( data ) => {
    const response = await apiInsertCorrieri(data)
    return response.data
}

export const updateCorrieri = async ( data, params ) => {
    const response = await apiUpdateCorrieri(data, params)
    return response.data
}

export const deleteCorrieri = async (data) => {
    const response = await apiDeleteCorrieri(data)
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
    name: 'logisticaCorriere/data',
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
        [getCorrieri.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getCorrieri.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setCorrieri, setTableData } = dataSlice.actions

export default dataSlice.reducer
