import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import AccountTable from './components/AccountTable'
import AccountTableTools from './components/AccountTableTools'
// import OperatoriDeleteConfirmation from './components/OperatoriDeleteConfirmation'

injectReducer('sistemaAccount', reducer)

const Account = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Account</h3>
                <AccountTableTools />
            </div>
            <AccountTable />
            {/* <OperatoriDeleteConfirmation /> */}
        </AdaptableCard>
    )
}

export default Account