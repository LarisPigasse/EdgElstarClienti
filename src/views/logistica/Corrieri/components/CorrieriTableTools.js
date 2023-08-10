import React from 'react'

import {
  HiOutlinePlusCircle
} from 'react-icons/hi'

import ModalNewCorriere from './ModalNewCorriere'
import ModalUpdateCorriere from './ModalUpdateCorriere'
import ModalViewCorriere from './ModalViewCorriere'
import { Button, Input, Tooltip } from 'components/ui'

import {
  toggleModalNewCorriere
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function CorrieriTableTools() {
  const dispatch = useDispatch()
  const onAddNewCorriere = () => {
      dispatch(toggleModalNewCorriere(true))
  }

  return (
    <div>
      <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewCorriere}
      >
        Nuovo corriere
       </Button>
      
      <ModalNewCorriere />
      <ModalUpdateCorriere />
      <ModalViewCorriere />
      
    </div>
  )
}

export default CorrieriTableTools