import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import ClientiTable from './components/ClientiTable'
import ClientiTableTools from './components/ClientiTableTools'
import ClientiDeleteConfirmation from './components/ClientiDeleteConfirmation'

injectReducer('crmCliente', reducer)

const Clienti = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Clienti</h3>
                <ClientiTableTools />
            </div>
            <ClientiTable />
            {/* <ClientiDeleteConfirmation /> */}
        </AdaptableCard>
    )
}

export default Clienti