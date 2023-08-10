import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalUpdateCliente } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateCliente from './FormUpdateCliente'

const ModalUpdateCliente = () => {
    const dispatch = useDispatch()

    const modalUpdateCliente = useSelector(
        (state) => state.crmCliente.state.modalUpdateCliente
    )

    const onDialogClose = () => {
        dispatch(toggleModalUpdateCliente(false))
    }

    return (
        <Dialog
            isOpen={modalUpdateCliente}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Modifica Cliente</h4>
            <div className="mt-4">
                <FormUpdateCliente />
            </div>
        </Dialog>
    )
}

export default ModalUpdateCliente
