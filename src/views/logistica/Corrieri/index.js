import React from 'react'
import reducer from './store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import CorrieriTable from './components/CorrieriTable'
import CorrieriTableTools from './components/CorrieriTableTools'
import CorrieriDeleteConfirmation from './components/CorrieriDeleteConfirmation'

injectReducer('logisticaCorriere', reducer)

const Corrieri = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Corrieri</h3>
                <CorrieriTableTools />
            </div>
            <CorrieriTable />
            <CorrieriDeleteConfirmation />
        </AdaptableCard>
    )
}

export default Corrieri