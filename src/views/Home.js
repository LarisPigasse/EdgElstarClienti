import React from 'react'
import { AdaptableCard } from 'components/shared'

const Home = () => {
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Home</h3>
            </div>
            <div className=' font-bold text-sky-500 text-base'>
                Benvenuto nella tua area riservata
            </div>          
        </AdaptableCard>        
    )
}

export default Home
