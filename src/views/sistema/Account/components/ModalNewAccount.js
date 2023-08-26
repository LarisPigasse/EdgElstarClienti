import React from 'react'
import { Dialog } from 'components/ui'
import { toggleModalNewAccount } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormNewAccount from './FormNewAccount'

const ModalNewAccount = () => {
    const dispatch = useDispatch()

    const modalNewAccount = useSelector(
        (state) => state.sistemaAccount.state.modalNewAccount
    )

    const onDialogClose = () => {
        dispatch(toggleModalNewAccount(false))
    }

    return (
        <Dialog
            isOpen={modalNewAccount}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h4>Inserisci nuovo Account</h4>
            <div className="mt-4">
                <FormNewAccount />
            </div>
        </Dialog>
    )
}

export default ModalNewAccount
