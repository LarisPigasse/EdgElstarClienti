import React from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import { APP_NAME } from 'constants/app.constant'

const ForgotPassword = () => {
    return (
        <>
            <div className=' mb-8 flex justify-center'>
                <img  src='logoEdg.png' alt={`${APP_NAME} logo`} />
            </div>
            <ForgotPasswordForm disableSubmit={false} />
        </>         
    ) 
}

export default ForgotPassword
