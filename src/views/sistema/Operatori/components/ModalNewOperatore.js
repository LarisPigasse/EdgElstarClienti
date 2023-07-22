import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalNewOperatore } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormNewOperatore from './FormNewOperatore'

const ModalNewOperatore = () => {
    const dispatch = useDispatch()

    const modalOperatore = useSelector(
        (state) => state.sistemaOperatore.state.modalOperatore
    )

    const onDialogClose = () => {
        dispatch(toggleModalNewOperatore(false))
    }

    return (
        <Dialog
            isOpen={modalOperatore}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Inserisci nuovo operatore</h4>
            <div className="mt-4">
                <FormNewOperatore />
            </div>
        </Dialog>
    )
}

export default ModalNewOperatore
