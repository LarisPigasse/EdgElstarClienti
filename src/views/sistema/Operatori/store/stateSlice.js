import { createSlice, current } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'sistemaOperatore/state',
    initialState: {
        selectedRows: [],
        selectedRow: [],
        deleteMode: '',
        modalNewOperatore: false,
        modalUpdateOperatore: false,
        statiOperatore: [{value:'ATTIVO',label:'ATTIVO'},{value:'INATTIVO',label:'INATTIVO'},{ value:'ELIMINATO',label:'ELIMINATO'}],
        profiliOperatore: [{value:'ADMIN',label:'ADMIN'},{value:'USER',label:'USER'}]
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
        toggleModalNewOperatore: (state, action) => {
            state.modalNewOperatore = action.payload
        },
        toggleModalUpdateOperatore: (state, action) => {
            state.modalUpdateOperatore = action.payload
        },
        setDataOperatore: (state, action) => {
            state.dataOperatore = action.payload
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
    toggleModalNewOperatore,
    toggleModalUpdateOperatore,
    setDataOperatore,
} = stateSlice.actions

export default stateSlice.reducer
