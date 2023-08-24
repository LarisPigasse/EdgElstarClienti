import React from 'react'
import ModalViewSpedizioni from './ModalViewSpedizioni'

import {
  toggleModalNewSpedizioni
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function SpedizioniTableTools() {
  const dispatch = useDispatch()

  return (
    <div>
      <ModalViewSpedizioni />

    </div>
  )
}

export default SpedizioniTableTools