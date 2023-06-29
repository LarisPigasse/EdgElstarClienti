import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className="mb-8">
                <h3 className="mb-1">Benvenuto</h3>
                <p>Inserisci le credenziali del tuo account per entrare nell'area riservata</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
