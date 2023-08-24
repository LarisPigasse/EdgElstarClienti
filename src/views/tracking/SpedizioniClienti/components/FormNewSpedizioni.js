import React, { useState, useEffect } from 'react'
import {
    Input,
    Button,
    Select,
    Avatar,
    FormItem,
    FormContainer,
    toast,
    Notification
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { HiCheck } from 'react-icons/hi'
import { components } from 'react-select'
import { insertSpedizioni,getSpedizioni } from '../store/dataSlice'
import { toggleModalNewSpedizioni } from '../store/stateSlice'
import { useSelector, useDispatch } from 'react-redux'
import * as Yup from 'yup'

const { MultiValueLabel } = components

const CustomSelectOption = ({ innerProps, label, data, isSelected }) => {
    return (
        <div
            className={`flex items-center justify-between p-2 ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center">
                <Avatar shape="circle" size={20} src={data.img} />
                <span className="ml-2 rtl:mr-2">{label}</span>
            </div>
            {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
        </div>
    )
}

const CustomControlMulti = ({ children, data, ...props }) => {
    const { img } = data
    return (
        <MultiValueLabel {...props}>
            <div className="inline-flex items-center">
                <Avatar
                    className="mr-2 rtl:ml-2"
                    shape="circle"
                    size={15}
                    src={img}
                />
                {children}
            </div>
        </MultiValueLabel>
    )
}

const validationSchema = Yup.object().shape({
    //operatore: Yup.string().min(3, 'Too Short!').required('operatore required'),
    //email: Yup.string().required('email required'),
    //password: Yup.string().required('password required')
    // assignees: Yup.array().min(1, 'Assignee required'),
    // rememberMe: Yup.bool(),
})

const FormNewSpedizioni = () => {
    const dispatch = useDispatch()

    const tableData = useSelector(
        (state) => state.trackingSpedizioni.data.tableData
    )

    const onSubmit = async (formValue, setSubmitting) => {

        setSubmitting(true)
       
       let { archiviata,stato } = formValue

         archiviata =  archiviata.value;
         stato = stato.value;

        formValue = {...formValue,
                        archiviata,
                        stato
        }

        let ok = await insertSpedizioni(formValue);

        dispatch(toggleModalNewSpedizioni(false))

        dispatch(getSpedizioni(tableData))
        toast.push(
            <Notification
                title="Spedizione registrato con successo."
                type="success"
                duration={3500}
            >
                qualcosa...
            </Notification>,
            {
                placement: 'top-center',
            }
        )
    }

    return (
        <Formik
            initialValues={{
                id_cliente: '',
                id_spedizione: '',
                id_corriere: '',
                data_spedizione: '',
                altro_numero: '',                
                destinazione: '',
                destinatario: '',
                indirizzo: '',
                cap: '',
                citta: '',
                codice_nazione: '',
                discriminante: '',
                tracking: '',
                data_tracking: '',                                 
                archiviata: '',                
                stato: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
                onSubmit(values, setSubmitting)
            }}
        >
            {({ touched, errors, values, resetForm }) => (
                <Form>
                    <FormContainer>

                        <FormItem
                            label="Cliente"
                            invalid={errors.cliente && touched.cliente}
                            errorMessage={errors.cliente}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="id_cliente"
                                placeholder="Inserisci cliente"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Spedizione"
                            invalid={errors.spedizione && touched.spedizione}
                            errorMessage={errors.spedizione}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="id_spedizione"
                                placeholder="Inserisci spedizione"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Corriere"
                            invalid={errors.corriere && touched.corriere}
                            errorMessage={errors.corriere}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="id_spedizione"
                                placeholder="Inserisci spedizione"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Data spedizione"
                            invalid={errors.data_spedizione && touched.data_spedizione}
                            errorMessage={errors.data_spedizione}
                        >
                            <Field
                                type="date"
                                autoComplete="off"
                                name="data_spedizione"
                                placeholder="Inserisci data spedizione"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Altro numero"
                            invalid={errors.altro_numero && touched.altro_numero}
                            errorMessage={errors.altro_numero}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="altro_numnero"
                                placeholder="Inserisci altro numero"
                                component={Input}
                            />
                        </FormItem>                                                

                        <FormItem
                            label="Destinazione"
                            invalid={errors.destinazione && touched.destinazione}
                            errorMessage={errors.destinazione}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="destinazione"
                                placeholder="Inserisci destinazione"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Destinatario"
                            invalid={errors.destinatario && touched.destinatario}
                            errorMessage={errors.destinatario}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="destinatario"
                                placeholder="Inserisci destinatario"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Indirizzo"
                            invalid={errors.indirizzo && touched.indirizzo}
                            errorMessage={errors.indirizzo}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="indirizzo"
                                placeholder="Inserisci indirizzo"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Cap"
                            invalid={errors.cap && touched.cap}
                            errorMessage={errors.cap}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="cap"
                                placeholder="Inserisci cap"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Citta"
                            invalid={errors.citta && touched.citta}
                            errorMessage={errors.citta}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="citta"
                                placeholder="Inserisci citta"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Codice nazione"
                            invalid={errors.codice_nazione && touched.codice_nazione}
                            errorMessage={errors.codice_nazione}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="codice_nazione"
                                placeholder="Inserisci codice nazione"
                                component={Input}
                            />
                        </FormItem> 

                        <FormItem
                            label="Discriminante"
                            invalid={errors.discriminante && touched.discriminante}
                            errorMessage={errors.discriminante}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="discriminante"
                                placeholder="Inserisci discriminante"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Tracking"
                            invalid={errors.tracking && touched.tracking}
                            errorMessage={errors.tracking}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="tracking"
                                placeholder="Inserisci tracking"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Data tracking"
                            invalid={errors.data_tracking && touched.data_tracking}
                            errorMessage={errors.data_tracking}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="data_tracking"
                                placeholder="Inserisci data tracking"
                                component={Input}
                            />
                        </FormItem>                                                 

                        <FormItem
                            label="Archiviata"
                            invalid={errors.profilo && touched.profilo}
                            errorMessage={errors.profilo}
                        >
                            <Field name="archiviata">
                                {({ field, form }) => (
                                    <Select
                                        className="min-w-[120px]"
                                        field={field}
                                        form={form}
                                        options={[{value:'SI',label:'SI'},{value:'NO',label:'NO'}]}
                                        value={values.archiviata}
                                        onChange={(data) => {
                                            form.setFieldValue(
                                                field.name,
                                                data
                                            )
                                        }}
                                    />
                                )}
                            </Field>
                        </FormItem>

                        <FormItem
                            label="stato"
                            invalid={errors.stato && touched.stato}
                            errorMessage={errors.stato}
                        >
                            <Field name="stato">
                                {({ field, form }) => (
                                    <Select
                                        className="min-w-[120px]"
                                        field={field}
                                        form={form}
                                        options={[{value:'IN CONSEGNA',label:'IN CONSEGNA'},{value:'CONSEGNATA',label:'CONSEGNATA'}]}
                                        value={values.stato}
                                        onChange={(data) => {
                                            console.log(field);
                                            form.setFieldValue(
                                                field.name,
                                                data
                                            )
                                        }}
                                    />
                                )}
                            </Field>
                        </FormItem>

                        <Button block variant="solid" type="submit">
                            Submit
                        </Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}

export default FormNewSpedizioni
