import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalViewOperatore } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalViewOperatore = () => {
    const dispatch = useDispatch()

    const modalViewOperatore = useSelector(
        (state) => state.sistemaOperatore.state.modalViewOperatore
    )

    const onDialogClose = () => {
        dispatch(toggleModalViewOperatore(false))
    }

    return (
        <Dialog
            isOpen={modalViewOperatore}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            width={1024}
            height={256}
        >
            <h4>Dettagi operatore</h4>
            <div className="mt-4">
                Qui ci va la scheda operatore
            </div>
        </Dialog>
    )
}

export default ModalViewOperatore