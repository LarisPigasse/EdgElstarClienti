import React from 'react'
import SignUpForm from './SignUpForm'
import { APP_NAME } from 'constants/app.constant'

const SignUp = () => {
    return (
        <>
            <div className=' mb-8 flex justify-center'>
               <img  src='logoEdg.png' alt={`${APP_NAME} logo`} />
            </div>
            <div className="mb-6">
                <h3 className="mb-1 text-center">Registrati</h3>            
            </div>
            <SignUpForm disableSubmit={false} />
            <div className=' mt-8'>
                <span className=' font-bold'>Nota bene: </span>
                L'account dovrà essere attivato. Riceverà conferma via email.   
            </div>
        </>
    )
}

export default SignUp
