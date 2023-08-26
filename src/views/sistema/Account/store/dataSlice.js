import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSistemaAccount, apiDeleteAccount, apiInsertAccount, apiUpdateAccount } from 'services/AccountService'

export const getAccount = createAsyncThunk(
    'sistemaAccount/data/getAccount',
    async (data) => {
        const response = await apiGetSistemaAccount(data)
        return response.data
    }
)

export const insertAccount = async ( data ) => {
    const response = await apiInsertAccount(data)
    return response.data
}

export const updateAccount = async ( data, params ) => {
    const response = await apiUpdateAccount(data, params)
    return response.data
}

export const deleteAccount = async (data) => {
    console.log(data);
    const response = await apiDeleteAccount(data)
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
    name: 'sistemaAccount/data',
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
        [getAccount.fulfilled]: (state, action) => {
            state.orderList = action.payload.data
            state.tableData.total = action.payload.total
            state.loading = false
        },
        [getAccount.pending]: (state) => {
            state.loading = true
        },
    },
})

export const { setAccount, setTableData } = dataSlice.actions

export default dataSlice.reducer
