import React from 'react'

import {
  HiOutlinePlusCircle
} from 'react-icons/hi'

import ModalNewAccount from './ModalNewAccount'
// import ModalUpdateOperatore from './ModalUpdateOperatore'
// import ModalViewOperatore from './ModalViewOperatore'
import { Button } from 'components/ui'

import {
  toggleModalNewAccount
} from '../store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'

function AccountTableTools() {
  const dispatch = useDispatch()
  const onAddNewAccount = () => {
      dispatch(toggleModalNewAccount(true))
  }

  return (
    <div>
      <Button
          size="sm"
          variant="twoTone"
          icon={<HiOutlinePlusCircle />}
          onClick={onAddNewAccount}
      >
        Nuovo account
       </Button>
      
      <ModalNewAccount />
      {/* <ModalUpdateOperatore />
      <ModalViewOperatore /> */}
    </div>
  )
}

export default AccountTableTools