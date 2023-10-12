import React from 'react'

import {HiPlusCircle } from 'react-icons/hi'
import SpedizioniTableSearch from './SpedizioniTableSearch'
import { Link } from 'react-router-dom'
import ModalViewSpedizioni from './ModalViewSpedizioni'
import { Button } from 'components/ui'

import { useDispatch } from 'react-redux'

function SpedizioniTableTools() {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
    <SpedizioniTableSearch />
    <Link
        className="block lg:inline-block md:mb-0 mb-4"
        to="/tracking/spedizioni-new"
    >
        <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
            Add Spedizione
        </Button>
    </Link>
    <ModalViewSpedizioni />
</div>
  )
}

export default SpedizioniTableTools