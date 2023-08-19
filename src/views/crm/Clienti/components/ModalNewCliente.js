import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalNewCliente } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormNewCliente from './FormNewCliente'

const ModalNewCliente = () => {
    const dispatch = useDispatch()

    const modalNewCliente = useSelector(
        (state) => state.crmCliente.state.modalNewCliente
    )

    const onDialogClose = () => {
        dispatch(toggleModalNewCliente(false))
    }

    return (

        <Dialog
            isOpen={modalNewCliente}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Inserisci nuovo cliente</h4>
            <div className="mt-4">
                <FormNewCliente />
            </div>
        </Dialog>
    )
}

export default ModalNewCliente
