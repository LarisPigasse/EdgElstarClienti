import { createSlice, current } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'sistemaAccount/state',
    initialState: {
        selectedRows: [],
        selectedRow: [],
        deleteMode: '',
        dataAccount: '',
        modalNewAccount: false,
        modalUpdateAccount: false,
        modalViewAccount: false,
        statiAccount: [{value:'ATTIVO',label:'ATTIVO'},{value:'INATTIVO',label:'INATTIVO'},{ value:'ELIMINATO',label:'ELIMINATO'}],
        profiliAccount: [{value:'ADMIN',label:'ADMIN'},{value:'USER',label:'USER'}]
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
        toggleModalNewAccount: (state, action) => {
            state.modalNewAccount = action.payload
        },
        toggleModalUpdateAccount: (state, action) => {
            state.modalUpdateAccount = action.payload
        },
        toggleModalViewAccount: (state, action) => {
            state.modalViewAccount = action.payload
        },        
        setDataAccount: (state, action) => {
            state.dataAccount = action.payload
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
    toggleModalNewAccount,
    toggleModalUpdateAccount,
    toggleModalViewAccount,
    setDataAccount,
} = stateSlice.actions

export default stateSlice.reducer
