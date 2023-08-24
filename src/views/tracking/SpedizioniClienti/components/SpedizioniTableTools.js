import React from 'react'

import {
  HiOutlinePlusCircle
} from 'react-icons/hi'

import ModalNewSpedizioni from './ModalNewSpedizioni'
import ModalUpdateSpedizioni from './ModalUpdateSpedizioni'
import ModalViewSpedizioni from './ModalViewSpedizioni'
import { Button, Input, Tooltip } from 'components/ui'

import {
  toggleModalNewSpedizioni
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function SpedizioniTableTools() {
  const dispatch = useDispatch()
  const onAddNewSpedizioni = () => {
    console.log('xu')
      dispatch(toggleModalNewSpedizioni(true))
  }

  return (
    <div>
      {/* <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewSpedizioni}
      >
        Nuova Spedizione
       </Button> */}
      
      {/* <ModalNewSpedizioni /> */}
      <ModalUpdateSpedizioni />
      <ModalViewSpedizioni />
      
    </div>
  )
}

export default SpedizioniTableTools