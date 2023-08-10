import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalUpdateCorriere } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateCorriere from './FormUpdateCorriere'

const ModalUpdateCorriere = () => {
    const dispatch = useDispatch()

    const modalUpdateCorriere = useSelector(
        (state) => state.logisticaCorriere.state.modalUpdateCorriere
    )

    const onDialogClose = () => {
        dispatch(toggleModalUpdateCorriere(false))
    }

    return (
        <Dialog
            isOpen={modalUpdateCorriere}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Modifica corriere</h4>
            <div className="mt-4">
                <FormUpdateCorriere />
            </div>
        </Dialog>
    )
}

export default ModalUpdateCorriere
