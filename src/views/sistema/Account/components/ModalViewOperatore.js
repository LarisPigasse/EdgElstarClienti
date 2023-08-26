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

    const dataOperatore = useSelector(
        (state) => state.sistemaOperatore.state.dataOperatore
    )

    return (
        <Dialog
            isOpen={modalViewOperatore}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            width={768}
            height={256}
        >
            <h4>Dettagi operatore {dataOperatore.operatore}</h4>
            <div className="mt-4">
                <div>Operatore: {dataOperatore.operatore}</div>
                <div>Email: {dataOperatore.email}</div>
                <div>Profilo: {dataOperatore.profilo}</div>
                <div>Stato: {dataOperatore.stato}</div>
            </div>
        </Dialog>
    )
}

export default ModalViewOperatore