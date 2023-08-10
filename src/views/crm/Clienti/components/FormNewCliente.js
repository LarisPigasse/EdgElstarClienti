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
import { insertClienti,getClienti } from '../store/dataSlice'
import { toggleModalNewCliente } from '../store/stateSlice'
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
    cliente: Yup.string().min(3, 'Troppo corto!').required('cliente necessario'),
    email: Yup.string().required('email necessaria'),
    partita_iva: Yup.string().min(11, 'Troppo corta!').required('partita iva necessaria'),
    // assignees: Yup.array().min(1, 'Assignee required'),
    // rememberMe: Yup.bool(),
})

const FormNewCliente = () => {
    const dispatch = useDispatch()

    const tableData = useSelector(
        (state) => state.crmCliente.data.tableData
    )

    const onSubmit = async (formValue, setSubmitting) => {

        setSubmitting(true)
       
       let { stato } = formValue

         stato = stato.value;

        formValue = {...formValue,
                        stato
        }

        let ok = await insertClienti(formValue);

        dispatch(toggleModalNewCliente(false))

        dispatch(getClienti(tableData))
        toast.push(
            <Notification
                title="Cliente registrato con successo."
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
                cliente: '',
                email: '',
                partita_iva: '',
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
                            invalid={errors.operatore && touched.operatore}
                            errorMessage={errors.operatore}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="cliente"
                                placeholder="Inserisci cliente"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Email"
                            invalid={errors.email && touched.email}
                            errorMessage={errors.email}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="email"
                                placeholder="Enter email"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Partita IVA"
                            invalid={errors.password && touched.password}
                            errorMessage={errors.password}
                        >
                            <Field
                                type="partita_iva"
                                autoComplete="off"
                                name="partita_iva"
                                placeholder="Inserisci partita iva"
                                component={Input}
                            />
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
                                        options={[{value:'Attivo',label:'Attivo'},{value:'Inattivo',label:'Inattivo'}]}
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

export default FormNewCliente
