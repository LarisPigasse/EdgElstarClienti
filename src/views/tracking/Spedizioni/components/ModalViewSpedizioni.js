import React, { useEffect, useState } from 'react'
import { Dialog, Button } from 'components/ui'
import { toggleModalViewSpedizioni, setDataSpedizioni } from '../store/stateSlice'
import { getTrackingSpedizione } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalViewSpedizioni = () => {

    const [tracking, setTracking] = useState([]);

    const dispatch = useDispatch()

    const modalViewSpedizioni = useSelector(
        (state) => state.trackingSpedizioni.state.modalViewSpedizioni
    )

    const onDialogClose = () => {
        dispatch(toggleModalViewSpedizioni(false))
        setTracking([])
        dispatch(setDataSpedizioni([]))
    }

    const dataSpedizioni = useSelector(
        (state) => state.trackingSpedizioni.state.dataSpedizioni
    )
    const fetchData = async () => {
        if(dataSpedizioni.id_spedizione){
          let dati = await getTrackingSpedizione(dataSpedizioni.id_spedizione)
          setTracking(dati);
        }
    }

    useEffect(() => {
        fetchData();
    }, [dataSpedizioni]);

    return (
        <Dialog
            isOpen={modalViewSpedizioni}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            preventScroll={false}
            contentClassName={'overflow-y-auto'}
            width={1280}
        >
            <h4>Dettagli Spedizione {dataSpedizioni.id_spedizione}</h4>
            <div className="mt-8">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className=" bg-gray-50 p-2 mb-2">
                        <div className=' mt-1'>Mittente: </div>
                        <div className="font-semibold text-indigo-600">{dataSpedizioni.cliente}</div>
                        <div className="mt-2">Destinatario: </div>
                        <div className="font-semibold text-sky-600">{dataSpedizioni.destinatario}</div>
                        <div className="mt-2">Destinazione: </div>
                        <div className="font-semibold">{dataSpedizioni.destinazione}</div>                        
                        <div className="mt-2">Indirizzo:</div>
                        <div className="font-semibold">{dataSpedizioni.indirizzo}</div>
                        <div className="font-semibold">{dataSpedizioni.cap} - {dataSpedizioni.citta} ({dataSpedizioni.codice_nazione})</div>
                    </div>
                    <div className="col-span-2 mb-2">
  
                        <table className="border-collapse border border-gray-300 w-full">
                            <thead>
                                <tr className=' text-xs text-black font-semibold uppercase'>
                                    <th className="border border-gray-200 p-1">Data</th>
                                    <th className="border border-gray-200 p-1">Località</th>
                                    <th className="border border-gray-200 p-1">Evento</th>
                                    <th className="border border-gray-200 p-1">Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tracking.map( (track, index) => {
                                        let dataTrack = track.data_tracking_format.split('-')      
                                        return (
                                            <tr key={index} className='text-xs text-gray-800'>
                                                <td className="border border-gray-200 p-2 font-semibold">
                                                    <div className='text-indigo-600'>{dataTrack[0]}</div>
                                                    <div>{dataTrack[1]}</div>
                                                </td>
                                                <td className="border border-gray-200 p-2">{track.localita}</td>
                                                <td className="border border-gray-200 p-2">{track.stato}</td>
                                                <td className="border border-gray-200 p-2">{track.info}</td>
                                            </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>                                 

            </div>
            <div className="text-right mt-6">
                <Button
                    className="ltr:mr-2 rtl:ml-2"
                    variant="twoTone"
                    onClick={onDialogClose}
                >
                    Chiudi
                </Button>
            </div>
        </Dialog>
    )
}

export default ModalViewSpedizioni