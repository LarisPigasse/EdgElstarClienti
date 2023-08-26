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
import { insertCorrieri,getCorrieri } from '../store/dataSlice'
import { toggleModalNewCorriere } from '../store/stateSlice'
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
    corriere: Yup.string().min(3, 'Too Short!').required('corriere requi'),
})

const FormNewCorriere = () => {
    const dispatch = useDispatch()

    const tableData = useSelector(
        (state) => state.logisticaCorriere.data.tableData
    )

    const onSubmit = async (formValue, setSubmitting) => {

        setSubmitting(true)
       
       let { stato } = formValue

        stato = stato.value;

        formValue = {...formValue,
                        stato
        }

        let ok = await insertCorrieri(formValue);

        dispatch(toggleModalNewCorriere(false))

        dispatch(getCorrieri(tableData))
        toast.push(
            <Notification
                title="Corriere registrato con successo."
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
                corriere: '',
                endpoint: '',
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
                            label="Corriere"
                            invalid={errors.corriere && touched.corriere}
                            errorMessage={errors.corriere}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="corriere"
                                placeholder="Enter Corriere"
                                component={Input}
                            />
                        </FormItem>

                        <FormItem
                            label="Endpoint"
                            invalid={errors.endpoint && touched.endpoint}
                            errorMessage={errors.endpoint}
                        >
                            <Field
                                type="text"
                                autoComplete="off"
                                name="endpoint"
                                placeholder="Enter endpoint"
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
                                        options={[{value:'ATTIVO',label:'ATTIVO'},{value:'INATTIVO',label:'INATTIVO'}]}
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

export default FormNewCorriere
