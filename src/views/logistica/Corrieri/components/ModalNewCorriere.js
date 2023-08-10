import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalNewCorriere } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormNewCorriere from './FormNewCorriere'

const ModalNewCorriere = () => {
    const dispatch = useDispatch()

    const modalNewCorriere = useSelector(
        (state) => state.logisticaCorriere.state.modalNewCorriere
    )

    const onDialogClose = () => {
        dispatch(toggleModalNewCorriere(false))
    }

    return (
        <Dialog
            isOpen={modalNewCorriere}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Inserisci nuovo corriere</h4>
            <div className="mt-4">
                <FormNewCorriere />
            </div>
        </Dialog>
    )
}

export default ModalNewCorriere
