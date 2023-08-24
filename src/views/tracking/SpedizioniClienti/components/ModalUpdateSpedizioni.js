import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalUpdateSpedizioni } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateSpedizioni from './FormUpdateSpedizioni'

const ModalUpdateSpedizioni = () => {
    const dispatch = useDispatch()

    const modalUpdateSpedizioni = useSelector(
        (state) => state.trackingSpedizioni.state.modalUpdateSpedizioni
    )

    const onDialogClose = () => {
        dispatch(toggleModalUpdateSpedizioni(false))
    }

    return (
        <Dialog
            isOpen={modalUpdateSpedizioni}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Modifica Spedizioni</h4>
            <div className="mt-4">
                <FormUpdateSpedizioni />
            </div>
        </Dialog>
    )
}

export default ModalUpdateSpedizioni
