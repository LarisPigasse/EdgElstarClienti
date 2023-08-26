import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalUpdateAccount } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUpdateOperatore from './FormUpdateOperatore'

const ModalUpdateAccount = () => {
    const dispatch = useDispatch()

    const modalUpdateAccount = useSelector(
        (state) => state.sistemaAccount.state.modalUpdateAccount
    )

    const onDialogClose = () => {
        dispatch(toggleModalUpdateAccount(false))
    }

    return (
        <Dialog
            isOpen={modalUpdateAccount}
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

export default ModalUpdateAccount
