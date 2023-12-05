import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSpedizioniClienti, apiGetTrackingSpedizione} from 'services/SpedizioniService'

export const getSpedizioniClienti = createAsyncThunk(
    'trackingSpedizioni/data/getSpedizioniClienti',
    async (data) => {
        const response = await apiGetSpedizioniClienti(data)
        return response.data
    }
)

export const getTracking = createAsyncThunk(
    'trackingSpedizioni/data/getTracking',
    async (data) => {
        if(data === 0){
            return [];
        }
        const response = await apiGetTrackingSpedizione(data)
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
        spedizioni: [],
        dataTracking: [],
        idDelete: {},
        tableData: initialTableData
    },
    reducers: {
        setTrackingSpedizioni: (state, action) => {
            state.trackingSpedizioni = action.payload
        },
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        },
        setIdDelete: (state, action) => {
            state.idDelete = action.payload
        }
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
        [getTracking.fulfilled]: (state, action) => {
            state.dataTracking = action.payload;
        }
    },
})

export const { setSpedizioni, setTableData, setTrackingSpedizioni,setIdDelete } = dataSlice.actions

export default dataSlice.reducer
