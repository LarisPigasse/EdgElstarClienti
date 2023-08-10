import { createSlice, current } from '@reduxjs/toolkit'

const stateSlice = createSlice({
    name: 'logisticaCorriere/state',
    initialState: {
        selectedRows: [],
        selectedRow: [],
        deleteMode: '',
        dataCorriere: '',
        modalNewCorriere: false,
        modalUpdateCorriere: false,
        modalViewCorriere: false,
        statiCorriere: [{value:'ATTIVO',label:'ATTIVO'},{value:'INATTIVO',label:'INATTIVO'},{ value:'ELIMINATO',label:'ELIMINATO'}],
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
        toggleModalNewCorriere: (state, action) => {
            state.modalNewCorriere = action.payload
        },
        toggleModalUpdateCorriere: (state, action) => {
            state.modalUpdateCorriere = action.payload
        },
        toggleModalViewCorriere: (state, action) => {
            state.modalViewCorriere = action.payload
        },        
        setDataCorriere: (state, action) => {
            state.dataCorriere = action.payload
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
    toggleModalNewCorriere,
    toggleModalUpdateCorriere,
    toggleModalViewCorriere,
    setDataCorriere,
} = stateSlice.actions

export default stateSlice.reducer
