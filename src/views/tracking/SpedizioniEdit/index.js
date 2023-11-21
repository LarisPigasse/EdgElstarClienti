import React, { useEffect } from 'react'
import { Loading, DoubleSidedImage } from 'components/shared'
import { toast, Notification } from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import reducer from './store'
import { injectReducer } from 'store/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { getSpedizione, updateSpedizione, getCorrieri} from './store/dataSlice'
import SpedizioniForm from 'views/tracking/SpedizioniForm'
import isEmpty from 'lodash/isEmpty'

injectReducer('trackingSpedizioneEdit', reducer)

const SpedizioniEdit = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const spedizioneData = useSelector(
        (state) => state.trackingSpedizioneEdit.data.spedizioneData
    )
    const loading = useSelector((state) => state.trackingSpedizioneEdit.data.loading)

    const fetchData = (data) => {
        dispatch(getSpedizione(data))
        //dispatch(getCorrieri(data))
    }

    const handleFormSubmit = async (values, setSubmitting) => {
        setSubmitting(true)
        const success = await updateSpedizione(values)
        setSubmitting(false)
        if (success) {
            popNotification('modificata')
        }
    }

    const handleDiscard = () => {
        navigate('/tracking/spedizioni')
    }

    const popNotification = (keyword) => {
        toast.push(
            <Notification
                title={`Modificata ${keyword}`}
                type="success"
                duration={2500}
            >
                Spedizione modificata {keyword}
            </Notification>,
            {
                placement: 'top-center',
            }
        )
        navigate('/tracking/spedizioni')
    }

    useEffect(() => {
        const path = location.pathname.substring(
            location.pathname.lastIndexOf('/') + 1
        )
        const rquestParam = { id: path }
        fetchData(rquestParam)
    }, [location.pathname])

    return (
        <>
            <Loading loading={loading}>
                {!isEmpty(spedizioneData) && (
                    <>
                        <SpedizioniForm
                            type="edit"
                            initialData={spedizioneData}
                            onFormSubmit={handleFormSubmit}
                            onDiscard={handleDiscard}
                        />
                    </>
                )}
            </Loading>
            {!loading && isEmpty(spedizioneData) && (
                <div className="h-full flex flex-col items-center justify-center">
                    <DoubleSidedImage
                        src="/img/others/img-2.png"
                        darkModeSrc="/img/others/img-2-dark.png"
                        alt="Spedizione non trovata"
                    />
                    <h3 className="mt-8">Spedizione non trovata</h3>
                </div>
            )}
        </>
    )
}

export default SpedizioniEdit
