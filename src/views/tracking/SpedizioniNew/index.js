import React from 'react'
import SpedizioniForm from 'views/tracking/SpedizioniForm'
import { toast, Notification } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import { apiInsertSpedizioni } from 'services/SpedizioniService'

const SpedizioniNew = () => {
    const navigate = useNavigate()

    const addSpedizioni = async (data) => {
        const response = await apiInsertSpedizioni(data)
        return response.data
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await addSpedizioni(values)
        setSubmitting(false)
        if (success) {
            toast.push(
                <Notification
                    title={'Successfuly added'}
                    type="success"
                    duration={2500}
                >
                    La spedizione è stata inserita con successo
                </Notification>,
                {
                    placement: 'top-center',
                }
            )
            navigate('/tracking/spedizioni')
        }
    }

    const handleDiscard = () => {
        navigate('/tracking/spedizioni')
    }
    const initialSpedizione = {
        altro_numero:'',
        id_cliente:'',
        destinatario:'',
        destinazione:'',
        id_corriere:'',
        indirizzo:'',
        cap:'',
        citta:'',
        note:'',
    }

    return (
        <>
            <SpedizioniForm
                type="new"
                initialData={initialSpedizione}
                onFormSubmit={handleFormSubmit}
                onDiscard={handleDiscard}
            />
        </>
    )
}

export default SpedizioniNew
