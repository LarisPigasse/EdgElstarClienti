import React from 'react'

import {
  HiOutlinePlusCircle
} from 'react-icons/hi'

import ModalNewCliente from './ModalNewCliente'
import ModalUpdateCliente from './ModalUpdateCliente'
import ModalViewCliente from './ModalViewCliente'
import { Button, Input, Tooltip } from 'components/ui'

import {
  toggleModalNewCliente
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function ClientiTableTools() {
  const dispatch = useDispatch()
  const onAddNewCliente = () => {
      dispatch(toggleModalNewCliente(true))
  }

  return (
    <div>
      <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewCliente}
      >
        Nuovo cliente
       </Button>
      
      <ModalNewCliente />
      {/* <ModalUpdateCliente /> */}
      <ModalViewCliente />
      
    </div>
  )
}

export default ClientiTableTools