import React from 'react'
import { toast, Notification } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import {
    setDeleteMode,
    setSelectedRow,
    setSelectedRows,
} from '../store/stateSlice'
import { deleteSpedizioni, getSpedizioni } from '../store/dataSlice'

const SpedizioniDeleteConfirmation = () => {
    const dispatch = useDispatch()
    const selectedRows = useSelector(
        (state) => state.trackingSpedizioni.state.selectedRows
    )
    const selectedRow = useSelector(
        (state) => state.trackingSpedizioni.state.selectedRow
    )
    const deleteMode = useSelector(
        (state) => state.trackingSpedizioni.state.deleteMode
    )
    const tableData = useSelector(
        (state) => state.trackingSpedizioni.data.tableData
    )

    const onDialogClose = () => {
        dispatch(setDeleteMode(''))

        if (deleteMode === 'single') {
            dispatch(setSelectedRow([]))
        }
    }

    const onDelete = async () => {
        dispatch(setDeleteMode(''))

        if (deleteMode === 'single') {
            const success = await deleteSpedizioni(selectedRow)
            deleteSucceed(success)
            dispatch(setSelectedRow([]))
        }

        if (deleteMode === 'batch') {
            const success = await deleteSpedizioni({ id: selectedRows })
            deleteSucceed(success, selectedRows.length)
            dispatch(setSelectedRows([]))
        }
    }

    const deleteSucceed = (success, orders) => {
        if (success) {
            dispatch(getSpedizioni(tableData))
            toast.push(
                <Notification
                    title={'Eliminazione completata con successo'}
                    type="success"
                    duration={2500}
                >
                    {deleteMode === 'single' && 'Order '}
                    {deleteMode === 'batch' && `${orders} orders `}
                    successfuly deleted
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
        }
    }

    return (
        <ConfirmDialog
            isOpen={deleteMode === 'single' || deleteMode === 'batch'}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            type="danger"
            title="Delete product"
            onCancel={onDialogClose}
            onConfirm={onDelete}
            confirmButtonColor="red-600"
        >
            <p>
                Sei sicuro di procedere all'eliminazione della spedizione selezionata. La procedura non è reversibile.
            </p>
        </ConfirmDialog>
    )
}

export default SpedizioniDeleteConfirmation
