import React from 'react'
import { Formik, Field, Form } from 'formik';

const cercaSpedizioneForm = () => {
    return (
        <div>
            <div className=' text-center font-bold text-3xl p-4'>Cerca spedizione</div>
            <div className='text-center text-base font-semibold'>Per visualizzare il tracking di una spedizione inserisci il numero spedizione e premi invia</div>

            <Formik
            initialValues={{
                testo: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            >
                <Form>

                    <label htmlFor="email">Numero spedizione</label>
                    <Field
                    id="discriminante"
                    name="Numero spedizione"
                    placeholder="inserisci un numero di spedizione valido"
                    type="text"
                    />
                            
                    <button type="submit">Invia</button>

                </Form>
            </Formik>
        </div>        
    ) 
}

export default cercaSpedizioneForm