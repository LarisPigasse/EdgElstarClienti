import React, { useEffect } from 'react'
import { Dialog } from 'components/ui'
import { toggleModalViewCliente } from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalViewCliente = () => {
    const dispatch = useDispatch()

    const modalViewCliente = useSelector(
        (state) => state.crmCliente.state.modalViewCliente
    )

    const onDialogClose = () => {
        dispatch(toggleModalViewCliente(false))
    }

    const dataCliente = useSelector(
        (state) => state.crmCliente.state.dataCliente
    )

    useEffect(() => {
      if (!dataCliente) {
        return;
      }
    }, [dataCliente])
    

    return (
        <Dialog
            isOpen={modalViewCliente}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            width={768}
            height={256}
        >
            <h4>Dettagi operatore {dataCliente.cliente}</h4>
            <div className="mt-4">
                <div>Cliente: {dataCliente.cliente}</div>
                <div>Email: {dataCliente.email}</div>
                <div>Profilo: {dataCliente.partita_iva}</div>
                <div>Stato: {dataCliente.stato}</div>
            </div>
        </Dialog>
    )
}

export default ModalViewCliente