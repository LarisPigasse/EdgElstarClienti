import { createSlice, current } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'crmCliente/state',
    initialState: {
        selectedRows: [],
        selectedRow: [],
        deleteMode: '',
        dataCliente: '',
        modalNewCliente: false,
        modalUpdateCliente: false,
        modalViewCliente: false,
        statiCliente: [{value:'ATTIVO',label:'ATTIVO'},{value:'INATTIVO',label:'INATTIVO'},{ value:'ELIMINATO',label:'ELIMINATO'}],
    },
    reducers: {
        setSelectedRows: (state, action) => {
            state.selectedRows = action.payload
        },
        setSelectedRow: (state, action) => {
            state.selectedRow = action.payload
        },
        addRowItem: (state, { payload }) => {
            const currentState = current(state)
            if (!currentState.selectedRows.includes(payload)) {
                return {
                    selectedRows: [...currentState.selectedRows, ...payload],
                }
            }
        },
        removeRowItem: (state, { payload }) => {
            const currentState = current(state)
            if (currentState.selectedRows.includes(payload)) {
                return {
                    selectedRows: currentState.selectedRows.filter(
                        (id) => id !== payload
                    ),
                }
            }
        },
        setDeleteMode: (state, action) => {
            state.deleteMode = action.payload
        },
        toggleModalNewCliente: (state, action) => {
            state.modalNewCliente = action.payload
        },
        toggleModalUpdateCliente: (state, action) => {
            state.modalUpdateCliente = action.payload
        },
        toggleModalViewCliente: (state, action) => {
            state.modalViewCliente = action.payload
        },        
        setDataCliente: (state, action) => {
            state.dataCliente = action.payload
        },
    },
})

export const {
    setSelectedRows,
    setSelectedRow,
    addRowItem,
    removeRowItem,
    toggleDeleteConfirmation,
    setDeleteMode,
    toggleModalNewCliente,
    toggleModalUpdateCliente,
    toggleModalViewCliente,
    setDataCliente,
} = stateSlice.actions

export default stateSlice.reducer
