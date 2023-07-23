import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalUpdateOperatore } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateOperatore from './FormUpdateOperatore'

const ModalUpdateOperatore = () => {
    const dispatch = useDispatch()

    const modalUpdateOperatore = useSelector(
        (state) => state.sistemaOperatore.state.modalUpdateOperatore
    )

    const onDialogClose = () => {
        dispatch(toggleModalUpdateOperatore(false))
    }

    return (
        <Dialog
            isOpen={modalUpdateOperatore}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Modifica operatore</h4>
            <div className="mt-4">
                <FormUpdateOperatore />
            </div>
        </Dialog>
    )
}

export default ModalUpdateOperatore
