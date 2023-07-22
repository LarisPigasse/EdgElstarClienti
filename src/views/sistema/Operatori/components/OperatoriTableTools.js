import React from 'react'

import {
  HiOutlinePlusCircle
} from 'react-icons/hi'

import ModalNewOperatore from './ModalNewOperatore'
import { Button, Input, Tooltip } from 'components/ui'

import {
  toggleModalNewOperatore
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function OperatoriTableTools() {
  const dispatch = useDispatch()
  const onAddNewOperatore = () => {
      dispatch(toggleModalNewOperatore(true))
  }

  return (
    <div>
      OperatoriTableTools
      <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewOperatore}
      >
        New operatore
       </Button>
      
      <ModalNewOperatore />
      
    </div>
  )
}

export default OperatoriTableTools