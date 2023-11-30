import React from 'react'
import ResetPasswordForm from './ResetPasswordForm'
import { APP_NAME } from 'constants/app.constant'

const ResetPassword = () => {
    return(
    <>
        <div className=' mb-8 flex justify-center'>
            <img  src='logoEdg.png' alt={`${APP_NAME} logo`} />
        </div>
        <ResetPasswordForm disableSubmit={false} />
    </> 
    )
}

export default ResetPassword
