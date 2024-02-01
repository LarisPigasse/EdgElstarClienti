import React from 'react'
import CercaSpedizioneForm from './cercaSpedizione'
import { APP_NAME } from 'constants/app.constant'

const cercaSpedizione = () => {
    return (
        <>
            <div className=' mb-8 flex justify-center'>
                <img  src='../logoEdg.png' alt={`${APP_NAME} logo`} />
            </div>
            <CercaSpedizioneForm  />
        </>         
    ) 
}

export default cercaSpedizione