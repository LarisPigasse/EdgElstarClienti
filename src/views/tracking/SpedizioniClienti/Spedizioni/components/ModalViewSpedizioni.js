import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalViewSpedizioni } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalViewSpedizioni = () => {
    const dispatch = useDispatch()

    const modalViewSpedizioni = useSelector(
        (state) => state.trackingSpedizioni.state.modalViewSpedizioni
    )

    const onDialogClose = () => {
        dispatch(toggleModalViewSpedizioni(false))
    }

    const dataSpedizioni = useSelector(
        (state) => state.trackingSpedizioni.state.dataSpedizioni
    )

    return (
        <Dialog
            isOpen={modalViewSpedizioni}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            width={768}
            height={256}
        >
            <h4>Dettagi Spedizione {dataSpedizioni.id_spedizione}</h4>
            <div className="mt-4">
                <div>Data spedizione: {dataSpedizioni.data_spedizione}</div>
                <div>Destinazione: {dataSpedizioni.destinazionel}</div>
                <div>Destinatario: {dataSpedizioni.destinatario}</div>
                <div>Tracking: {dataSpedizioni.tracking}</div>
            </div>
        </Dialog>
    )
}

export default ModalViewSpedizioni