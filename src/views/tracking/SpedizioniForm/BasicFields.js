import React, { useEffect } from 'react'
import { Input, FormItem, Select } from 'components/ui'
import { RichTextEditor } from 'components/shared'
import { Field } from 'formik'
import { useSelector,useDispatch } from 'react-redux'
import { getCorrieri, getClienti } from './store/dataSlice'

const BasicFields = (props) => {
    const { values, touched, errors } = props
   
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCorrieri())
        dispatch(getClienti())
    }, [])

    const corrieriData = useSelector(
        (state) => state.trackingSpedizioneForm.data.corrieriData
    )

    const corrieri = corrieriData.map((corriere) => {
        return {
            label: corriere.corriere,
            value: corriere.id_corriere,
        }
    })
    
    const clientiData = useSelector(
        (state) => state.trackingSpedizioneForm.data.clientiData
    )

    const clienti = clientiData.map((cliente) => {
        return {
            label: cliente.cliente,
            value: cliente.id_cliente,
        }
    })    

    return (
        <>
            <FormItem
                label="Codice spedizione"
                invalid={errors.id_spedizione && touched.id_spedizione}
                errorMessage={errors.id_spedizione}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="id_spedizione"
                    placeholder=""
                    component={Input}
                />
            </FormItem>
            
            <FormItem
                    label="Cliente"
                    invalid={errors.cliente && touched.cliente}
                    errorMessage={errors.cliente}
                >
                    <Field name="id_cliente">
                        {({ field, form }) => (
                            <Select
                                field={field}
                                form={form}
                                options={clienti}
                                value={clienti.filter(
                                    (id_cliente) =>
                                        id_cliente.value === values.id_cliente
                                )}
                                onChange={(option) =>
                                    form.setFieldValue(
                                        field.name,
                                        option.value
                                    )
                                }
                            />
                        )}
                    </Field>
            </FormItem>      

            <FormItem
                    label="Corriere"
                    invalid={errors.corriere && touched.corriere}
                    errorMessage={errors.corriere}
                >
                    <Field name="id_corriere">
                        {({ field, form }) => (
                            <Select
                                field={field}
                                form={form}
                                options={corrieri}
                                value={corrieri.filter(
                                    (id_corriere) =>
                                        id_corriere.value === values.id_corriere
                                )}
                                onChange={(option) =>
                                    form.setFieldValue(
                                        field.name,
                                        option.value
                                    )
                                }
                            />
                        )}
                    </Field>
            </FormItem>                
            <FormItem
                label="Note"
                labelClass="!justify-start"
                invalid={errors.description && touched.description}
                errorMessage={errors.description}
            >
                <Field name="note">
                    {({ field, form }) => (
                        <RichTextEditor
                            value={field.value}
                            onChange={(val) =>
                                form.setFieldValue(field.name, val)
                            }
                        />
                    )}
                </Field>
            </FormItem>
        </>
    )
}

export default BasicFields
