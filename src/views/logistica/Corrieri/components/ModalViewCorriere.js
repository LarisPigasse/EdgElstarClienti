import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalViewCorriere } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalViewCorriere = () => {
    const dispatch = useDispatch()

    const modalViewCorriere = useSelector(
        (state) => state.logisticaCorriere.state.modalViewCorriere
    )

    const onDialogClose = () => {
        dispatch(toggleModalViewCorriere(false))
    }

    const dataCorriere = useSelector(
        (state) => state.logisticaCorriere.state.dataCorriere
    )

    return (
        <Dialog
            isOpen={modalViewCorriere}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            width={768}
            height={256}
        >
            <h4>Dettagi operatore {dataCorriere.corriere}</h4>
            <div className="mt-4">
                <div>Corriere: {dataCorriere.corriere}</div>
                <div>Endpoint: {dataCorriere.endpoint}</div>
                <div>Stato: {dataCorriere.stato}</div>
            </div>
        </Dialog>
    )
}

export default ModalViewCorriere