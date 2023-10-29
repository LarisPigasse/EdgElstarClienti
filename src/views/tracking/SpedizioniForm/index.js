import React, { forwardRef } from 'react'
import { FormContainer, Button, hooks } from 'components/ui'
import { StickyFooter } from 'components/shared'
import { Form, Formik } from 'formik'
import BasicFields from './BasicFields'
import cloneDeep from 'lodash/cloneDeep'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'

const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
    id_spedizione: Yup.number().required('Inserire il codice spedizione'),
    id_cliente: Yup.number().required('Inserire il cliente'),
    destinatario: Yup.string().required('Inserire il destinatario'),
    destinazione: Yup.string().required('Inserire la destinazione'),
    id_corriere: Yup.number().required('Inserire il corriere'),
    indirizzo: Yup.string().required('Inserire indirizzo'),
})

const SpedizioniForm = forwardRef((props, ref) => {
    const { type, initialData, onFormSubmit, onDiscard } = props

    const newId = useUniqueId('product-')

    return (
        <>
            <Formik
                innerRef={ref}
                initialValues={{
                    ...initialData,
                    tags: initialData?.tags
                        ? initialData.tags.map((value) => ({
                              label: value,
                              value,
                          }))
                        : [],
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const formData = cloneDeep(values)
                    formData.tags = formData.tags.map((tag) => tag.value)
                    if (type === 'new') {
                        formData.id = newId
                        if (formData.imgList.length > 0) {
                            formData.img = formData.imgList[0].img
                        }
                    }
                    onFormSubmit?.(formData, setSubmitting)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="lg:col-span-1">
                                    <BasicFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                    <BasicFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />                                    
                                </div>
                                <div className="lg:col-span-1">
                                    <BasicFields
                                        touched={touched}
                                        errors={errors}
                                        values={values}
                                    />
                                </div>                                
                            </div>                           
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div>

                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        onClick={() => onDiscard?.()}
                                        type="button"
                                    >
                                        Annulla
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        loading={isSubmitting}
                                        icon={<AiOutlineSave />}
                                        type="submit"
                                    >
                                        Salva
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    )
})

SpedizioniForm.defaultProps = {
    type: 'edit',
    initialData: {
        id_cliente: 0,
        id_spedizione: 0,
        id_corriere: 0,
        destinatario: '',
        destinazione: '',
        indirizzo: '',
        cap: '',
        citta: '',
        codice_nazione: '',
        data_spedizione: '',
    },
}

export default SpedizioniForm
